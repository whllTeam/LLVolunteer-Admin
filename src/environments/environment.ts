// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  isOpenIdentity: true,
  apis: {
    spaClient: 'http://localhost:4201',
    identity: 'http://localhost:5005',
    apiGateway: 'http://localhost:5001',
    volunteerApi: 'http://localhost:4000/api/',
    fileUrl: 'http://localhost:4000',
    userManager:  'http://localhost:5018/api/'
  },
  imgPath: {
    page: 'Page_Img',
    org: 'Org_Img'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
