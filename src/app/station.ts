export class Station {
  /**
   * Station ID
   */
  id: number;

  /**
   * Station Latitude
   */
  latitude: number;

  /**
   * Station Longitude
   */
  longitude: number;

  /**
   * Default Map marker icon
   */
  icon?: string;

  /**
   * Station postal code
   */
  cp?: number;

  /**
   * Station type
   */
  pop?: string;

  /**
   * Station adresse (street)
   */
  adresse?: string;

  /**
   * Station city
   */
  ville?: string;

  /**
   * Stations opening hours
   */
  ouverture?: {
    debut: string
    fin: string
    saufjour: string
  };

  /**
   * Provided services
   */
  services?: {
    service: string [];

    /**
     * Oil prices
     */
    prix: {

      /**
       * Oil types (Gazole, SP98, SP95)
       */
      nom: string;

      /**
       * Oil code
       */
      id: number;

      /**
       * Update date
       */
      maj: string;

      /**
       * Oil price
       */
      valeur: number
    }[];
  };

  constructor(lat: number, long: number, adresse: string) {
    this.latitude   = lat;
    this.longitude  = long;
    this.adresse    = adresse;
    this.icon       = '/assets/station.svg';
  }
}
