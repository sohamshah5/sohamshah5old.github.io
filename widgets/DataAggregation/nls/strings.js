define({
  root: ({
    _widgetLabel: "Data Aggregation",
    startPage: {
      defaultStartPageInstructions: "This widget will assist with processing and submitting data from a file to the selected layer in the map.<br/> <br/> Values within the file must be delimited by comma, tab, semi-colon, or vertical bar.",
      dragDrop: "Drag and drop",
      browse: "Browse to File",
      or: "OR",
      userPrivilege: "Your account does not have permission to create or modify data.",
      userCredits: "${widgetName} requires credits to use the ${locator} locator.",
      contactAdmin: "Contact the organization's administrator to request additional credits.",
      contactAdminEdit: "Contact the organization's administrator to request edit privileges.",
      canUseLocator: "The ${locator} locator will be used to locate features.",
      notEnoughCredits: "Not enough credits.",
      locationAndField: "Location and Field Information",
      locationAndFieldHint: "Choose the values from the file that should be used to update the target layer.",
      cannotUseLocator: "Unable to use ${widgetName}",
      noAnonymousEdit: "The ${layerName} layer does not support anonymous editing.",
      pleaseLogin: "Sign into the ${org} organization or contact the organization's administrator to request anonymous editing be enabled.",
      invalidEdit: "Invalid Privileges",
      unableToAccess: "Unable to access ${layerName}",
      appropriateCredentials: "Verify you have signed in with the appropriate credentials.",
      shared: "Contact the organization's administrator to request access to the ${layerName} layer.",
      targetLayerLabel: "Target Layer",
      homeButtonLabel: "Home"
    },
    mapping: {
      schemaMapping: "Field Information",
      schemaMappingHint: "Choose fields from the file that correlate to the fields in the layer.",
      locationMapping: "Location Information",
      locationMappingHint: "Choose the type of address or coordinate information to expect from the file."
    },
    locationMapping: {
      locationMappingPageHint: "Choose location type",
      useAddress: "Locate using an address",
      useAddressHint: "Data contains address information",
      useCoordinates: "Locate using coordinates",
      useCoordinatesHint: "Data contains X/Y coordinate values"
    },
    address: {
      addressPageHint: "Choose address type",
      singleField: "Single field",
      singleFieldHint: "Choose the field that contains the address information",
      multiField: "Multiple fields",
      multiFieldHint: "Choose the fields that contain the address information"
    },
    coordinates: {
      coordinatesPageHint: "Choose the fields that contain the coordinate data"
    },
    fieldMapping: {
      fieldMappingPageHint: "Choose the source field that maps to the target field",
      sourceField: "Matching Source Field",
      targetField: "Target Field"
    },
    buttons: {
      addToMap: "Add to Map",
      submit: "Submit",
      download: "Download"
    },
    review: {
      matched: "Found",
      reviewMatched: "Locations Found",
      reviewMatchedHint: "Review locations that were found.",
      unMatched: "not Found",
      reviewUnMatched: "Locations not Found",
      reviewUnMatchedHint: "Review locations that were not found. Items that are not corrected will not be submitted.",
      duplicate: "Duplicate",
      reviewDuplicate: "Duplicate Locations",
      reviewDuplicateHint: "Review locations that were already found in the layer. Items that are not addressed will not be submitted.",
      reviewLabelWithCount: "${totalMatchedFeatures} ${headerString} ${headerStringHint}",
      use: "Use:",
      fromLayer: "Target Information",
      target: "Target",
      source: "Source",
      fromFile: "Source Information",
      locationControlHint: "Review address information",
      duplicateAction: "Choose an action",
      item: "Record:",
      locateFeature: "Locate Feature",
      removeFeature: "Remove Feature",
      featureLocated: "Location Found",
      valuesDoNotMatch: "Does not match existing value",
      sync: "Sync address information with field information",
      noFeaturesSaved: "No features saved successfully",
      someFeaturesSaved: "${num} feature(s) saved successfully.",
      someFeaturesNotSaved: "${num} feature(s) were not saved successfully.",
      feature: "Review Feature Information",
      locationInfo: "Review Location Information",
      selectValue: "Select a Value",
      reviewData: "Review Data",
      reviewDataHint: "Review your data before submitting to the layer.",
      reviewFeatureHint: "Review or edit your feature and location information.",
      duplicateModify: "Duplicate, needs change",
      duplicateSave: "Save as a new feature"
    },
    warningsAndErrors: {
      invalidCSV: "Error fetching items from CSV, check if valid CSV file is selected.",
      noLayersWarning: "No valid target layer configured, check the configuration.",
      loadWarning: "This widget requires a Feature Service data source. Configure the widget to define a data source.",
      saveError: "Error saving features.",
      consumesCredits: "This tool consumes credits when used with the ArcGIS Online World Geocoding Service",
      noValue: "Select a field",
      mappingTitle: "",
      locationMappingComplete: "Location Mapping Complete",
      fieldMappingComplete: "Field Mapping Complete",
      settingsCleared: "Settings will be cleared.",
      proceed: "Do you want to proceed?",
      itemMoveMatch: "Item was located and moved to the locations found list",
      itemMoveUnMatched: "Unable to locate item. Moved to the locations not found list.",
      itemWillBeLocated: "Item will be removed from the duplicate locations list.",
      cannotLocate: "Unable to locate item. Verify the location information.",
      invalidMessage: "Invalid Value.",
      rangeMessage: "Value must be less than ${num} characters.",
      locatorError: "Locator Invalid or Inaccessible.",
      notConfigured: "locator not configured for current locating options",
      noMoreLocators: "no additional locators configured"
    },
    featureToolbar: {
      locate: "Locate",
      save: "Save record",
      cancel: "Cancel edits",
      cancelTitle: "Cancel Edits",
      cancelMessage: "Cancel edits to the current record?"
    }
  }),
  "ar": 1,
  "bs": 1,
  "ca": 1,
  "cs": 1,
  "da": 1,
  "de": 1,
  "el": 1,
  "es": 1,
  "et": 1,
  "fi": 1,
  "fr": 1,
  "he": 1,
  "hr": 1,
  "hu": 1,
  "it": 1,
  "id": 1,
  "ja": 1,
  "ko": 1,
  "lt": 1,
  "lv": 1,
  "nb": 1,
  "nl": 1,
  "pl": 1,
  "pt-br": 1,
  "pt-pt": 1,
  "ro": 1,
  "ru": 1,
  "sl": 1,
  "sr": 1,
  "sv": 1,
  "th": 1,
  "tr": 1,
  "uk": 1,
  "vi": 1,
  "zh-cn": 1,
  "zh-hk": 1,
  "zh-tw": 1
});