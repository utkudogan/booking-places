import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      "p1",
      "Kayseri",
      "anadolunun ortası",
      "http://www.agu.edu.tr/userfiles/up/life-in-kayseri.jpeg",
      38.38
    ),
    new Place(
      "p2",
      "Ankara",
      "anadolunun başkenti",
      "https://cdnp.flypgs.com/files/Sehirler-long-tail/Ankara/Ankara_Sehir_Rehberi.jpg",
      6.06
    ),
    new Place(
      "p3",
      "İstanbul",
      "boğazın çevresi",
      "https://www.hisglobal.com.tr/assets/images/1581429467.jpg",
      34.34
    ),
  ];

  getPlaces() {
    return [...this._places];
  }
  constructor() {}

  getPlace(id: string) {
    return { ...this._places.find((p) => p.id === id) };
  }
}
