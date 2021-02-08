$(() => {
  window.mapList = {};

  //second params for options (stretch if we decide that it a favorite or not)
  function createMap(
    map,
    { isCreated = false, isFavorites = false, isContributed = false } = false
  ) {

    let mapListItem = `<li id="${map.id}" class="list-group-item-action list-group-item-`
    switch (map.id % 5) {
      case (0):
        mapListItem += `success`;
        break;
      case (1):
        mapListItem += `info`;
        break;
      case (2):
        mapListItem += `dark`;
        break;
      case (3):
        mapListItem += `danger`;
        break;
      case (4):
        mapListItem += `warning`;
        break;
    }
    mapListItem += `">${map.name}</li>`;

    return mapListItem;
  }

  window.mapList.createMap = createMap;

});
