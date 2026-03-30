
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GameStatus, Player, Weapon } from './types';
import { WEAPONS, INITIAL_PLAYER_HEALTH } from './constants';
import GameCanvas from './components/GameCanvas';
import HUD from './components/HUD';
import Overlay from './components/Overlay';
import { getIntroMessage, getArenaCommentary } from './services/geminiService';
import { Trophy, Target, Shield, Sword } from 'lucide-react';

const App: React.FC = () => {
  const [status, setStatus] = useState<GameStatus>(GameStatus.START);
  const [playerState, setPlayerState] = useState<Partial<Player>>({
    health: INITIAL_PLAYER_HEALTH,
    kills: 0,
    weaponIndex: 0,
    score: 0
  });
  const [commentary, setCommentary] = useState<string>("");
  const [highScore, setHighScore] = useState<number>(0);

  // Initialize high score from storage
  useEffect(() => {
    const saved = localStorage.getItem('gun-gen-highscore');
    if (saved) setHighScore(parseInt(saved));
  }, []);

  useEffect(() => {
    if (status === GameStatus.START) {
      getIntroMessage().then(setCommentary);
    }
  }, [status]);

  const handleLevelUp = useCallback(async (weaponName: string) => {
    const msg = await getArenaCommentary("leveled up", weaponName);
    setCommentary(msg);
  }, []);

  const handlePlayerUpdate = useCallback((update: Partial<Player>) => {
    setPlayerState(prev => {
      const newState = { ...prev, ...update };
      if (newState.weaponIndex !== prev.weaponIndex && newState.weaponIndex !== undefined) {
        const weapon = WEAPONS[newState.weaponIndex];
        handleLevelUp(weapon.name);
      }
      return newState;
    });
  }, [handleLevelUp]);

  const handleGameOver = useCallback((score: number) => {
    setStatus(GameStatus.GAMEOVER);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('gun-gen-highscore', score.toString());
    }
    setCommentary("GAME OVER! BETTER LUCK NEXT TIME!");
  }, [highScore]);

  const handleWin = useCallback((score: number) => {
    setStatus(GameStatus.WIN);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('gun-gen-highscore', score.toString());
    }
    setCommentary("CHAMPION! YOU HAVE CONQUERED THE ARENA!");
  }, [highScore]);

  const startGame = () => {
    setPlayerState({
      health: INITIAL_PLAYER_HEALTH,
      kills: 0,
      weaponIndex: 0,
      score: 0
    });
    setStatus(GameStatus.PLAYING);
  };

  return (
    <div className="relative w-screen h-screen bg-black select-none overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}
      />

      {status === GameStatus.PLAYING ? (
        <>
          <GameCanvas 
            onPlayerUpdate={handlePlayerUpdate} 
            onGameOver={handleGameOver}
            onWin={handleWin}
          />
          <HUD 
            health={playerState.health || 0}
            kills={playerState.kills || 0}
            score={playerState.score || 0}
            weaponIndex={playerState.weaponIndex || 0}
            commentary={commentary}
          />
        </>
      ) : (
        <Overlay 
          status={status} 
          score={playerState.score || 0} 
          highScore={highScore}
          onStart={startGame} 
        />
      )}
    </div>
  );
};

export default App;
