
import { Weapon } from './types';

export const WEAPONS: Weapon[] = [
  {
    name: 'Standard Issue Pistol',
    fireRate: 500,
    damage: 25,
    bulletSpeed: 10,
    spread: 0,
    bulletsPerShot: 1,
    color: '#34d399', // Emerald
    killsToAdvance: 2,
    description: 'Reliable, accurate, but slow.',
    type: 'semi'
  },
  {
    name: 'Dual Raptors',
    fireRate: 250,
    damage: 15,
    bulletSpeed: 19,
    spread: 0.1,
    bulletsPerShot: 2,
    color: '#60a5fa', // Blue
    killsToAdvance: 3,
    description: 'Double the fire, double the fun.',
    type: 'semi'
  },
  {
    name: 'Viper SMG',
    fireRate: 100,
    damage: 8,
    bulletSpeed: 19,
    spread: 0.15,
    bulletsPerShot: 1,
    color: '#f472b6', // Pink
    killsToAdvance: 5,
    description: 'High rate of fire, low precision.',
    type: 'auto'
  },
  {
    name: 'Breacher Shotgun',
    fireRate: 800,
    damage: 12,
    bulletSpeed: 19,
    spread: 0.5,
    bulletsPerShot: 8,
    color: '#fbbf24', // Amber
    killsToAdvance: 4,
    description: 'Devastating at close range.',
    type: 'spread'
  },
  {
    name: 'Cobra Assault Rifle',
    fireRate: 150,
    damage: 18,
    bulletSpeed: 19,
    spread: 0.05,
    bulletsPerShot: 1,
    color: '#a78bfa', // Violet
    killsToAdvance: 6,
    description: 'The standard for modern warfare.',
    type: 'auto'
  },
  {
    name: 'Railgun',
    fireRate: 1200,
    damage: 100,
    bulletSpeed: 30,
    spread: 0,
    bulletsPerShot: 1,
    color: '#ef4444', // Red
    killsToAdvance: 3,
    description: 'One shot, one kill. High recharge.',
    type: 'semi'
  },
  {
    name: 'Golden Obliterator',
    fireRate: 200,
    damage: 50,
    bulletSpeed: 20,
    spread: 0.02,
    bulletsPerShot: 1,
    color: '#facc15', // Yellow/Gold
    killsToAdvance: 1,
    description: 'The final weapon. Pure energy.',
    type: 'auto'
  }
];

export const PLAYER_RADIUS = 15;
export const PLAYER_SPEED = 4;
export const INITIAL_PLAYER_HEALTH = 100;

export const ENEMY_SPAWN_INTERVAL = 1500;
export const ENEMY_TYPES = {
  grunt: { speed: 2, health: 30, radius: 12, color: '#f87171' },
  charger: { speed: 3.5, health: 15, radius: 10, color: '#fb923c' },
  tank: { speed: 1.2, health: 80, radius: 20, color: '#b91c1c' }
};
