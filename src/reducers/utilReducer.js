export default function reducer(state={
    countStats: {},
    fetchingCountStats: false,
    fetchedCountStats: false,

    photoCountryCounts: {},
    fetchingPhotoCountryCounts: false,
    fetchedPhotoCountryCounts: false,

    photoMonthCounts: [],
    fetchingPhotoMonthCounts: false,
    fetchedPhotoMonthCounts: false,

    statusPhotoScan: {status:true},
    statusAutoAlbumProcessing: {status:true},

    generatingAutoAlbums: false,

    locationClusters: [],
    fetchingLocationClusters:false,
    fetchedLocationClusters:false,

    wordCloud: {},
    fetchingWordCloud: false,
    fetchedWordCloud: false,

    exampleSearchTerms: [],
    fetchingExampleSearchTerms: false,
    fetchedExampleSearchTerms: false,

    locationSunburst: {'name':"Loading..."},
    fetchingLocationSunburst: false,
    fetchedLocationSunburst: false,

    locationTimeline: [],
    fetchingLocationTimeline: false,
    fetchedLocationTimeline: false,

    error: null,
  }, action) {

  switch (action.type) {


    case "GENERATE_EVENT_ALBUMS": {
      return {...state, generatingAutoAlbums: true}
    }
    case "GENERATE_EVENT_ALBUMS_REJECTED": {
      return {...state, generatingAutoAlbums: false, error: action.payload}
    }
    case "GENERATE_EVENT_ALBUMS_FULFILLED": {
      return {
        ...state,
        generatingAutoAlbums:false,
      }
    }




    case "FETCH_LOCATION_TIMELINE": {
      return {...state, fetchingLocationTimeline: true}
    }
    case "FETCH_LOCATION_TIMELINE_REJECTED": {
      return {...state, fetchingLocationTimeline: false, error: action.payload}
    }
    case "FETCH_LOCATION_TIMELINE_FULFILLED": {
      return {
        ...state,
        fetchingLocationTimeline: false,
        fetchedLocationTimeline: true,
        locationTimeline: action.payload
      }
    }



    case "FETCH_LOCATION_SUNBURST": {
      return {...state, fetchingLocationSunburst: true}
    }
    case "FETCH_LOCATION_SUNBURST_REJECTED": {
      return {...state, fetchingLocationSunburst: false, error: action.payload}
    }
    case "FETCH_LOCATION_SUNBURST_FULFILLED": {
      return {
        ...state,
        fetchingLocationSunburst: false,
        fetchedLocationSunburst: true,
        locationSunburst: action.payload
      }
    }

    case "FETCH_EXAMPLE_SEARCH_TERMS": {
      return {...state, fetchingExampleSearchTerms: true}
    }
    case "FETCH_EXAMPLE_SEARCH_TERMS_REJECTED": {
      return {...state, fetchingExampleSearchTerms: false, error: action.payload}
    }
    case "FETCH_EXAMPLE_SEARCH_TERMS_FULFILLED": {
      return {
        ...state,
        fetchingExampleSearchTerms: false,
        fetchedExampleSearchTerms: true,
        exampleSearchTerms: action.payload
      }
    }

    case "FETCH_COUNT_STATS": {
      return {...state, fetchingCountStats: true}
    }
    case "FETCH_COUNT_STATS_REJECTED": {
      return {...state, fetchingCountStats: false, error: action.payload}
    }
    case "FETCH_COUNT_STATS_FULFILLED": {
      return {
        ...state,
        fetchingCountStats: false,
        fetchedCountStats: true,
        countStats: action.payload
      }
    }


    case "FETCH_LOCATION_CLUSTERS": {
      return {...state, fetchingLocationClusters: true}
    }
    case "FETCH_LOCATION_CLUSTERS_REJECTED": {
      return {...state, fetchingLocationClusters: false, error: action.payload}
    }
    case "FETCH_LOCATION_CLUSTERS_FULFILLED": {
      return {
        ...state,
        fetchingLocationClusters: false,
        fetchedLocationClusters: true,
        locationClusters: action.payload
      }
    }


    case "FETCH_PHOTO_COUNTRY_COUNTS": {
      return {...state, fetchingPhotoCountryCounts: true}
    }
    case "FETCH_PHOTO_COUNTRY_COUNTS_REJECTED": {
      return {...state, fetchingPhotoCountryCounts: false, error: action.payload}
    }
    case "FETCH_PHOTO_COUNTRY_COUNTS_FULFILLED": {
      return {
        ...state,
        fetchingPhotoCountryCounts: false,
        fetchedPhotoCountryCounts: true,
        photoCountryCounts: action.payload
      }
    }



    case "FETCH_PHOTO_MONTH_COUNTS": {
      return {...state, fetchingPhotoMonthCounts: true}
    }
    case "FETCH_PHOTO_MONTH_COUNTS_REJECTED": {
      return {...state, fetchingPhotoMonthCounts: false, error: action.payload}
    }
    case "FETCH_PHOTO_MONTH_COUNTS_FULFILLED": {
      return {
        ...state,
        fetchingPhotoMonthCounts: false,
        fetchedPhotoMonthCounts: true,
        photoMonthCounts: action.payload
      }
    }


    case "FETCH_WORDCLOUD": {
      return {...state, fetchingWordCloud: true}
    }
    case "FETCH_WORDCLOUD_REJECTED": {
      return {...state, fetchingWordCloud: false, error: action.payload}
    }
    case "FETCH_WORDCLOUD_FULFILLED": {
      return {
        ...state,
        fetchingWordCloud: false,
        fetchedWordCloud: true,
        wordCloud: action.payload
      }
    }






    case "FETCH_PHOTO_SCAN_STATUS": {
      return {...state, fetchingPhotoScanStatus: true}
    }
    case "FETCH_PHOTO_SCAN_STATUS_REJECTED": {
      return {...state, fetchingPhotoScanStatus: false, error: action.payload}
    }
    case "FETCH_PHOTO_SCAN_STATUS_FULFILLED": {
      return {
        ...state,
        fetchingPhotoScanStatus: false,
        fetchedPhotoScanStatus: true,
        statusPhotoScan: action.payload
      }
    }

    case "FETCH_AUTO_ALBUM_PROCESSING_STATUS": {
      return {...state, fetchingAutoAlbumProcessingStatus: true}
    }
    case "FETCH_AUTO_ALBUM_PROCESSING_STATUS_REJECTED": {
      return {...state, fetchingAutoAlbumProcessingStatus: false, error: action.payload}
    }
    case "FETCH_AUTO_ALBUM_PROCESSING_STATUS_FULFILLED": {
      return {
        ...state,
        fetchingAutoAlbumProcessingStatus: false,
        fetchedAutoAlbumProcessingStatus: true,
        statusAutoAlbumProcessing: action.payload
      }
    }

    default: {
      return {...state}
    }
  }
}



// FETCH_LOCATION_CLUSTERS
// FETCH_LOCATION_CLUSTERS_REJECTED
// FETCH_LOCATION_CLUSTERS_FULFILLED
