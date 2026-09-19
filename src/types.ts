export type CelestialType = 'star' | 'terrestrial' | 'gas_giant' | 'ice_giant' | 'dwarf' | 'exoplanet';

export interface InternalLayer {
  nameUz: string;
  nameEn: string;
  depth: string;
  descriptionUz: string;
  color: string;
}

export interface MoonInfo {
  name: string;
  diameterKm: number;
  descriptionUz: string;
}

export interface SpaceMission {
  name: string;
  year: string;
  agency: string;
  descriptionUz: string;
}

export interface CelestialBodyData {
  id: string;
  nameUz: string;
  nameEn: string;
  type: CelestialType;
  typeLabelUz: string;
  taglineUz: string;
  descriptionUz: string;
  diameterKm: number;
  massKg: string;
  distanceFromSunAu: number;
  distanceFromSunKm: number;
  orbitalPeriodDays: number;
  rotationPeriodHours: number;
  avgTempC: number;
  minTempC?: number;
  maxTempC?: number;
  moonsCount: number;
  moonsList: MoonInfo[];
  gravityMps2: number;
  atmosphereCompositionUz: string[];
  funFactsUz: string[];
  missions: SpaceMission[];
  internalLayers: InternalLayer[];
  
  // 3D Rendering configuration
  visual: {
    baseRadius: number; // relative 3D size
    distanceAuVisual: number; // scaled distance for viewing
    realDistanceScale: number;
    orbitSpeed: number; // relative angular velocity
    rotationSpeed: number;
    axialTiltDeg: number;
    color: string;
    hasRings?: boolean;
    ringInnerRadius?: number;
    ringOuterRadius?: number;
    ringColor?: string;
    hasAtmosphereGlow?: boolean;
    atmosphereColor?: string;
    isEmissive?: boolean;
    emissiveColor?: string;
    emissiveIntensity?: number;
    hasClouds?: boolean;
    cloudsSpeed?: number;
  };
}

export type ViewCategory = 'all' | 'terrestrial' | 'gas' | 'dwarf' | 'exoplanets';
export type ScaleMode = 'visual' | 'logarithmic';
