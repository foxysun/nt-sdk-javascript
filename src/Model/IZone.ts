import FishingLevel from '../Enum/FishingLevel';
import ICoordinate from './ICoordinate';
import IMeta from './IMeta';

export default interface IZone {
  id: string;
  title: string;
  regions: string[];
  kml: string[];
  zoneType: string;
  images: string[];
  content: string;
  meta: IMeta[];
  polygonPoints: ICoordinate[];
  surroundingPolygonPoints: ICoordinate[];
  createdAt: string;
  updatedAt: string;
  dateRange: string;
  fishingLevel: FishingLevel;
}

export interface IZoneOptional {
  id?: string;
  title?: string;
  regions?: string[];
  kml?: string[];
  zoneType?: string;
  images?: string[];
  content?: string;
  meta?: IMeta[];
  dateRange?: string;
  fishingLevel?: FishingLevel;
}

export interface IZoneWithDistance extends IZone {
  pointDistances: number[];
}
