export enum StatusPuy {
  CONFIRMATION = "CONFIRMATION",
  REQUEST = "REQUEST",
  RECEIVE = "RECEIVE",
}

export interface User {
  id: number;
  email: string;
  phone: string;
  password: string;
  favorites: Favorite[];
  plants: Plant[];
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
}

export interface Plant {
  id: number;
  name: string;
  description: string;
  category: string;
  seasons: string;
  imageUrl: string;
  userId?: number;
  user?: User;
  statusPuy: StatusPuy;
  status: boolean;
  favorites: Favorite[];
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
}

export interface Favorite {
  userId: number;
  plantId: number;
  user: User;
  plant: Plant;
}