
export enum GameStatus {
  START = 'START',
  PLAYING = 'PLAYING',
  GAMEOVER = 'GAMEOVER',
  WIN = 'WIN'
}

export interface Vector {
  x: number;
  y: number;
}

export interface Weapon {
  name: string;
  fireRate: number; // ms between shots
  damage: number;
  bulletSpeed: number;
  spread: number;
  bulletsPerShot: number;
  color: string;
  killsToAdvance: number;
  description: string;
  type: 'auto' | 'burst' | 'semi' | 'spread';
}

export interface Entity {
  id: string;
  pos: Vector;
  vel: Vector;
  radius: number;
  health: number;
  maxHealth: number;
}

export interface Player extends Entity {
  weaponIndex: number;
  score: number;
  kills: number;
  killsWithCurrentWeapon: number;
  angle: number;
  lastFired: number;
}

export interface Bullet {
  id: string;
  pos: Vector;
  vel: Vector;
  damage: number;
  color: string;
  radius: number;
}

export interface Enemy extends Entity {
  type: 'grunt' | 'charger' | 'tank';
  speed: number;
}

export interface Particle {
  pos: Vector;
  vel: Vector;
  life: number;
  color: string;
}
