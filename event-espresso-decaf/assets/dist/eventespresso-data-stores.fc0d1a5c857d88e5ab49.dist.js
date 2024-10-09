/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/data/eventespresso/base-controls.js":
/*!********************************************************!*\
  !*** ./assets/src/data/eventespresso/base-controls.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dispatch": function() { return /* binding */ dispatch; },
/* harmony export */   "fetch": function() { return /* binding */ fetch; },
/* harmony export */   "resolveDispatch": function() { return /* binding */ resolveDispatch; },
/* harmony export */   "resolveGetEntityByIdForIds": function() { return /* binding */ resolveGetEntityByIdForIds; },
/* harmony export */   "resolveGetRelatedEntities": function() { return /* binding */ resolveGetRelatedEntities; },
/* harmony export */   "resolveSelect": function() { return /* binding */ resolveSelect; },
/* harmony export */   "select": function() { return /* binding */ select; }
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/constants */ "./assets/src/data/eventespresso/core/constants.js");
/**
 * External imports
 */



/**
 * Internal imports
 */


/**
 * Returns the action object for a fetch control.
 *
 * @param {Object} request
 * @return {{type: string, request: Object}} An action object
 */

function fetch(request) {
  return {
    type: 'FETCH_FROM_API',
    request
  };
}
/**
 * Returns the action object for a select control.
 *
 * @param {string} reducerKey
 * @param {string} selectorName
 * @param {*[]} args
 * @return {{type: string, reducerKey: string, selectorName: string, args: *[]}}
 * Returns an action object.
 */

function select(reducerKey, selectorName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return {
    type: 'SELECT',
    reducerKey,
    selectorName,
    args
  };
}
/**
 * Returns the action object for resolving a selector that has a resolver.
 *
 * @param {string} reducerKey
 * @param {string} selectorName
 * @param {Array} args
 * @return {Object} An action object.
 */

function resolveSelect(reducerKey, selectorName) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return {
    type: 'RESOLVE_SELECT',
    reducerKey,
    selectorName,
    args
  };
}
/**
 * Returns the action object for a dispatch control.
 *
 * @param {string} reducerKey
 * @param {string} dispatchName
 * @param {*[]} args
 * @return {{type: string, reducerKey: string, dispatchName: string, args: *[]}}
 * An action object
 */

function dispatch(reducerKey, dispatchName) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  return {
    type: 'DISPATCH',
    reducerKey,
    dispatchName,
    args
  };
}
/**
 * Returns the action object for a resolve dispatch control
 *
 * @param {string} reducerKey
 * @param {string} dispatchName
 * @param {Array} args
 * @return {Object} The action object.
 */

function resolveDispatch(reducerKey, dispatchName) {
  for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
    args[_key4 - 2] = arguments[_key4];
  }

  return {
    type: 'RESOLVE_DISPATCH',
    reducerKey,
    dispatchName,
    args
  };
}
/**
 * Returns the action object for resolving the getEntityById selector
 * for all the given ids on the given model
 *
 * @param {string} modelName
 * @param {Array} entityIds
 * @return {Object} An action object
 */

function resolveGetEntityByIdForIds(modelName, entityIds) {
  return {
    type: 'RESOLVE_GET_ENTITY_BY_ID_FOR_IDS',
    modelName,
    entityIds
  };
}
/**
 * Returns the action object for resolving the getRelatedEntities selector
 * on the eventespresso/core store for the given arguments.
 *
 * @param {BaseEntity} entity
 * @param {Map} relationEntities
 * @param {Array<number>} relationIds
 * @return {Object} An action object
 */

function resolveGetRelatedEntities(entity, relationEntities, relationIds) {
  return {
    type: 'RESOLVE_GET_RELATED_ENTITIES',
    entity,
    relationEntities,
    relationIds
  };
}
const controls = {
  FETCH_FROM_API(_ref) {
    let {
      request
    } = _ref;
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()(request);
  },

  SELECT(_ref2) {
    let {
      reducerKey,
      selectorName,
      args
    } = _ref2;
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)(reducerKey)[selectorName](...args);
  },

  DISPATCH(_ref3) {
    let {
      reducerKey,
      dispatchName,
      args
    } = _ref3;
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(reducerKey)[dispatchName](...args);
  },

  async RESOLVE_DISPATCH(_ref4) {
    let {
      reducerKey,
      dispatchName,
      args
    } = _ref4;
    return await (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(reducerKey)[dispatchName](...args);
  },

  RESOLVE_SELECT(_ref5) {
    let {
      reducerKey,
      selectorName,
      args
    } = _ref5;
    return new Promise(resolve => {
      const hasFinished = () => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)('core/data').hasFinishedResolution(reducerKey, selectorName, args);

      const getResult = () => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)(reducerKey)[selectorName].apply(null, args); // trigger the selector (to trigger the resolver)


      const result = getResult();

      if (hasFinished()) {
        return resolve(result);
      }

      const unsubscribe = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.subscribe)(() => {
        if (hasFinished()) {
          unsubscribe();
          resolve(getResult());
        }
      });
    });
  },

  RESOLVE_GET_ENTITY_BY_ID_FOR_IDS(_ref6) {
    let {
      modelName,
      entityIds
    } = _ref6;

    while (entityIds.length > 0) {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)('core/data', 'finishResolution', _core_constants__WEBPACK_IMPORTED_MODULE_3__.REDUCER_KEY, 'getEntityById', [modelName, entityIds.pop()]);
    }
  },

  RESOLVE_GET_RELATED_ENTITIES(_ref7) {
    let {
      entity,
      relationEntities,
      relationIds
    } = _ref7;

    while (relationIds.length > 0) {
      const relationEntity = relationEntities.get(relationIds.pop());

      if (relationEntity) {
        (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)('core/data', 'finishResolution', _core_constants__WEBPACK_IMPORTED_MODULE_3__.REDUCER_KEY, 'getRelatedEntities', [relationEntity, (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.pluralModelName)(entity.modelName)]);
      }
    }
  }

};
/* harmony default export */ __webpack_exports__["default"] = (controls);

/***/ }),

/***/ "./assets/src/data/eventespresso/base-model.js":
/*!*****************************************************!*\
  !*** ./assets/src/data/eventespresso/base-model.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMethodName": function() { return /* binding */ getMethodName; },
/* harmony export */   "keepExistingEntitiesInObject": function() { return /* binding */ keepExistingEntitiesInObject; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */



/**
 * A helper for getting a method name.
 *
 * @param {string} modelName
 * @param {string} suffix
 * @param {string} prefix
 * @param {boolean} usePlural
 * @return {string} Returns a name for a method.
 */

const getMethodName = function (modelName) {
  let suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  let prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'get';
  let usePlural = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  modelName = usePlural ? pluralize__WEBPACK_IMPORTED_MODULE_1___default()(modelName) : modelName;
  return prefix + (0,lodash__WEBPACK_IMPORTED_MODULE_0__.upperFirst)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.camelCase)(modelName + (0,lodash__WEBPACK_IMPORTED_MODULE_0__.upperFirst)(suffix)));
};
/**
 * Given a collection of existing entities and a collection of incoming
 * entities, this returns a merged object with preference given to common
 * entities from the existingEntities collection.
 *
 * Incoming collections can be Maps or plain objects.
 *
 * Note if incomingEntities is a Map, the ORDER of the map will be preserved
 * even if the values of entities in the map are replaced by values from
 * existing entities.
 *
 * @param {Map|Object} existingEntities
 * @param {Map|Object} incomingEntities
 * @return {Map} A new collection of entities. Note if existing entities came in
 * as a plain object, this returns a Map.
 */

const keepExistingEntitiesInObject = (existingEntities, incomingEntities) => {
  const getExistingOrDefaultEntity = (defaultEntity, entityId) => {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isMap)(existingEntities) && existingEntities.has(entityId)) {
      return existingEntities.get(entityId);
    }

    return existingEntities[entityId] || defaultEntity;
  };

  const reduceCallback = (mapped, entity, entityId) => {
    entityId = normalizeEntityId(entityId);
    mapped.set(entityId, getExistingOrDefaultEntity(entity, entityId));
    return mapped;
  };

  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isMap)(incomingEntities) ? (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__.mapReducer)(incomingEntities, reduceCallback, new Map()) : (0,lodash__WEBPACK_IMPORTED_MODULE_0__.reduce)(incomingEntities, reduceCallback, new Map());
};
/**
 * This normalizes numeric values to integer numbers and leaves non numeric
 * values alone.
 *
 * @param {*} entityId
 * @return {*} Normalized value
 */

const normalizeEntityId = entityId => {
  const originalId = entityId;
  entityId = parseInt(entityId, 10);
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNaN)(entityId) ? originalId : entityId;
};

/***/ }),

/***/ "./assets/src/data/eventespresso/base-selectors.js":
/*!*********************************************************!*\
  !*** ./assets/src/data/eventespresso/base-selectors.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasFinishedResolving": function() { return /* binding */ hasFinishedResolving; },
/* harmony export */   "isResolving": function() { return /* binding */ isResolving; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Invokes the selector for whether a given selectorName in a given registered
 * reducer store is in the midst of resolving.
 *
 * @param {string} reducerKey
 * @param {string} selectorName
 * @param {*[]} args
 * @return {boolean}  Whether resolution is in progress.
 */

const isResolving = function (reducerKey, selectorName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/data').isResolving(reducerKey, selectorName, args);
};
/**
 * Invokes the selector for whether a given selectorName in a given registered
 * reducer store has finished resolving.
 *
 * @param {string} reducerKey
 * @param {string} selectorName
 * @param {*[]} args
 * @return {boolean} Whether resolution has completed.
 */

const hasFinishedResolving = function (reducerKey, selectorName) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/data').hasFinishedResolution(reducerKey, selectorName, args);
};

/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/action-creators.js":
/*!***********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/action-creators.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "receiveAndReplaceEntityRecords": function() { return /* reexport safe */ _receive_entities__WEBPACK_IMPORTED_MODULE_0__.receiveAndReplaceEntityRecords; },
/* harmony export */   "receiveDeleteEntityId": function() { return /* reexport safe */ _receive_entities__WEBPACK_IMPORTED_MODULE_0__.receiveDeleteEntityId; },
/* harmony export */   "receiveDirtyRelationAddition": function() { return /* reexport safe */ _receive_relations__WEBPACK_IMPORTED_MODULE_1__.receiveDirtyRelationAddition; },
/* harmony export */   "receiveDirtyRelationDeletion": function() { return /* reexport safe */ _receive_relations__WEBPACK_IMPORTED_MODULE_1__.receiveDirtyRelationDeletion; },
/* harmony export */   "receiveEntity": function() { return /* reexport safe */ _receive_entities__WEBPACK_IMPORTED_MODULE_0__.receiveEntity; },
/* harmony export */   "receiveEntityRecords": function() { return /* reexport safe */ _receive_entities__WEBPACK_IMPORTED_MODULE_0__.receiveEntityRecords; },
/* harmony export */   "receiveRelatedEntities": function() { return /* reexport safe */ _receive_relations__WEBPACK_IMPORTED_MODULE_1__.receiveRelatedEntities; },
/* harmony export */   "receiveTrashEntityId": function() { return /* reexport safe */ _receive_entities__WEBPACK_IMPORTED_MODULE_0__.receiveTrashEntityId; },
/* harmony export */   "receiveUpdatedEntityIdForRelations": function() { return /* reexport safe */ _receive_relations__WEBPACK_IMPORTED_MODULE_1__.receiveUpdatedEntityIdForRelations; },
/* harmony export */   "removeAllRelatedEntitiesForModelEntity": function() { return /* reexport safe */ _remove_relations__WEBPACK_IMPORTED_MODULE_3__.removeAllRelatedEntitiesForModelEntity; },
/* harmony export */   "removeDeleteEntityId": function() { return /* reexport safe */ _remove_entities__WEBPACK_IMPORTED_MODULE_2__.removeDeleteEntityId; },
/* harmony export */   "removeDirtyRelationAddition": function() { return /* reexport safe */ _remove_relations__WEBPACK_IMPORTED_MODULE_3__.removeDirtyRelationAddition; },
/* harmony export */   "removeDirtyRelationDeletion": function() { return /* reexport safe */ _remove_relations__WEBPACK_IMPORTED_MODULE_3__.removeDirtyRelationDeletion; },
/* harmony export */   "removeDirtyRelationForType": function() { return /* reexport safe */ _remove_relations__WEBPACK_IMPORTED_MODULE_3__.removeDirtyRelationForType; },
/* harmony export */   "removeEntityById": function() { return /* reexport safe */ _remove_entities__WEBPACK_IMPORTED_MODULE_2__.removeEntityById; },
/* harmony export */   "removeRelatedEntities": function() { return /* reexport safe */ _remove_relations__WEBPACK_IMPORTED_MODULE_3__.removeRelatedEntities; },
/* harmony export */   "removeTrashEntityId": function() { return /* reexport safe */ _remove_entities__WEBPACK_IMPORTED_MODULE_2__.removeTrashEntityId; }
/* harmony export */ });
/* harmony import */ var _receive_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receive-entities */ "./assets/src/data/eventespresso/core/actions/receive-entities.js");
/* harmony import */ var _receive_relations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receive-relations */ "./assets/src/data/eventespresso/core/actions/receive-relations.js");
/* harmony import */ var _remove_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove-entities */ "./assets/src/data/eventespresso/core/actions/remove-entities.js");
/* harmony import */ var _remove_relations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove-relations */ "./assets/src/data/eventespresso/core/actions/remove-relations.js");





/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/action-generators.js":
/*!*************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/action-generators.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEntity": function() { return /* reexport safe */ _create_entities_generators__WEBPACK_IMPORTED_MODULE_0__.createEntity; },
/* harmony export */   "createRelation": function() { return /* reexport safe */ _create_relations_generators_js__WEBPACK_IMPORTED_MODULE_1__.createRelation; },
/* harmony export */   "createRelations": function() { return /* reexport safe */ _create_relations_generators_js__WEBPACK_IMPORTED_MODULE_1__.createRelations; },
/* harmony export */   "deleteEntityById": function() { return /* reexport safe */ _delete_entity_generators__WEBPACK_IMPORTED_MODULE_2__.deleteEntityById; },
/* harmony export */   "getRelationState": function() { return /* reexport safe */ _persist_relations_generators__WEBPACK_IMPORTED_MODULE_5__.getRelationState; },
/* harmony export */   "persistAddRelationsForModel": function() { return /* reexport safe */ _persist_relations_generators__WEBPACK_IMPORTED_MODULE_5__.persistAddRelationsForModel; },
/* harmony export */   "persistAllDeletes": function() { return /* reexport safe */ _persist_entity_generators__WEBPACK_IMPORTED_MODULE_4__.persistAllDeletes; },
/* harmony export */   "persistDeleteRelationsForModel": function() { return /* reexport safe */ _persist_relations_generators__WEBPACK_IMPORTED_MODULE_5__.persistDeleteRelationsForModel; },
/* harmony export */   "persistDeletesForModel": function() { return /* reexport safe */ _persist_entity_generators__WEBPACK_IMPORTED_MODULE_4__.persistDeletesForModel; },
/* harmony export */   "persistEntityRecord": function() { return /* reexport safe */ _persist_entity_generators__WEBPACK_IMPORTED_MODULE_4__.persistEntityRecord; },
/* harmony export */   "persistForEntityId": function() { return /* reexport safe */ _persist_entity_generators__WEBPACK_IMPORTED_MODULE_4__.persistForEntityId; },
/* harmony export */   "persistForEntityIds": function() { return /* reexport safe */ _persist_entity_generators__WEBPACK_IMPORTED_MODULE_4__.persistForEntityIds; },
/* harmony export */   "persistNewEntityAndRemoveDirtyRelations": function() { return /* reexport safe */ _persist_relations_generators__WEBPACK_IMPORTED_MODULE_5__.persistNewEntityAndRemoveDirtyRelations; },
/* harmony export */   "persistRelationsForEntityId": function() { return /* reexport safe */ _persist_relations_generators__WEBPACK_IMPORTED_MODULE_5__.persistRelationsForEntityId; },
/* harmony export */   "persistRelationsForEntityIdAndRelation": function() { return /* reexport safe */ _persist_relations_generators__WEBPACK_IMPORTED_MODULE_5__.persistRelationsForEntityIdAndRelation; },
/* harmony export */   "persistRelationsForEntityIdAndRelationId": function() { return /* reexport safe */ _persist_relations_generators__WEBPACK_IMPORTED_MODULE_5__.persistRelationsForEntityIdAndRelationId; },
/* harmony export */   "persistRelationsForModel": function() { return /* reexport safe */ _persist_relations_generators__WEBPACK_IMPORTED_MODULE_5__.persistRelationsForModel; },
/* harmony export */   "persistTrashesForModel": function() { return /* reexport safe */ _persist_entity_generators__WEBPACK_IMPORTED_MODULE_4__.persistTrashesForModel; },
/* harmony export */   "receiveEntitiesAndResolve": function() { return /* reexport safe */ _create_entities_generators__WEBPACK_IMPORTED_MODULE_0__.receiveEntitiesAndResolve; },
/* harmony export */   "receiveEntityAndResolve": function() { return /* reexport safe */ _create_entities_generators__WEBPACK_IMPORTED_MODULE_0__.receiveEntityAndResolve; },
/* harmony export */   "removeDirtyRelationForAddition": function() { return /* reexport safe */ _delete_relations_generators__WEBPACK_IMPORTED_MODULE_3__.removeDirtyRelationForAddition; },
/* harmony export */   "removeRelationForEntity": function() { return /* reexport safe */ _delete_relations_generators__WEBPACK_IMPORTED_MODULE_3__.removeRelationForEntity; },
/* harmony export */   "resetAllModelSpecific": function() { return /* reexport safe */ _reset__WEBPACK_IMPORTED_MODULE_6__.resetAllModelSpecific; },
/* harmony export */   "resetAllState": function() { return /* reexport safe */ _reset__WEBPACK_IMPORTED_MODULE_6__.resetAllState; },
/* harmony export */   "resetModelSpecificForSelector": function() { return /* reexport safe */ _reset__WEBPACK_IMPORTED_MODULE_6__.resetModelSpecificForSelector; },
/* harmony export */   "resetModelSpecificForSelectorAndArgs": function() { return /* reexport safe */ _reset__WEBPACK_IMPORTED_MODULE_6__.resetModelSpecificForSelectorAndArgs; },
/* harmony export */   "resetStateForModel": function() { return /* reexport safe */ _reset__WEBPACK_IMPORTED_MODULE_6__.resetStateForModel; },
/* harmony export */   "resolveRelationRecordForRelation": function() { return /* reexport safe */ _create_relations_generators_js__WEBPACK_IMPORTED_MODULE_1__.resolveRelationRecordForRelation; },
/* harmony export */   "trashEntityById": function() { return /* reexport safe */ _delete_entity_generators__WEBPACK_IMPORTED_MODULE_2__.trashEntityById; }
/* harmony export */ });
/* harmony import */ var _create_entities_generators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-entities-generators */ "./assets/src/data/eventespresso/core/actions/create-entities-generators.js");
/* harmony import */ var _create_relations_generators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-relations-generators.js */ "./assets/src/data/eventespresso/core/actions/create-relations-generators.js");
/* harmony import */ var _delete_entity_generators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-entity-generators */ "./assets/src/data/eventespresso/core/actions/delete-entity-generators.js");
/* harmony import */ var _delete_relations_generators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-relations-generators */ "./assets/src/data/eventespresso/core/actions/delete-relations-generators.js");
/* harmony import */ var _persist_entity_generators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./persist-entity-generators */ "./assets/src/data/eventespresso/core/actions/persist-entity-generators.js");
/* harmony import */ var _persist_relations_generators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./persist-relations-generators */ "./assets/src/data/eventespresso/core/actions/persist-relations-generators.js");
/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset */ "./assets/src/data/eventespresso/core/actions/reset.js");








/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/action-types.js":
/*!********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/action-types.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPES": function() { return /* binding */ ACTION_TYPES; }
/* harmony export */ });
const entities = {
  RECEIVE_ENTITY_RECORDS: 'RECEIVE_ENTITY_RECORDS',
  RECEIVE_AND_REPLACE_ENTITY_RECORDS: 'RECEIVE_AND_REPLACE_ENTITY_RECORDS',
  RECEIVE_ENTITY: 'RECEIVE_ENTITY',
  REMOVE_ENTITY_BY_ID: 'REMOVE_ENTITY_BY_ID',
  REMOVE_DELETE_ENTITY_ID: 'REMOVE_DELETE_ENTITY_ID',
  REMOVE_TRASH_ENTITY_ID: 'REMOVE_TRASH_ENTITY_ID',
  RECEIVE_TRASH_ENTITY_ID: 'RECEIVE_TRASH_ENTITY_ID',
  RECEIVE_DELETE_ENTITY_ID: 'RECEIVE_DELETE_ENTITY_ID'
};
const relations = {
  REMOVE_DIRTY_RELATION_ADDITION: 'REMOVE_DIRTY_RELATION_ADDITION',
  REMOVE_DIRTY_RELATION_DELETION: 'REMOVE_DIRTY_RELATION_DELETION',
  RECEIVE_RELATED_ENTITY_IDS: 'RECEIVE_RELATED_ENTITY_IDS',
  REMOVE_RELATED_ENTITY_IDS: 'REMOVE_RELATED_ENTITY_IDS',
  REMOVE_RELATED_ENTITIES_FOR_ENTITY: 'REMOVE_RELATED_ENTITIES_FOR_ENTITY',
  RECEIVE_DIRTY_RELATION_ADDITION: 'RECEIVE_DIRTY_RELATION_ADDITION',
  RECEIVE_DIRTY_RELATION_DELETION: 'RECEIVE_DIRTY_RELATION_DELETION',
  RECEIVE_UPDATED_ENTITY_ID_FOR_RELATIONS: 'RECEIVE_UPDATED_ENTITY_ID_FOR_RELATIONS'
};
const resets = {
  RESET_ALL_STATE: 'RESET_ALL_STATE',
  RESET_STATE_FOR_MODEL: 'RESET_STATE_FOR_MODEL',
  RESET_ALL_MODEL_SPECIFIC: 'RESET_ALL_MODEL_SPECIFIC_STATE',
  RESET_MODEL_SPECIFIC_FOR_SELECTOR: 'RESET_MODEL_SPECIFIC_FOR_SELECTOR',
  RESET_MODEL_SPECIFIC_FOR_SELECTOR_AND_ARGS: 'RESET_MODEL_SPECIFIC_FOR_SELECTOR_AND_ARGS'
};
const modelSpecific = {
  RECEIVE_SELECTOR_VALUE: 'RECEIVE_SELECTOR_VALUE'
};
const ACTION_TYPES = {
  entities,
  relations,
  modelSpecific,
  resets
};

/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/create-entities-generators.js":
/*!**********************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/create-entities-generators.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEntity": function() { return /* binding */ createEntity; },
/* harmony export */   "receiveEntitiesAndResolve": function() { return /* binding */ receiveEntitiesAndResolve; },
/* harmony export */   "receiveEntityAndResolve": function() { return /* binding */ receiveEntityAndResolve; }
/* harmony export */ });
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _schema_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../schema/constants */ "./assets/src/data/eventespresso/schema/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./assets/src/data/eventespresso/core/constants.js");
/**
 * External imports
 */



/**
 * Internal imports
 */




/**
 * Returns an action generator for creating a model entity instance and
 * including it in an action object for adding to state.
 *
 * @param {string} modelName  The name of the model the incoming object is for.
 * @param {Object} entity  A plain object containing the entity properties and
 * values
 * @return {null|Object}  If the entity is successfully created the model entity
 * instance is returned, otherwise null.
 */

function* createEntity(modelName, entity) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  const factory = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_3__.resolveSelect)(_schema_constants__WEBPACK_IMPORTED_MODULE_4__.REDUCER_KEY, 'getFactoryForModel', modelName);

  if (!(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__.isModelEntityFactoryOfModel)(factory, modelName)) {
    return null;
  }

  const entityInstance = factory.createNew(entity);
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_3__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_5__.REDUCER_KEY, 'receiveEntityAndResolve', entityInstance);
  return entityInstance;
}
/**
 * Generator for yielding actions for both receiving a
 * BaseEntity instance and resolving the related selector for retrieving that
 * entity instance.
 *
 * @param {BaseEntity} entity
 */

function* receiveEntityAndResolve(entity) {
  assertIsModelEntity(entity);
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_3__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_5__.REDUCER_KEY, 'receiveEntity', entity);
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/data', 'finishResolution', _constants__WEBPACK_IMPORTED_MODULE_5__.REDUCER_KEY, 'getEntityById', [entity.modelName.toLowerCase(), entity.id]);
}
/**
 * Same as receivesEntityAndResolve except this handles multiple entities.
 *
 * @param {string} modelName
 * @param {Array<BaseEntity>}entities
 */

function* receiveEntitiesAndResolve(modelName, entities) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  const entityIds = entities.map(entity => {
    assertIsModelEntity(entity);
    return entity.id;
  });

  while (entityIds.length > 0) {
    yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/data', 'finishResolution', _constants__WEBPACK_IMPORTED_MODULE_5__.REDUCER_KEY, 'getEntityById', [modelName, entityIds.pop()]);
  }

  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_3__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_5__.REDUCER_KEY, 'receiveEntityRecords', modelName, entities);
}
/**
 * Asserts whether the given value is a model entity and throws
 * InvalidModelEntity if it is not.
 *
 * @param {BaseEntity} entity
 * @throws InvalidModelEntity
 */

function assertIsModelEntity(entity) {
  if (!(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__.isModelEntity)(entity)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_1__.InvalidModelEntity('receiveEntityIdAndResolve expects an instance of BaseEntity', entity);
  }
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/create-relations-generators.js":
/*!***********************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/create-relations-generators.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRelation": function() { return /* binding */ createRelation; },
/* harmony export */   "createRelations": function() { return /* binding */ createRelations; },
/* harmony export */   "resolveRelationRecordForRelation": function() { return /* binding */ resolveRelationRecordForRelation; }
/* harmony export */ });
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./assets/src/data/eventespresso/core/constants.js");
/**
 * External imports
 */





/**
 * Internal imports
 */



/**
 * Action generator yielding actions that add the relation to the state for a
 * single relation entity.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {string} relationName
 * @param {BaseEntity} relationEntity
 */

function* createRelation(modelName, entityId, relationName, relationEntity) {
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(relationName);
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(modelName);

  if (!(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__.isModelEntityOfModel)(relationEntity, relationName)) {
    warning__WEBPACK_IMPORTED_MODULE_2___default()(false, 'The provided relation entity (%s) is not a base entity instance' + ' for the %s relation model', relationEntity, relationName);
    return;
  }

  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'receiveEntityAndResolve', relationEntity);
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'receiveRelatedEntities', modelName, entityId, relationName, [relationEntity.id]);
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'receiveDirtyRelationAddition', relationName, relationEntity.id, modelName, entityId);
}
/**
 * Action generator yielding actions that add the relation to the state for
 * multiple relation entities.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {string} relationName
 * @param {Array<BaseEntity>} relationEntities
 */


function* createRelations(modelName, entityId, relationName, relationEntities) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(relationName);

  try {
    assertArrayHasEntitiesForModel(relationEntities, relationName);
  } catch (exception) {
    warning__WEBPACK_IMPORTED_MODULE_2___default()(false, 'Incoming relation Entities do not contain BaseEntity instances ' + 'for the given relation model (%s)', relationName);
    return;
  }

  const relationIds = (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__.getIdsFromBaseEntityArray)(relationEntities);
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'receiveEntitiesAndResolve', relationName, relationEntities);
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'receiveRelatedEntities', modelName, entityId, relationName, relationIds);
  const modelEntity = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.resolveSelect)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getEntityById', modelName, entityId);
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/data', 'finishResolution', _constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getRelatedEntities', [modelEntity, relationName]);
  const relationsToResolve = [...relationEntities];

  while (relationsToResolve.length > 0) {
    const relationEntity = relationsToResolve.pop();
    yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'receiveDirtyRelationAddition', relationName, relationEntity.id, modelName, entityId);
    yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/data', 'finishResolution', _constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getRelatedEntities', [relationEntity, modelName]);
  }
}
/**
 * This action is used to ensure a relation Entity related to the given
 * model entity id is both added to the state and various selectors for these
 * are resolved so no additional resolution happens for these.
 *
 * The purpose for this action is to allow for doing more efficient batch
 * queries of entities from an api request and then triggering the resolution of
 * any more granular selectors that have resolvers.  This basically allows one
 * to hydrate the `eventespresso/core` state with more efficient queries.
 *
 * @param {BaseEntity} relationEntity
 * @param {string} modelName
 * @param {number|string} modelId
 */


function* resolveRelationRecordForRelation(relationEntity, modelName, modelId) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(modelName);
  const relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(relationEntity.modelName);
  const hasEntity = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.select)('core/data', 'hasFinishedResolution', _constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getEntityById', [relationName, relationEntity.id]);
  relationEntity = hasEntity ? yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.select)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getEntityById', relationName, relationEntity.id) : relationEntity;

  if (!hasEntity) {
    yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'receiveEntityAndResolve', relationEntity);
  }

  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'receiveRelatedEntities', modelName, modelId, relationName, [relationEntity.id]);
  const modelEntity = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.resolveSelect)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getEntityById', modelName, modelId);
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/data', 'finishResolution', _constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getRelatedEntities', [modelEntity, relationName]);
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/data', 'finishResolution', _constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getRelatedEntities', [relationEntity, modelName]);
}
/**
 * Asserts that the provided map has BaseEntity instances for the expected
 * model name.
 *
 * @param {Array<BaseEntity>} entities
 * @param {string} relationModelName Expected to be the singular form for the
 * modelName.
 * @throws InvalidModelEntity
 */


const assertArrayHasEntitiesForModel = (entities, relationModelName) => {
  relationModelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(relationModelName);

  for (const entity of entities) {
    if (!(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__.isModelEntityOfModel)(entity, relationModelName)) {
      throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_3__.InvalidModelEntity('', entity);
    }
  }
};



/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/delete-entity-generators.js":
/*!********************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/delete-entity-generators.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteEntityById": function() { return /* binding */ deleteEntityById; },
/* harmony export */   "trashEntityById": function() { return /* binding */ trashEntityById; }
/* harmony export */ });
/* harmony import */ var _remove_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-entities */ "./assets/src/data/eventespresso/core/actions/remove-entities.js");
/* harmony import */ var _receive_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receive-entities */ "./assets/src/data/eventespresso/core/actions/receive-entities.js");
/* harmony import */ var _remove_relations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove-relations */ "./assets/src/data/eventespresso/core/actions/remove-relations.js");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Internal Imports
 */



/**
 * External imports
 */


/**
 * Action generator yielding actions for queuing an entity delete record
 * in the state.
 *
 * @param {string} modelName
 * @param {number} entityId
 */

function* deleteEntityById(modelName, entityId) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__.singularModelName)(modelName);
  yield (0,_remove_entities__WEBPACK_IMPORTED_MODULE_0__.removeEntityById)(modelName, entityId); // remove any relation records for this entity

  yield (0,_remove_relations__WEBPACK_IMPORTED_MODULE_2__.removeAllRelatedEntitiesForModelEntity)(modelName, entityId);
  yield (0,_receive_entities__WEBPACK_IMPORTED_MODULE_1__.receiveDeleteEntityId)(modelName, entityId);
}
/**
 * Action generator yielding actions for queueing an entity trash record in the
 * state.
 *
 * @param {string} modelName
 * @param {number} entityId
 */

function* trashEntityById(modelName, entityId) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__.singularModelName)(modelName);
  yield (0,_remove_entities__WEBPACK_IMPORTED_MODULE_0__.removeEntityById)(modelName, entityId);
  yield (0,_remove_relations__WEBPACK_IMPORTED_MODULE_2__.removeAllRelatedEntitiesForModelEntity)(modelName, entityId);
  yield (0,_receive_entities__WEBPACK_IMPORTED_MODULE_1__.receiveTrashEntityId)(modelName, entityId);
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/delete-relations-generators.js":
/*!***********************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/delete-relations-generators.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeDirtyRelationForAddition": function() { return /* binding */ removeDirtyRelationForAddition; },
/* harmony export */   "removeRelationForEntity": function() { return /* binding */ removeRelationForEntity; }
/* harmony export */ });
/* harmony import */ var _receive_relations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receive-relations */ "./assets/src/data/eventespresso/core/actions/receive-relations.js");
/* harmony import */ var _remove_relations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove-relations */ "./assets/src/data/eventespresso/core/actions/remove-relations.js");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Internal Imports
 */


/**
 * External imports
 */


/**
 * Action generator yielding actions for handling removing the queued relations
 * for addition in the state
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {string} relationName
 * @param {number} relationEntityId
 */

function* removeDirtyRelationForAddition(modelName, entityId, relationName, relationEntityId) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  yield (0,_remove_relations__WEBPACK_IMPORTED_MODULE_1__.removeDirtyRelationAddition)(relationName, relationEntityId, modelName, entityId);
}
/**
 * Action generator yielding actions for actions for queuing the removal of a
 * relation.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {string} relationName
 * @param {number} relationEntityId
 */


function* removeRelationForEntity(modelName, entityId, relationName, relationEntityId) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(relationName);
  yield (0,_remove_relations__WEBPACK_IMPORTED_MODULE_1__.removeRelatedEntities)(modelName, entityId, relationName, [relationEntityId]);
  yield (0,_remove_relations__WEBPACK_IMPORTED_MODULE_1__.removeDirtyRelationAddition)(modelName, entityId, relationName, relationEntityId);
  yield (0,_receive_relations__WEBPACK_IMPORTED_MODULE_0__.receiveDirtyRelationDeletion)(relationName, relationEntityId, modelName, entityId);
}



/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/index.js":
/*!*************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEntity": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.createEntity; },
/* harmony export */   "createRelation": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.createRelation; },
/* harmony export */   "createRelations": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.createRelations; },
/* harmony export */   "deleteEntityById": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.deleteEntityById; },
/* harmony export */   "getRelationState": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.getRelationState; },
/* harmony export */   "persistAddRelationsForModel": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.persistAddRelationsForModel; },
/* harmony export */   "persistAllDeletes": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.persistAllDeletes; },
/* harmony export */   "persistDeleteRelationsForModel": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.persistDeleteRelationsForModel; },
/* harmony export */   "persistDeletesForModel": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.persistDeletesForModel; },
/* harmony export */   "persistEntityRecord": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.persistEntityRecord; },
/* harmony export */   "persistForEntityId": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.persistForEntityId; },
/* harmony export */   "persistForEntityIds": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.persistForEntityIds; },
/* harmony export */   "persistNewEntityAndRemoveDirtyRelations": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.persistNewEntityAndRemoveDirtyRelations; },
/* harmony export */   "persistRelationsForEntityId": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.persistRelationsForEntityId; },
/* harmony export */   "persistRelationsForEntityIdAndRelation": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.persistRelationsForEntityIdAndRelation; },
/* harmony export */   "persistRelationsForEntityIdAndRelationId": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.persistRelationsForEntityIdAndRelationId; },
/* harmony export */   "persistRelationsForModel": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.persistRelationsForModel; },
/* harmony export */   "persistTrashesForModel": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.persistTrashesForModel; },
/* harmony export */   "receiveAndReplaceEntityRecords": function() { return /* reexport safe */ _action_creators__WEBPACK_IMPORTED_MODULE_0__.receiveAndReplaceEntityRecords; },
/* harmony export */   "receiveDeleteEntityId": function() { return /* reexport safe */ _action_creators__WEBPACK_IMPORTED_MODULE_0__.receiveDeleteEntityId; },
/* harmony export */   "receiveDirtyRelationAddition": function() { return /* reexport safe */ _action_creators__WEBPACK_IMPORTED_MODULE_0__.receiveDirtyRelationAddition; },
/* harmony export */   "receiveDirtyRelationDeletion": function() { return /* reexport safe */ _action_creators__WEBPACK_IMPORTED_MODULE_0__.receiveDirtyRelationDeletion; },
/* harmony export */   "receiveEntitiesAndResolve": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.receiveEntitiesAndResolve; },
/* harmony export */   "receiveEntity": function() { return /* reexport safe */ _action_creators__WEBPACK_IMPORTED_MODULE_0__.receiveEntity; },
/* harmony export */   "receiveEntityAndResolve": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.receiveEntityAndResolve; },
/* harmony export */   "receiveEntityRecords": function() { return /* reexport safe */ _action_creators__WEBPACK_IMPORTED_MODULE_0__.receiveEntityRecords; },
/* harmony export */   "receiveRelatedEntities": function() { return /* reexport safe */ _action_creators__WEBPACK_IMPORTED_MODULE_0__.receiveRelatedEntities; },
/* harmony export */   "receiveTrashEntityId": function() { return /* reexport safe */ _action_creators__WEBPACK_IMPORTED_MODULE_0__.receiveTrashEntityId; },
/* harmony export */   "receiveUpdatedEntityIdForRelations": function() { return /* reexport safe */ _action_creators__WEBPACK_IMPORTED_MODULE_0__.receiveUpdatedEntityIdForRelations; },
/* harmony export */   "removeAllRelatedEntitiesForModelEntity": function() { return /* reexport safe */ _action_creators__WEBPACK_IMPORTED_MODULE_0__.removeAllRelatedEntitiesForModelEntity; },
/* harmony export */   "removeDeleteEntityId": function() { return /* reexport safe */ _action_creators__WEBPACK_IMPORTED_MODULE_0__.removeDeleteEntityId; },
/* harmony export */   "removeDirtyRelationAddition": function() { return /* reexport safe */ _action_creators__WEBPACK_IMPORTED_MODULE_0__.removeDirtyRelationAddition; },
/* harmony export */   "removeDirtyRelationDeletion": function() { return /* reexport safe */ _action_creators__WEBPACK_IMPORTED_MODULE_0__.removeDirtyRelationDeletion; },
/* harmony export */   "removeDirtyRelationForAddition": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.removeDirtyRelationForAddition; },
/* harmony export */   "removeDirtyRelationForType": function() { return /* reexport safe */ _action_creators__WEBPACK_IMPORTED_MODULE_0__.removeDirtyRelationForType; },
/* harmony export */   "removeEntityById": function() { return /* reexport safe */ _action_creators__WEBPACK_IMPORTED_MODULE_0__.removeEntityById; },
/* harmony export */   "removeRelatedEntities": function() { return /* reexport safe */ _action_creators__WEBPACK_IMPORTED_MODULE_0__.removeRelatedEntities; },
/* harmony export */   "removeRelationForEntity": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.removeRelationForEntity; },
/* harmony export */   "removeTrashEntityId": function() { return /* reexport safe */ _action_creators__WEBPACK_IMPORTED_MODULE_0__.removeTrashEntityId; },
/* harmony export */   "resetAllModelSpecific": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.resetAllModelSpecific; },
/* harmony export */   "resetAllState": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.resetAllState; },
/* harmony export */   "resetModelSpecificForSelector": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.resetModelSpecificForSelector; },
/* harmony export */   "resetModelSpecificForSelectorAndArgs": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.resetModelSpecificForSelectorAndArgs; },
/* harmony export */   "resetStateForModel": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.resetStateForModel; },
/* harmony export */   "resolveRelationRecordForRelation": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.resolveRelationRecordForRelation; },
/* harmony export */   "trashEntityById": function() { return /* reexport safe */ _action_generators__WEBPACK_IMPORTED_MODULE_1__.trashEntityById; }
/* harmony export */ });
/* harmony import */ var _action_creators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-creators */ "./assets/src/data/eventespresso/core/actions/action-creators.js");
/* harmony import */ var _action_generators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-generators */ "./assets/src/data/eventespresso/core/actions/action-generators.js");



/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/persist-entity-generators.js":
/*!*********************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/persist-entity-generators.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "persistAllDeletes": function() { return /* binding */ persistAllDeletes; },
/* harmony export */   "persistDeletesForModel": function() { return /* binding */ persistDeletesForModel; },
/* harmony export */   "persistEntityRecord": function() { return /* binding */ persistEntityRecord; },
/* harmony export */   "persistForEntityId": function() { return /* binding */ persistForEntityId; },
/* harmony export */   "persistForEntityIds": function() { return /* binding */ persistForEntityIds; },
/* harmony export */   "persistTrashesForModel": function() { return /* binding */ persistTrashesForModel; }
/* harmony export */ });
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _remove_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remove-entities */ "./assets/src/data/eventespresso/core/actions/remove-entities.js");
/* harmony import */ var _receive_entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receive-entities */ "./assets/src/data/eventespresso/core/actions/receive-entities.js");
/* harmony import */ var _receive_relations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./receive-relations */ "./assets/src/data/eventespresso/core/actions/receive-relations.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _schema_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../schema/constants */ "./assets/src/data/eventespresso/schema/constants.js");
/**
 * External imports.
 */




/**
 * Internal imports.
 */







const DEFAULT_EMPTY_OBJECT = {};
const DEFAULT_EMPTY_ARRAY = [];
/**
 * Action generator for persisting an entity record (insert/update)
 * to the server.
 *
 * @param {string} modelName
 * @param {BaseEntity} entity
 * @return {null|BaseEntity} If successfully persisted the persisted entity is
 * returned.  Otherwise null.
 */

function* persistEntityRecord(modelName, entity) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(modelName); // check if is an instance of BaseEntity

  if (!(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__.isModelEntityOfModel)(entity, modelName)) {
    warning__WEBPACK_IMPORTED_MODULE_3___default()(false, 'The provided entity is not a BaseEntity child for the ' + 'provided model.');
    return null;
  } // check if there are any changes in the entity


  if (entity.isClean) {
    warning__WEBPACK_IMPORTED_MODULE_3___default()(false, 'The entity provided has no changes to persist.');
    return null;
  }

  const factory = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveSelect)(_schema_constants__WEBPACK_IMPORTED_MODULE_9__.REDUCER_KEY, 'getFactoryForModel', modelName);

  if (!(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__.isModelEntityFactoryOfModel)(factory, modelName)) {
    return null;
  }

  const path = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.applyQueryString)(modelName);
  const updatedEntity = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.fetch)({
    path: entity.isNew ? path : path + '/' + entity.id,
    method: entity.isNew ? 'POST' : 'PUT',
    data: entity.forPersist
  });

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(updatedEntity)) {
    return null;
  }

  const updatedEntityRecord = factory.fromExisting(updatedEntity);
  const newId = updatedEntityRecord.id;

  if (entity.isNew) {
    yield (0,_remove_entities__WEBPACK_IMPORTED_MODULE_5__.removeEntityById)(modelName, entity.id);
    yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.dispatch)('core/data', 'finishResolution', _constants__WEBPACK_IMPORTED_MODULE_8__.REDUCER_KEY, 'getEntityById', [modelName, newId]);
    yield (0,_receive_relations__WEBPACK_IMPORTED_MODULE_7__.receiveUpdatedEntityIdForRelations)(modelName, entity.id, newId);
  }

  yield (0,_receive_entities__WEBPACK_IMPORTED_MODULE_6__.receiveAndReplaceEntityRecords)(modelName, [updatedEntityRecord]);
  return updatedEntityRecord;
}
/**
 * Action generator for persisting entities with the given id to the server.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @return {BaseEntity|null} If the entity is successfully persisted it is
 * returned (may have a new id!), otherwise null is returned.
 */


function* persistForEntityId(modelName, entityId) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(modelName);
  const entity = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveSelect)(_constants__WEBPACK_IMPORTED_MODULE_8__.REDUCER_KEY, 'getEntityById', modelName, entityId);

  if ((0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__.isModelEntityOfModel)(entity, modelName)) {
    const persistedEntity = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_8__.REDUCER_KEY, 'persistEntityRecord', modelName, entity);
    return (0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__.isModelEntityOfModel)(persistedEntity, modelName) ? persistedEntity : null;
  }

  return null;
}
/**
 * Action generator for persisting entities with the given ids to the server.
 *
 * @param {string} modelName
 * @param {Array} entityIds
 * @return {Object} Entities persisted indexed by ID.
 */


function* persistForEntityIds(modelName) {
  let entityIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(modelName);
  const entities = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.select)(_constants__WEBPACK_IMPORTED_MODULE_8__.REDUCER_KEY, 'getEntitiesByIds', modelName, entityIds);
  const retrievedEntities = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isArray)(entities) ? (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.keyEntitiesByPrimaryKeyValue)('event', entities) : new Map();
  const retrievedIds = Array.from(retrievedEntities.keys());

  if (retrievedIds.length < 1) {
    return DEFAULT_EMPTY_OBJECT;
  }

  const persistedEntities = {};

  while (retrievedIds.length > 0) {
    const persistedEntity = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_8__.REDUCER_KEY, 'persistEntityRecord', modelName, retrievedEntities.get(retrievedIds.pop()));

    if ((0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__.isModelEntityOfModel)(persistedEntity, modelName)) {
      persistedEntities[persistedEntity.id] = persistedEntity;
    }
  }

  return persistedEntities;
}
/**
 * Action generator for persisting any queued deletes for the given model.
 *
 * @param {string} modelName
 * @return {Array} An array of entity ids for entities successfully deleted.
 */


function* persistDeletesForModel(modelName) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(modelName);
  const entityIds = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.select)(_constants__WEBPACK_IMPORTED_MODULE_8__.REDUCER_KEY, 'getEntityIdsQueuedForDelete', modelName);

  if (entityIds.length < 0) {
    return DEFAULT_EMPTY_ARRAY;
  }

  const deletedIds = [];

  while (entityIds.length > 0) {
    const entityId = entityIds.pop();
    const response = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.fetch)({
      path: (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.applyQueryString)(modelName) + '/' + entityId,
      data: {
        force: true
      },
      method: 'DELETE'
    });

    if (response.deleted) {
      deletedIds.push(entityId);
      yield (0,_remove_entities__WEBPACK_IMPORTED_MODULE_5__.removeDeleteEntityId)(modelName, entityId);
    }
  }

  return deletedIds;
}
/**
 * Action generator for persisting any queued trashes for the given model.
 *
 * @param {string} modelName
 * @return {Array} An array of entity ids for entities successfully trashed.
 */


function* persistTrashesForModel(modelName) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(modelName);
  const entityIds = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.select)(_constants__WEBPACK_IMPORTED_MODULE_8__.REDUCER_KEY, 'getEntityIdsQueuedForTrash', modelName);

  if (entityIds.length < 1) {
    return DEFAULT_EMPTY_ARRAY;
  }

  const trashedIds = [];

  while (entityIds.length > 0) {
    const entityId = entityIds.pop();
    const success = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.fetch)({
      path: (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.applyQueryString)(modelName) + '/' + entityId,
      method: 'DELETE'
    });

    if (success) {
      trashedIds.push(entityId);
      yield (0,_remove_entities__WEBPACK_IMPORTED_MODULE_5__.removeTrashEntityId)(modelName, entityId);
    }
  }

  return trashedIds;
}
/**
 * Action generator for persisting queued delete and trash actions for all
 * models in the state.
 *
 * @return {Object} An object indexed by delete/trash containing an array of
 * entity ids that were persisted.
 */


function* persistAllDeletes() {
  const modelsForDelete = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.select)(_constants__WEBPACK_IMPORTED_MODULE_8__.REDUCER_KEY, 'getModelsQueuedForDelete');

  if (modelsForDelete.length < 1) {
    return DEFAULT_EMPTY_OBJECT;
  }

  const deletedIds = {};

  while (modelsForDelete.length > 0) {
    const modelForDelete = modelsForDelete.pop();
    const idsDeleted = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveDispatch)(_constants__WEBPACK_IMPORTED_MODULE_8__.REDUCER_KEY, 'persistDeletesForModel', modelForDelete);

    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(idsDeleted)) {
      deletedIds[modelForDelete] = idsDeleted;
    }
  }

  const modelsForTrash = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.select)(_constants__WEBPACK_IMPORTED_MODULE_8__.REDUCER_KEY, 'getModelsQueuedForTrash');

  if (modelsForTrash.length < 1) {
    return DEFAULT_EMPTY_OBJECT;
  }

  const trashedIds = {};

  while (modelsForTrash.length > 0) {
    const modelForTrash = modelsForTrash.pop();
    const idsTrashed = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveDispatch)(_constants__WEBPACK_IMPORTED_MODULE_8__.REDUCER_KEY, 'persistTrashesForModel', modelForTrash);

    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(idsTrashed)) {
      trashedIds[modelForTrash] = idsTrashed;
    }
  }

  return {
    deleted: deletedIds,
    trashed: trashedIds
  };
}



/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/persist-relations-generators.js":
/*!************************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/persist-relations-generators.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRelationState": function() { return /* binding */ getRelationState; },
/* harmony export */   "persistAddRelationsForModel": function() { return /* binding */ persistAddRelationsForModel; },
/* harmony export */   "persistDeleteRelationsForModel": function() { return /* binding */ persistDeleteRelationsForModel; },
/* harmony export */   "persistNewEntityAndRemoveDirtyRelations": function() { return /* binding */ persistNewEntityAndRemoveDirtyRelations; },
/* harmony export */   "persistRelationsForEntityId": function() { return /* binding */ persistRelationsForEntityId; },
/* harmony export */   "persistRelationsForEntityIdAndRelation": function() { return /* binding */ persistRelationsForEntityIdAndRelation; },
/* harmony export */   "persistRelationsForEntityIdAndRelationId": function() { return /* binding */ persistRelationsForEntityIdAndRelationId; },
/* harmony export */   "persistRelationsForModel": function() { return /* binding */ persistRelationsForModel; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cuid */ "cuid");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _remove_relations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remove-relations */ "./assets/src/data/eventespresso/core/actions/remove-relations.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _schema_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../schema/constants */ "./assets/src/data/eventespresso/schema/constants.js");
/**
 * External imports.
 */




/**
 * Internal imports.
 */





const DEFAULT_EMPTY_OBJECT = {};
const DEFAULT_EMPTY_ARRAY = [];
/**
 * Action generator for persisting any queued add relations to the server
 * specific to the given model name.
 *
 * @param {string} modelName
 * @return {Object} returns an object indexed by the originating entity id for
 * the requested model and with values that are an Object indexed by relation
 * names with values of relation Ids persisted.
 */

function* persistAddRelationsForModel(modelName) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__.singularModelName)(modelName);
  return yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveDispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'persistRelationsForModel', modelName);
}
/**
 * Action generator for persisting any queued delete relations to the server
 * specific to the given model name.
 *
 * @param {string} modelName
 * @return {Object} returns an object indexed by the originating entity id for
 * the requested model and with values that are an Object indexed by relation
 * names with values of relation Ids persisted.
 */


function* persistDeleteRelationsForModel(modelName) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__.singularModelName)(modelName);
  return yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveDispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'persistRelationsForModel', modelName, false);
}
/**
 * Action generator for persisting any queued relations to the server specific
 * to the given model name.
 *
 * @param {string} modelName
 * @param {boolean} addRelation  Whether this persist request is for queued
 * relations to add for the model or queued relations to delete for the model.
 * @return {Object} returns an object indexed by the originating entity id for
 * the requested model and with values that are an Object indexed by relation
 * names with values of relation Ids persisted.
 */


function* persistRelationsForModel(modelName) {
  let addRelation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__.singularModelName)(modelName);
  const relationState = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveDispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getRelationState', modelName, addRelation);

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(relationState)) {
    return DEFAULT_EMPTY_OBJECT;
  }

  const entityIds = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.keys)(relationState);
  const relationsPersisted = entityIds.length > 0 ? {} : DEFAULT_EMPTY_OBJECT;

  while (entityIds.length > 0) {
    const entityId = entityIds.pop();
    const persistedRelations = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveDispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'persistRelationsForEntityId', modelName, entityId, addRelation, relationState);

    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(persistedRelations)) {
      relationsPersisted[entityId] = persistedRelations;
    }
  }

  return relationsPersisted;
}
/**
 * Action generator for persisting any queued relations to the server specific
 * to the given entity id belonging to the given model name.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {boolean} addRelation Whether this persist request is for queued
 * relations to add for the model or queued relations to delete for the model.
 * @param {Object} relationState Optional, if the current relation state is known
 * it can be passed in.  Typically client code won't know this so should not be
 * passed in.
 * @return {Object} An object indexed by relation names with the values an array
 * of relation ids for each relation that were persisted.
 */


function* persistRelationsForEntityId(modelName, entityId) {
  let addRelation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  let relationState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_EMPTY_OBJECT;
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__.singularModelName)(modelName);
  relationState = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveDispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getRelationState', modelName, addRelation, relationState);

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(relationState)) {
    return DEFAULT_EMPTY_OBJECT;
  }

  const relationNames = relationState[entityId] ? (0,lodash__WEBPACK_IMPORTED_MODULE_0__.keys)(relationState[entityId]) : DEFAULT_EMPTY_ARRAY;

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(relationNames)) {
    return DEFAULT_EMPTY_OBJECT;
  }

  const persistedRelations = {};

  while (relationNames.length > 0) {
    const relationName = relationNames.pop();
    const persistedRelationIds = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveDispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'persistRelationsForEntityIdAndRelation', modelName, entityId, relationName, addRelation, relationState);

    if (persistedRelationIds.length > 0) {
      persistedRelations[relationName] = persistedRelationIds;
    }
  }

  return persistedRelations;
}
/**
 * Action generator for persisting any queued relations to the server specific
 * to the given entity id belonging to the given model name and for the given
 * relation to that model.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {string} relationName
 * @param {boolean} addRelation Whether this persist request is for queued
 * relations to add for the model or queued relations to delete for the model.
 * @param {Object} relationState Optional, if the current relation state is known
 * it can be passed in.  Typically client code won't know this so should not be
 * passed in.
 * @return {Array} An array of relation ids persisted for that relation.
 */


function* persistRelationsForEntityIdAndRelation(modelName, entityId, relationName) {
  let addRelation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  let relationState = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : DEFAULT_EMPTY_OBJECT;
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__.singularModelName)(relationName);
  relationState = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveDispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getRelationState', modelName, addRelation, relationState);

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(relationState)) {
    return DEFAULT_EMPTY_ARRAY;
  }

  const relationEntityIds = relationState[entityId] && relationState[entityId][relationName] ? [...relationState[entityId][relationName]] : DEFAULT_EMPTY_ARRAY;

  if (relationEntityIds.length < 1) {
    return DEFAULT_EMPTY_ARRAY;
  }

  const persistedRelationIds = [];

  while (relationEntityIds.length > 0) {
    const persistedRelationId = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveDispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'persistRelationsForEntityIdAndRelationId', modelName, entityId, relationName, relationEntityIds.pop(), addRelation, relationState);

    if (persistedRelationId) {
      persistedRelationIds.push(persistedRelationId);
    }
  }

  return persistedRelationIds;
}
/**
 * Action generator for persisting any queued relations to the server specific
 * to the given entity id belonging to the given model name, for the given
 * relation to that model and the given relation id for that relation.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {string} relationName
 * @param {number} relationId
 * @param {boolean} addRelation Whether this persist request is for queued
 * relations to add for the model or queued relations to delete for the model.
 * @param {Object} relationState Optional, if the current relation state is known
 * it can be passed in.  Typically client code won't know this so should not be
 * passed in.
 * @return {number} If 0 is returned then the entity was not persisted,
 * otherwise the value returned will be the id persisted.
 */


function* persistRelationsForEntityIdAndRelationId(modelName, entityId, relationName, relationId) {
  let addRelation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  let relationState = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : DEFAULT_EMPTY_OBJECT;
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__.singularModelName)(relationName);
  relationState = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveDispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getRelationState', modelName, addRelation, relationState);
  let entityIdChanged = false;

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(relationState)) {
    return 0;
  } // is the entityId a cuid?  If so, then let's persist.


  if (cuid__WEBPACK_IMPORTED_MODULE_1___default().isCuid(entityId)) {
    entityId = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveDispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'persistNewEntityAndRemoveDirtyRelations', relationName, relationId, modelName, entityId, addRelation, [modelName, entityId]); // if entityId is 0 bail because it didn't get persisted so relations
    // can't be persisted either.

    if (entityId === 0) {
      return entityId;
    }

    entityIdChanged = true;
  } // is the relationId a cuid? If so, then let's persist


  if (cuid__WEBPACK_IMPORTED_MODULE_1___default().isCuid(relationId)) {
    relationId = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveDispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'persistNewEntityAndRemoveDirtyRelations', relationName, relationId, modelName, entityId, addRelation, [relationName, relationId], !entityIdChanged); // if relationId is 0, bail because it didn't get persisted so relations
    // can't be persisted either.

    if (relationId === 0) {
      return relationId;
    }
  }

  const endpoint = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveSelect)(_schema_constants__WEBPACK_IMPORTED_MODULE_7__.REDUCER_KEY, 'getRelationEndpointForEntityId', modelName, entityId, relationName);
  const success = endpoint ? yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.fetch)({
    path: endpoint + '/' + relationId,
    method: addRelation ? 'PUT' : 'DELETE'
  }) : false;

  if (success) {
    // Even when ids have changed, this should catch any potential queued
    // relation items for those things that got updated in state in a prior
    // dispatch
    yield (0,_remove_relations__WEBPACK_IMPORTED_MODULE_5__.removeDirtyRelationForType)(relationName, relationId, modelName, entityId, addRelation);
    return relationId;
  }

  return 0;
}
/**
 * Action generator for handling persisting a new entity existing in the
 * relation.
 *
 * @param {string} relationName
 * @param {number} relationId
 * @param {string} modelName
 * @param {number} entityId
 * @param {boolean} addRelation
 * @param {Array} persistingArguments
 * @param {boolean} doRelationRemoval
 * @return {number} Either the new id or 0 if the entity was not successfully
 * persisted.
 */


function* persistNewEntityAndRemoveDirtyRelations(relationName, relationId, modelName, entityId, addRelation, persistingArguments) {
  let doRelationRemoval = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__.singularModelName)(relationName);
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__.singularModelName)(modelName);
  const persistedEntity = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveDispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'persistForEntityId', ...persistingArguments); // if not dispatched successfully then let's bail because relation can't
  // be persisted

  if (!(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__.isModelEntityOfModel)(persistedEntity, persistingArguments[0])) {
    return 0;
  }

  if (doRelationRemoval) {
    // ensure oldId is removed from items (this is a failsafe in case the
    // id swap in relation state isn't complete yet).
    yield (0,_remove_relations__WEBPACK_IMPORTED_MODULE_5__.removeDirtyRelationForType)(relationName, relationId, modelName, entityId, addRelation);
  }

  return persistedEntity.id;
}
/**
 * Generator for returning relation state for the given model.
 *
 * @param {string} modelName
 * @param {boolean} addRelation  Whether to return the relation state for relations
 * queued for adding (true) or deletion (false).
 * @param {Object} relationState  Optionally, callers can provide a relation
 * relation state and if provided will be used instead of selecting from the
 * store.
 *
 * @return {Object}  The relation state for the given model.
 */


function* getRelationState(modelName) {
  let addRelation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  let relationState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_EMPTY_OBJECT;
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__.singularModelName)(modelName);
  const selector = addRelation ? 'getRelationAdditionsQueuedForModel' : 'getRelationDeletionsQueuedForModel';
  relationState = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(relationState) ? yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.select)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, selector, modelName) : relationState;
  return relationState;
}



/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/receive-entities.js":
/*!************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/receive-entities.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "receiveAndReplaceEntityRecords": function() { return /* binding */ receiveAndReplaceEntityRecords; },
/* harmony export */   "receiveDeleteEntityId": function() { return /* binding */ receiveDeleteEntityId; },
/* harmony export */   "receiveEntity": function() { return /* binding */ receiveEntity; },
/* harmony export */   "receiveEntityRecords": function() { return /* binding */ receiveEntityRecords; },
/* harmony export */   "receiveTrashEntityId": function() { return /* binding */ receiveTrashEntityId; }
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Internal imports
 */

const {
  entities: types
} = _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES;
/**
 * External imports
 */


/**
 * Action for receiving entity records.
 * Entity records received will NOT replace any existing entities in the state
 * (matching ids).
 *
 * @param {string} modelName expected to be an model name.
 * @param {Array<BaseEntity>} entities Array of model entity
 * instances indexed by the primary key.
 * @return {
 * {
 * 	type: string,
 * 	modelName: string,
 * 	entities: Array<BaseEntity>
 * 	}
 * }  An action object.
 */

function receiveEntityRecords(modelName) {
  let entities = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(modelName);
  return {
    type: types.RECEIVE_ENTITY_RECORDS,
    modelName,
    entities
  };
}
/**
 * Same as receiveEntityRecords except incoming entities will replace any
 * matching records (by ID)  in the state.
 *
 * @param {string} modelName
 * @param {Array} entities
 * @return {
 * {
 * 	type: string,
 * 	modelName: string,
 * 	entities: Array<BaseEntity>
 * 	}
 * }  An action object.
 */


function receiveAndReplaceEntityRecords(modelName) {
  let entities = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(modelName);
  return {
    type: types.RECEIVE_AND_REPLACE_ENTITY_RECORDS,
    modelName,
    entities
  };
}
/**
 * Action creator for adding an entity to the state (as opposed to an entity
 * record)
 *
 * @param {BaseEntity} entity
 * @return {{type: string, entity: BaseEntity}} An action
 * object.
 */


function receiveEntity(entity) {
  return {
    type: types.RECEIVE_ENTITY,
    entity
  };
}
/**
 * Action creator for queuing an entity id for trash.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @return {{type: string, modelName: string, entityId: number}} An action
 * object.
 */


function receiveTrashEntityId(modelName, entityId) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(modelName);
  return {
    type: types.RECEIVE_TRASH_ENTITY_ID,
    modelName,
    entityId
  };
}
/**
 * Action creator for queueing an entity id for hard delete.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @return {{type: string, modelName: string, entityId: number}} An action
 * object.
 */


function receiveDeleteEntityId(modelName, entityId) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(modelName);
  return {
    type: types.RECEIVE_DELETE_ENTITY_ID,
    modelName,
    entityId
  };
}



/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/receive-relations.js":
/*!*************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/receive-relations.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "receiveDirtyRelationAddition": function() { return /* binding */ receiveDirtyRelationAddition; },
/* harmony export */   "receiveDirtyRelationDeletion": function() { return /* binding */ receiveDirtyRelationDeletion; },
/* harmony export */   "receiveRelatedEntities": function() { return /* binding */ receiveRelatedEntities; },
/* harmony export */   "receiveUpdatedEntityIdForRelations": function() { return /* binding */ receiveUpdatedEntityIdForRelations; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Internal imports
 */


const {
  relations: types
} = _action_types__WEBPACK_IMPORTED_MODULE_1__.ACTION_TYPES;
/**
 * External imports
 */


/**
 * Action creator for adding relation indexes for entities and their relations.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {string} relationName
 * @param {Array} relatedEntityIds
 * @return {
 * 	{
 * 		type: string,
 * 		modelName: string,
 * 		entityId: number,
 * 		relatedEntityIds: Array
 * 	}
 * } An action object.
 */

function receiveRelatedEntities(modelName, entityId, relationName, relatedEntityIds) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(relationName);
  return {
    type: types.RECEIVE_RELATED_ENTITY_IDS,
    modelName,
    entityId,
    relationName,
    relatedEntityIds
  };
}
/**
 * Action creator for queuing the a relation creation for the given data.
 *
 * @param {string} relationName
 * @param {number} relationEntityId
 * @param {string} modelName
 * @param {number} entityId
 * @return {
 * 	{
 * 		type: string,
 * 		relationName: string,
 * 		relationEntityId: number,
 * 		modelName: string,
 * 		entityId: number,
 * 		queueType: string
 * 	}
 * }
 * An action object.
 */


function receiveDirtyRelationAddition(relationName, relationEntityId, modelName, entityId) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(relationName);
  return {
    type: types.RECEIVE_DIRTY_RELATION_ADDITION,
    relationName,
    relationEntityId,
    modelName,
    entityId,
    queueType: _constants__WEBPACK_IMPORTED_MODULE_0__.TYPE_QUEUE_RELATION_ADD
  };
}
/**
 * Action creator for queueing the relation deletion for the given data.
 *
 * @param {string} relationName
 * @param {number} relationEntityId
 * @param {string} modelName
 * @param {number} entityId
 * @return {
 * 	{
 * 		type: string,
 * 		relationName: string,
 * 		relationEntityId: number,
 * 		modelName: string,
 * 		entityId: number,
 * 		queueType: string
 * 	}
 * } An action object.
 */


function receiveDirtyRelationDeletion(relationName, relationEntityId, modelName, entityId) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(relationName);
  return {
    type: types.RECEIVE_DIRTY_RELATION_DELETION,
    relationName,
    relationEntityId,
    modelName,
    entityId,
    queueType: _constants__WEBPACK_IMPORTED_MODULE_0__.TYPE_QUEUE_RELATION_DELETE
  };
}
/**
 * Action creator for triggering the replacement of any instance of the old
 * entity id in the state for the given model with the new entity id.
 *
 * Typically this is triggered after persisting a new entity to the server and
 * receiving its new entity id on response.
 *
 * @param {string} modelName
 * @param {number} oldEntityId
 * @param {number} newEntityId
 * @return {
 * 	{
 * 		type: string,
 * 		modelName: *,
 * 		oldEntityId: *,
 * 		newEntityId: *
 * 	}
 * } An action object
 */


function receiveUpdatedEntityIdForRelations(modelName, oldEntityId, newEntityId) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  return {
    type: types.RECEIVE_UPDATED_ENTITY_ID_FOR_RELATIONS,
    modelName,
    oldEntityId,
    newEntityId
  };
}



/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/remove-entities.js":
/*!***********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/remove-entities.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeDeleteEntityId": function() { return /* binding */ removeDeleteEntityId; },
/* harmony export */   "removeEntityById": function() { return /* binding */ removeEntityById; },
/* harmony export */   "removeTrashEntityId": function() { return /* binding */ removeTrashEntityId; }
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");
/**
 * Internal imports
 */

const {
  entities: types
} = _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES;
/**
 * Action creator for removing the entity from the state.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @return {{type: string, modelName: string, entityId: number}} An action
 * object.
 */

function removeEntityById(modelName, entityId) {
  return {
    type: types.REMOVE_ENTITY_BY_ID,
    modelName,
    entityId
  };
}
/**
 * Action creator for queueing the deletion of entity on the server
 *
 * @param {string} modelName
 * @param {number} entityId
 * @return {{type: string, modelName: string, entityId: {number}}} An action
 * object
 */

function removeDeleteEntityId(modelName, entityId) {
  return {
    type: types.REMOVE_DELETE_ENTITY_ID,
    modelName,
    entityId
  };
}
/**
 * Action creator for queuing the trashing of entity on the server
 *
 * @param {string} modelName
 * @param {number} entityId
 * @return {{type: string, modelName: string, entityId: number}} An action
 * object.
 */

function removeTrashEntityId(modelName, entityId) {
  return {
    type: types.REMOVE_TRASH_ENTITY_ID,
    modelName,
    entityId
  };
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/remove-relations.js":
/*!************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/remove-relations.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeAllRelatedEntitiesForModelEntity": function() { return /* binding */ removeAllRelatedEntitiesForModelEntity; },
/* harmony export */   "removeDirtyRelationAddition": function() { return /* binding */ removeDirtyRelationAddition; },
/* harmony export */   "removeDirtyRelationDeletion": function() { return /* binding */ removeDirtyRelationDeletion; },
/* harmony export */   "removeDirtyRelationForType": function() { return /* binding */ removeDirtyRelationForType; },
/* harmony export */   "removeRelatedEntities": function() { return /* binding */ removeRelatedEntities; }
/* harmony export */ });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");
/**
 * External imports
 */

/**
 * Internal imports
 */



const {
  relations: types
} = _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES;
/**
 * Action creator for removing all indexed relations for a specific entity from
 * the state.
 *
 * Note: The following things are accomplished by this action (via the reducer):
 * - The relation index for the relation on this entity is removed from state.
 * - If the relation entities themselves have no other relation index, they
 *   are also removed from state.
 * - Any dirty relations for this entity are removed from state.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @return {{type: string, modelName: string, entityId: number}}
 * An action object
 */

function removeAllRelatedEntitiesForModelEntity(modelName, entityId) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(modelName);
  return {
    type: types.REMOVE_RELATED_ENTITIES_FOR_ENTITY,
    modelName,
    entityId
  };
}
/**
 * Action creator for removing relations from the given model from the relations
 * state.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {string} relationName
 * @param {Array} relatedEntityIds
 * @return {
 * 	{
 * 		type: string,
 * 		modelName: string,
 * 		entityId: number,
 * 		relationName: string,
 * 		relationEntityIds: Array
 * 	}
 * } An action object.
 */


function removeRelatedEntities(modelName, entityId, relationName, relatedEntityIds) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(relationName);
  return {
    type: types.REMOVE_RELATED_ENTITY_IDS,
    modelName,
    entityId,
    relationName,
    relatedEntityIds
  };
}
/**
 * Action creator for removing the dirty relation from the state for the given
 * relation action type (delete or add).
 *
 * @param {string} relationName
 * @param {number} relationEntityId
 * @param {string} modelName
 * @param {number} entityId
 * @param {boolean} addRelation
 * @return {
 * 	{
 * 		relationName: string,
 * 		relationEntityId: number,
 * 		modelName: string,
 * 		entityId: number,
 * 		type: string,
 * 		queueType: string
 * 	}
 * } An action object
 */


function removeDirtyRelationForType(relationName, relationEntityId, modelName, entityId) {
  let addRelation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(relationName);
  const type = addRelation ? types.REMOVE_DIRTY_RELATION_ADDITION : types.REMOVE_DIRTY_RELATION_DELETION;
  return {
    relationName,
    relationEntityId,
    modelName,
    entityId,
    type,
    queueType: addRelation ? _constants__WEBPACK_IMPORTED_MODULE_1__.TYPE_QUEUE_RELATION_ADD : _constants__WEBPACK_IMPORTED_MODULE_1__.TYPE_QUEUE_RELATION_DELETE
  };
}
/**
 * Action creator for removing the dirty relation from the add relation state
 * record.
 *
 * @param {string} relationName
 * @param {number} relationEntityId
 * @param {string} modelName
 * @param {number} entityId
 * @return {
 * 	{
 * 		relationName: string,
 * 		relationEntityId: number,
 * 		modelName: string,
 * 		entityId: number,
 * 		type: string,
 * 		queueType: string
 * 	}
 * } An action object.
 */


function removeDirtyRelationAddition(relationName, relationEntityId, modelName, entityId) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(relationName);
  return removeDirtyRelationForType(relationName, relationEntityId, modelName, entityId);
}
/**
 * An action creator for removing the dirty relation from the delete relation
 * state record.
 *
 * @param {string} relationName
 * @param {number} relationEntityId
 * @param {string} modelName
 * @param {number} entityId
 * @return {
 * 	{
 * 		relationName: string,
 * 		relationEntityId: number,
 * 		modelName: string,
 * 		entityId: number,
 * 		type: string,
 * 		queueType: string
 * 	}
 * } An action object
 */


function removeDirtyRelationDeletion(relationName, relationEntityId, modelName, entityId) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(relationName);
  return removeDirtyRelationForType(relationName, relationEntityId, modelName, entityId, false);
}



/***/ }),

/***/ "./assets/src/data/eventespresso/core/actions/reset.js":
/*!*************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/actions/reset.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resetAllModelSpecific": function() { return /* binding */ resetAllModelSpecific; },
/* harmony export */   "resetAllState": function() { return /* binding */ resetAllState; },
/* harmony export */   "resetModelSpecificForSelector": function() { return /* binding */ resetModelSpecificForSelector; },
/* harmony export */   "resetModelSpecificForSelectorAndArgs": function() { return /* binding */ resetModelSpecificForSelectorAndArgs; },
/* harmony export */   "resetStateForModel": function() { return /* binding */ resetStateForModel; }
/* harmony export */ });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _model_model_selectors_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/model-selectors-index */ "./assets/src/data/eventespresso/core/model/model-selectors-index.js");
/**
 * External imports
 */




/**
 * Internal imports
 */





const {
  resets: types
} = _action_types__WEBPACK_IMPORTED_MODULE_5__.ACTION_TYPES;
/**
 * Resets the entire state to its default for the store.
 */

function* resetAllState() {
  // action for resetting the entire state.
  yield {
    type: types.RESET_ALL_STATE
  }; // get resolvers from core/data and dispatch invalidation of each resolver.

  const resolvers = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.select)('core/data', 'getCachedResolvers', _constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY);

  if (invalidateActionsAvailable()) {
    yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.dispatch)('core/data', 'invalidateResolutionForStore', _constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY);
    return;
  } // dispatch invalidation of the cached resolvers


  for (const selector in resolvers) {
    for (const entry of resolvers[selector]._map) {
      yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.dispatch)('core/data', 'invalidateResolution', _constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, selector, entry[0]);
    }
  }
}
/**
 * Resets all state related to the given modelName
 *
 * Note: This does not reset any state in the modelSpecific tree as there is no
 * way to know what applies to the current model.
 *
 * @param {string} modelName
 */

function* resetStateForModel(modelName) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(modelName);
  yield {
    type: types.RESET_STATE_FOR_MODEL,
    modelName
  }; // get resolvers from core/data

  const resolvers = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.select)('core/data', 'getCachedResolvers', _constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY); // dispatch invalidation of the cached resolvers for any resolver that
  // has a variation of modelName in the selector name or in the args for the
  // cached resolver.

  for (const selector in resolvers) {
    for (const entry of resolvers[selector]._map) {
      if ((modelNameInSelector(selector, modelName) || modelNameInArgs(entry[0], modelName)) && !selectorIsModelSpecific(selector)) {
        yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.dispatch)('core/data', 'invalidateResolution', _constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, selector, entry[0]);
      }
    }
  }
}
/**
 * Helper for determining whether the given modelName is found in the given
 * selectorName.
 *
 * @param {string} selectorName
 * @param {string} modelName
 *
 * @return {boolean} True means it is present, false means it isn't
 */

const modelNameInSelector = (selectorName, modelName) => {
  const singularName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(modelName);
  selectorName = selectorName.toLowerCase();
  return selectorName.indexOf(singularName) > -1;
};
/**
 * Helper for determining whether the given modelName is found in the given
 * set of args.
 *
 * This also considers if any of the args are an instance of BaseEntity and
 * if that BaseEntity instance is for the given model.
 *
 * @param {Array} args
 * @param {string} modelName
 *
 * @return {boolean}  True means it is present, false means it isn't.
 */


const modelNameInArgs = (args, modelName) => {
  const singularName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(modelName);
  const hasModelName = args.indexOf(singularName) > -1;

  if (hasModelName) {
    return true;
  } // it's possible one of the args is an instance of BaseEntity.  If so,
  // then let's compare against the modelName on the entity instance.


  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.some)(args, arg => {
    return (0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__.isModelEntityOfModel)(arg, singularName);
  });
};
/**
 * For the given selector name and (optional) selectorsToInvalidate, this
 * returns whether the selectorName is a match for the selectors to invalidate.
 *
 * @param {string} selectorName
 * @param {Array|null?} selectorsToInvalidate If null, then the match array will
 * be obtained from the registered modelSpecificSelectors imported for the
 * module
 *
 * @return {boolean} True means there is a match, false means there is not.
 */


const selectorIsModelSpecific = function (selectorName) {
  let selectorsToInvalidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  selectorsToInvalidate = selectorsToInvalidate === null ? (0,lodash__WEBPACK_IMPORTED_MODULE_1__.keys)(_model_model_selectors_index__WEBPACK_IMPORTED_MODULE_7__) : selectorsToInvalidate;
  return selectorsToInvalidate.indexOf(selectorName) > -1;
};
/**
 * Resets all model specific state (optionally restricted to the given selector
 * name if present).
 *
 * @param {string} selectorName  If present then state will only be reset for
 * the specific selector.  Otherwise all model specific state is reset.
 */


function* resetAllModelSpecific(selectorName) {
  yield {
    type: selectorName === undefined ? types.RESET_ALL_MODEL_SPECIFIC : types.RESET_MODEL_SPECIFIC_FOR_SELECTOR,
    selector: selectorName
  }; // get resolvers

  const resolvers = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.select)('core/data', 'getCachedResolvers', _constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY);
  const selectorsToInvalidate = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.keys)(_model_model_selectors_index__WEBPACK_IMPORTED_MODULE_7__); // dispatch invalidation of the cached resolvers for model specific selector

  for (const selector in resolvers) {
    if (selectorName === undefined || selectorName === selector) {
      for (const entry of resolvers[selector]._map) {
        if (selectorIsModelSpecific(selector, selectorsToInvalidate)) {
          yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.dispatch)('core/data', 'invalidateResolution', _constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, selector, entry[0]);
        }
      }
    }
  }
}
/**
 * Reset model specific state for the given selector name.
 *
 * @param {string} selectorName
 */

function* resetModelSpecificForSelector(selectorName) {
  yield* resetAllModelSpecific(selectorName);
}
/**
 * Resets all state for a given model specific selector and its args
 *
 * @param {string} selectorName
 * @param {Array} args
 */

function* resetModelSpecificForSelectorAndArgs(selectorName) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  yield {
    type: types.RESET_MODEL_SPECIFIC_FOR_SELECTOR_AND_ARGS,
    selector: selectorName,
    args
  };
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.dispatch)('core/data', 'invalidateResolution', _constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, selectorName, args);
}
/**
 * Helper for determining if actions are available in the `core/data` package.
 *
 * @return {boolean}  True means additional invalidation actions available.
 */

const invalidateActionsAvailable = () => {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)('core/data').invalidateResolutionForStore !== undefined;
};

/***/ }),

/***/ "./assets/src/data/eventespresso/core/constants.js":
/*!*********************************************************!*\
  !*** ./assets/src/data/eventespresso/core/constants.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REDUCER_KEY": function() { return /* binding */ REDUCER_KEY; },
/* harmony export */   "TYPE_QUEUE_RELATION_ADD": function() { return /* binding */ TYPE_QUEUE_RELATION_ADD; },
/* harmony export */   "TYPE_QUEUE_RELATION_DELETE": function() { return /* binding */ TYPE_QUEUE_RELATION_DELETE; }
/* harmony export */ });
const REDUCER_KEY = 'eventespresso/core';
const TYPE_QUEUE_RELATION_DELETE = 'delete';
const TYPE_QUEUE_RELATION_ADD = 'add';

/***/ }),

/***/ "./assets/src/data/eventespresso/core/index.js":
/*!*****************************************************!*\
  !*** ./assets/src/data/eventespresso/core/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./assets/src/data/eventespresso/core/reducers/index.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./assets/src/data/eventespresso/core/selectors/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./assets/src/data/eventespresso/core/actions/index.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "./assets/src/data/eventespresso/core/resolvers/index.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model */ "./assets/src/data/eventespresso/core/model/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */








/**
 * Registers store for 'eventespresso/core'.
 */

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, {
  reducer: _reducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: { ..._actions__WEBPACK_IMPORTED_MODULE_3__,
    ..._model__WEBPACK_IMPORTED_MODULE_5__.actions
  },
  selectors: { ..._selectors__WEBPACK_IMPORTED_MODULE_2__,
    ..._model__WEBPACK_IMPORTED_MODULE_5__.selectors
  },
  resolvers: { ..._resolvers__WEBPACK_IMPORTED_MODULE_4__,
    ..._model__WEBPACK_IMPORTED_MODULE_5__.resolvers
  },
  controls: _base_controls__WEBPACK_IMPORTED_MODULE_7__["default"]
}));

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/checkin/actions.js":
/*!*********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/checkin/actions.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "receiveLatestCheckin": function() { return /* binding */ receiveLatestCheckin; },
/* harmony export */   "toggleCheckin": function() { return /* binding */ toggleCheckin; }
/* harmony export */ });
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _schema_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../schema/constants */ "./assets/src/data/eventespresso/schema/constants.js");
/**
 * External imports
 */





/**
 * Internal imports
 */




/**
 * Action for receiving the latest check-in record for the given datetime id and
 * registration id.
 *
 * @param {BaseEntity} checkinEntity
 * @param {number} registrationId
 * @param {number} dateTimeId
 */

function* receiveLatestCheckin(checkinEntity, registrationId, dateTimeId) {
  if (!(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__.isModelEntityOfModel)(checkinEntity, 'checkin')) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_1__.InvalidModelEntity('Expected a checkin record.', checkinEntity);
  }

  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'receiveEntity', checkinEntity);
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/data', 'finishResolution', _constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getEntityById', ['checkin', checkinEntity.id]);
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'receiveSelectorValue', 'getLatestCheckin', checkinEntity.id, registrationId, dateTimeId);
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/data', 'finishResolution', _constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getLatestCheckin', [registrationId, dateTimeId]);
}
/**
 * Toggles the checkin state for the given registration id and datetime id.
 *
 * @param {number} registrationId
 * @param {number} dateTimeId
 * @param {boolean} force  If true, then whether the registration CAN be checked
 * in or not is ignored.
 * @return {BaseEntity|null} Null if there is an error or the new Checkin entity
 */

function* toggleCheckin(registrationId, dateTimeId) {
  let force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let checkInResponse;
  const path = `${(0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.getEndpoint)('registration')}/` + `${registrationId}/toggle_checkin_for_datetime/${dateTimeId}`;

  try {
    checkInResponse = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.fetch)({
      path,
      method: 'POST',
      data: {
        force
      }
    });
  } catch (error) {
    yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/notices', 'createErrorNotice', (0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Toggling the checkin failed. Usually this is due to the checkin not having access', 'event_espresso'));
    return null;
  }

  const factory = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.resolveSelect)(_schema_constants__WEBPACK_IMPORTED_MODULE_7__.REDUCER_KEY, 'getFactoryForModel', 'checkin');

  if (!(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__.isModelEntityFactoryOfModel)(factory, 'checkin')) {
    warning__WEBPACK_IMPORTED_MODULE_4___default()(false, 'The factory for the checkin model could not be retrieved.');
    return null;
  }

  const newCheckin = factory.fromExisting(checkInResponse);
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_5__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'receiveLatestCheckin', newCheckin, registrationId, dateTimeId);
  return newCheckin;
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/checkin/resolvers.js":
/*!***********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/checkin/resolvers.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLatestCheckin": function() { return /* binding */ getLatestCheckin; }
/* harmony export */ });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _schema_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../schema/constants */ "./assets/src/data/eventespresso/schema/constants.js");
/**
 * External imports
 */




/**
 * Internal imports
 */




/**
 * Resolver for the getLatestCheckin action.
 *
 * @param {number} registrationId
 * @param {number} dateTimeId
 * @return {BaseEntity|null} Null if there is an error or no checkin record.
 */

function* getLatestCheckin(registrationId, dateTimeId) {
  let checkInResponse;
  warning__WEBPACK_IMPORTED_MODULE_3___default()(!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(registrationId) && !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(dateTimeId), 'Both a registration id and datetime id are needed for getting the ' + 'latest checkin.');
  const path = `${(0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.getEndpoint)('checkin')}/` + `?where[REG_ID]=${registrationId}&where[DTT_ID]=${dateTimeId}` + '&order_by[CHK_timestamp]=DESC&limit=1';

  try {
    checkInResponse = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.fetch)({
      path,
      method: 'GET'
    });

    if ((0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(checkInResponse)) {
      // there is no checkin record yet!
      return null;
    }

    checkInResponse = checkInResponse.pop();
  } catch (error) {
    // @todo need to do something different when the user isn't authed and
    // this is the cause for the error?
    return null;
  }

  const factory = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveSelect)(_schema_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getFactoryForModel', 'checkin');

  if (!(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__.isModelEntityFactoryOfModel)(factory, 'checkin')) {
    warning__WEBPACK_IMPORTED_MODULE_3___default()(false, 'The factory for the checkin model could not be retrieved.');
    return null;
  }

  const newCheckin = factory.fromExisting(checkInResponse);
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_5__.REDUCER_KEY, 'receiveLatestCheckin', newCheckin, registrationId, dateTimeId);
  return newCheckin;
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/checkin/selectors.js":
/*!***********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/checkin/selectors.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLatestCheckin": function() { return /* binding */ getLatestCheckin; }
/* harmony export */ });
/* harmony import */ var _model_specific_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model-specific-selectors */ "./assets/src/data/eventespresso/core/model/model-specific-selectors.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../selectors */ "./assets/src/data/eventespresso/core/selectors/index.js");


/**
 * Gets the latest checkin entity in the state for the given value.
 *
 * @param {Object} state
 * @param {number} registrationId
 * @param {number} dateTimeId
 * @return {null|BaseEntity} The checkin entity if it exists or null.
 */

function getLatestCheckin(state, registrationId, dateTimeId) {
  const checkinId = (0,_model_specific_selectors__WEBPACK_IMPORTED_MODULE_0__.getSelectorValue)(state, 'getLatestCheckin', registrationId, dateTimeId);

  if (!checkinId) {
    return null;
  }

  return (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.getEntityById)(state, 'checkin', checkinId);
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/entity-actions.js":
/*!********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/entity-actions.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createActions": function() { return /* binding */ createActions; }
/* harmony export */ });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base-model */ "./assets/src/data/eventespresso/base-model.js");
/**
 * External import
 */

/**
 * Internal imports
 */


/**
 * Dynamic creation of actions for entities
 *
 * @param {Object} action The action object that dynamically created functions
 * will be mapped to.
 * @return {Object} The new action object containing functions for each model.
 */

const createActions = action => _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.MODEL_NAMES.reduce((actions, modelName) => {
  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, '', 'create')] = entity => action.createEntity(modelName, entity);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'byId', 'delete')] = entityId => action.deleteEntityById(modelName, entityId);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'byId', 'trash')] = entityId => action.trashEntityById(modelName, entityId);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'record', 'persist')] = entity => action.persistEntityRecord(modelName, entity);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'id', 'persistFor')] = entityId => action.persistForEntityId(modelName, entityId);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'ids', 'persistFor')] = entityIds => action.persistForEntityIds(modelName, entityIds);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, '', 'persistDeletesFor')] = () => action.persistDeletesForModel(modelName);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, '', 'persistTrashesFor')] = () => action.persistTrashesForModel(modelName);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'byId', 'remove')] = entityId => action.removeEntityById(modelName, entityId);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'id', 'removeDelete')] = entityId => action.removeDeleteEntityId(modelName, entityId);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'id', 'removeTrash')] = entityId => action.removeTrashEntityId(modelName, entityId);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'andResolve', 'receive', true)] = entities => action.receiveEntitiesAndResolve(modelName, entities);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'records', 'receiveAndReplace')] = entities => action.receiveAndReplaceEntityRecords(modelName, entities);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'id', 'receiveTrash')] = entityId => action.receiveTrashEntityId(modelName, entityId);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'id', 'receiveDelete')] = entityId => action.receiveDeleteEntityId(modelName, entityId);

  return actions;
}, {});

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/entity-resolvers.js":
/*!**********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/entity-resolvers.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createResolvers": function() { return /* binding */ createResolvers; }
/* harmony export */ });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base-model */ "./assets/src/data/eventespresso/base-model.js");
/**
 * External import
 */

/**
 * Internal imports
 */


/**
 * Dynamic creation of resolvers for entities
 *
 * @param {Object} resolver The resolver object that dynamically created
 * functions will be mapped to.
 * @return {Object} The new resolver object containing functions for each model.
 */

const createResolvers = resolver => _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.MODEL_NAMES.reduce((resolvers, modelName) => {
  resolvers[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'byId', 'get')] = entityId => resolver.getEntityById(modelName, entityId);

  return resolvers;
}, {});

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/entity-selectors.js":
/*!**********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/entity-selectors.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSelectors": function() { return /* binding */ createSelectors; }
/* harmony export */ });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base-model */ "./assets/src/data/eventespresso/base-model.js");
/**
 * External import
 */

/**
 * Internal imports
 */


/**
 * Dynamic creation of selectors for entities
 *
 * @param {Object} selector selector object that dynamically created functions
 * will be mapped to.
 * @return {Object} The new selector objects for each model.
 */

const createSelectors = selector => _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.MODEL_NAMES.reduce((selectors, modelName) => {
  selectors[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'records', 'get')] = state => selector.getEntityRecordsForModel(state, modelName);

  selectors[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, '', 'get', true)] = state => selector.getEntitiesForModel(state, modelName);

  selectors[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'byId', 'get')] = (state, entityId) => selector.getEntityById(state, modelName, entityId);

  selectors[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'byIds', 'get', true)] = (state, entityIds) => selector.getEntitiesByIds(state, modelName, entityIds);

  selectors[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'idsQueuedForTrash', 'get')] = state => selector.getEntityIdsQueuedForTrash(state, modelName);

  selectors[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'idsQueuedForDelete', 'get')] = state => selector.getEntityIdsQueuedForDelete(state, modelName);

  return selectors;
}, {});

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/index.js":
/*!***********************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actions": function() { return /* binding */ actions; },
/* harmony export */   "resolvers": function() { return /* binding */ resolvers; },
/* harmony export */   "selectors": function() { return /* binding */ selectors; }
/* harmony export */ });
/* harmony import */ var _entity_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity-actions */ "./assets/src/data/eventespresso/core/model/entity-actions.js");
/* harmony import */ var _entity_resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity-resolvers */ "./assets/src/data/eventespresso/core/model/entity-resolvers.js");
/* harmony import */ var _entity_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entity-selectors */ "./assets/src/data/eventespresso/core/model/entity-selectors.js");
/* harmony import */ var _relation_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./relation-actions */ "./assets/src/data/eventespresso/core/model/relation-actions.js");
/* harmony import */ var _relation_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relation-selectors */ "./assets/src/data/eventespresso/core/model/relation-selectors.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../selectors */ "./assets/src/data/eventespresso/core/selectors/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions */ "./assets/src/data/eventespresso/core/actions/index.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resolvers */ "./assets/src/data/eventespresso/core/resolvers/index.js");
/* harmony import */ var _model_actions_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model-actions-index */ "./assets/src/data/eventespresso/core/model/model-actions-index.js");
/* harmony import */ var _model_selectors_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model-selectors-index */ "./assets/src/data/eventespresso/core/model/model-selectors-index.js");
/* harmony import */ var _model_resolvers_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model-resolvers-index */ "./assets/src/data/eventespresso/core/model/model-resolvers-index.js");











const selectors = { ..._entity_selectors__WEBPACK_IMPORTED_MODULE_2__.createSelectors(_selectors__WEBPACK_IMPORTED_MODULE_5__),
  ..._relation_selectors__WEBPACK_IMPORTED_MODULE_4__.createSelectors(_selectors__WEBPACK_IMPORTED_MODULE_5__),
  ..._model_selectors_index__WEBPACK_IMPORTED_MODULE_9__
};
const actions = { ..._entity_actions__WEBPACK_IMPORTED_MODULE_0__.createActions(_actions__WEBPACK_IMPORTED_MODULE_6__),
  ..._relation_actions__WEBPACK_IMPORTED_MODULE_3__.createActions(_actions__WEBPACK_IMPORTED_MODULE_6__),
  ..._model_actions_index__WEBPACK_IMPORTED_MODULE_8__
};
const resolvers = { ..._entity_resolvers__WEBPACK_IMPORTED_MODULE_1__.createResolvers(_resolvers__WEBPACK_IMPORTED_MODULE_7__),
  ..._model_resolvers_index__WEBPACK_IMPORTED_MODULE_10__
};

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/model-actions-index.js":
/*!*************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/model-actions-index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "receiveLatestCheckin": function() { return /* reexport safe */ _checkin_actions__WEBPACK_IMPORTED_MODULE_1__.receiveLatestCheckin; },
/* harmony export */   "receiveSelectorValue": function() { return /* reexport safe */ _model_specific_actions__WEBPACK_IMPORTED_MODULE_0__.receiveSelectorValue; },
/* harmony export */   "toggleCheckin": function() { return /* reexport safe */ _checkin_actions__WEBPACK_IMPORTED_MODULE_1__.toggleCheckin; }
/* harmony export */ });
/* harmony import */ var _model_specific_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model-specific-actions */ "./assets/src/data/eventespresso/core/model/model-specific-actions.js");
/* harmony import */ var _checkin_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkin/actions */ "./assets/src/data/eventespresso/core/model/checkin/actions.js");



/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/model-resolvers-index.js":
/*!***************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/model-resolvers-index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLatestCheckin": function() { return /* reexport safe */ _checkin_resolvers__WEBPACK_IMPORTED_MODULE_0__.getLatestCheckin; }
/* harmony export */ });
/* harmony import */ var _checkin_resolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkin/resolvers */ "./assets/src/data/eventespresso/core/model/checkin/resolvers.js");


/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/model-selectors-index.js":
/*!***************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/model-selectors-index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLatestCheckin": function() { return /* reexport safe */ _checkin_selectors__WEBPACK_IMPORTED_MODULE_1__.getLatestCheckin; },
/* harmony export */   "getSelectorValue": function() { return /* reexport safe */ _model_specific_selectors__WEBPACK_IMPORTED_MODULE_0__.getSelectorValue; }
/* harmony export */ });
/* harmony import */ var _model_specific_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model-specific-selectors */ "./assets/src/data/eventespresso/core/model/model-specific-selectors.js");
/* harmony import */ var _checkin_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkin/selectors */ "./assets/src/data/eventespresso/core/model/checkin/selectors.js");



/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/model-specific-actions.js":
/*!****************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/model-specific-actions.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "receiveSelectorValue": function() { return /* binding */ receiveSelectorValue; }
/* harmony export */ });
/* harmony import */ var _actions_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");
/**
 * Internal imports
 */

const {
  modelSpecific: types
} = _actions_action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES;
/**
 * Action for adding the results of a specific selector and its value to the
 * state.
 *
 * @param {string} selector
 * @param {*} value
 * @param {Array} args
 * @return {Object} An action object
 */

function receiveSelectorValue(selector, value) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return {
    type: types.RECEIVE_SELECTOR_VALUE,
    selector,
    args,
    value
  };
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/model-specific-selectors.js":
/*!******************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/model-specific-selectors.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSelectorValue": function() { return /* binding */ getSelectorValue; }
/* harmony export */ });
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/es/rememo.js");
/**
 * External imports
 */

/**
 * Returns the value for the given selector and args in the current state.
 *
 * @type {*} Returns whatever the value was assigned to the state for the given
 * selector and its args.
 */

const getSelectorValue = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])(function (state, selector) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return state.modelSpecific.getIn([selector, JSON.stringify(args)]) || null;
}, function (state, selector) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return [state.modelSpecific.getIn([selector, JSON.stringify(args)])];
});

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/relation-actions.js":
/*!**********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/relation-actions.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createActions": function() { return /* binding */ createActions; }
/* harmony export */ });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base-model */ "./assets/src/data/eventespresso/base-model.js");
/**
 * External import
 */

/**
 * Internal imports
 */


/**
 * Dynamic creation of actions for relations
 *
 * @param {Object} action The action object that dynamically created functions
 * will be mapped to.
 * @return {Object} The new action object containing functions for each model
 * relation.
 */

const createActions = action => _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.MODEL_NAMES.reduce((actions, modelName) => {
  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'relation', 'create')] = (entityId, relationName, relationEntity) => action.createRelation(modelName, entityId, relationName, relationEntity);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'relations', 'create')] = (entityId, relationName, relationEntities) => action.createRelations(modelName, entityId, relationName, relationEntities);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'relationForAddition', 'removeDirty')] = (entityId, relationName, relationEntityId) => action.removeDirtyRelationForAddition(modelName, entityId, relationName, relationEntityId);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, '', 'removeRelationFor')] = (entityId, relationName, relationEntityId) => action.removeRelationForEntity(modelName, entityId, relationName, relationEntityId);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, '', 'persistAddRelationsFor')] = () => action.persistAddRelationsForModel(modelName);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, '', 'persistDeleteRelationsFor')] = () => action.persistDeleteRelationsForModel(modelName);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, '', 'persistRelationsFor')] = function () {
    let addRelation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    return action.persistRelationsForModel(modelName, addRelation);
  };

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'relationsForId', 'persist')] = function (entityId) {
    let addRelation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return action.persistRelationsForEntityId(modelName, entityId, addRelation);
  };

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'relationsForIdAndRelation', 'persist')] = function (entityId, relationName) {
    let addRelation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return action.persistRelationsForEntityIdAndRelation(modelName, entityId, relationName, addRelation);
  };

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'relationsForIdAndRelationId', 'persist')] = function (entityId, relationName, relationId) {
    let addRelation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    return action.persistRelationsForEntityIdAndRelationId(modelName, entityId, relationName, relationId, addRelation);
  };

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'id', 'receiveRelatedEntitiesFor')] = (entityId, relationName, relationEntityIds) => action.receiveRelatedEntities(modelName, entityId, relationName, relationEntityIds);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'id', 'receiveDirtyRelationAdditionFor')] = (relationName, relationId, entityId) => action.receiveDirtyRelationAddition(relationName, relationId, modelName, entityId);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'id', 'receiveDirtyRelationDeletionFor')] = (relationName, relationId, entityId) => action.receiveDirtyRelationDeletion(relationName, relationId, modelName, entityId);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'relations', 'receiveUpdatedEntityIdFor')] = (oldId, newId) => action.receiveUpdatedEntityIdForRelations(modelName, oldId, newId);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'id', 'removeAllRelatedEntitiesFor')] = entityId => action.removeAllRelatedEntitiesForModelEntity(modelName, entityId);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'idAndRelation', 'removeRelatedEntitiesFor')] = (entityId, relationName, relationIds) => action.removeRelatedEntities(modelName, entityId, relationName, relationIds);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'idAndRelation', 'removeDirtyRelationAdditionFor')] = (relationName, relationEntityId, entityId) => action.removeDirtyRelationAddition(relationName, relationEntityId, modelName, entityId);

  actions[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'idAndRelation', 'removeDirtyRelationDeletionFor')] = (relationName, relationEntityId, entityId) => action.removeDirtyRelationDeletion(relationName, relationEntityId, modelName, entityId);

  return actions;
}, {});

/***/ }),

/***/ "./assets/src/data/eventespresso/core/model/relation-selectors.js":
/*!************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/model/relation-selectors.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSelectors": function() { return /* binding */ createSelectors; }
/* harmony export */ });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base-model */ "./assets/src/data/eventespresso/base-model.js");
/**
 * External import
 */

/**
 * Internal imports
 */


/**
 * Dynamic creation of selectors for relations
 *
 * @param {Object} selector selector object that dynamically created functions
 * will be mapped to.
 * @return {Object} The new selector objects for each model relation.
 */

const createSelectors = selector => _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.MODEL_NAMES.reduce((selectors, modelName) => {
  selectors[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'additionRelations', 'getQueued')] = state => selector.getRelationAdditionsQueuedForModel(state, modelName);

  selectors[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'deleteRelations', 'getQueued')] = state => selector.getRelationDeletionsQueuedForModel(state, modelName);

  selectors[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'id', 'countRelationModelsIndexedFor')] = (state, entityId) => selector.countRelationModelsIndexedForEntity(state, modelName, entityId);

  return selectors;
}, {});

/***/ }),

/***/ "./assets/src/data/eventespresso/core/reducers/dirty-entities.js":
/*!***********************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/reducers/dirty-entities.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteEntity": function() { return /* binding */ deleteEntity; },
/* harmony export */   "trashEntity": function() { return /* binding */ trashEntity; }
/* harmony export */ });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");
/**
 * External imports
 */



/**
 * Internal imports.
 */


const {
  entities: types,
  resets: resetTypes
} = _actions_action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES;
/**
 * Handle adding incoming data to state.
 *
 * @param {Immutable.Map} state
 * @param {string} modelName
 * @param {number} entityId
 * @param {Immutable.Set} existingEntities
 * @return {Immutable.Map} New state.
 */

const addToState = (state, modelName, entityId, existingEntities) => {
  existingEntities = existingEntities.add(entityId);
  return state.set(modelName, existingEntities);
};
/**
 * Handle removing incoming data from state
 *
 * @param {Immutable.Map} state
 * @param {string} modelName
 * @param {number|string} entityId
 * @return {Immutable.Map} new state or existing state if no change.
 */


const removeFromState = (state, modelName, entityId) => {
  let entityIds = state.get(modelName, (0,immutable__WEBPACK_IMPORTED_MODULE_3__.Set)());

  if (!entityIds.includes(entityId)) {
    return state;
  }

  entityIds = entityIds.delete(entityId);
  return entityIds.isEmpty() ? state.delete(modelName) : state.set(modelName, entityIds);
};
/**
 * Processes the incoming action
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Either the existing state if no change or new state.
 */


const processAction = (state, action) => {
  const {
    type,
    modelName
  } = action;
  const entityId = (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.normalizeEntityId)(action.entityId);
  const existingEntities = state.get(modelName, (0,immutable__WEBPACK_IMPORTED_MODULE_3__.Set)());

  switch (type) {
    case types.RECEIVE_DELETE_ENTITY_ID:
    case types.RECEIVE_TRASH_ENTITY_ID:
      state = addToState(state, modelName, entityId, existingEntities);
      break;

    case types.REMOVE_DELETE_ENTITY_ID:
    case types.REMOVE_TRASH_ENTITY_ID:
      state = removeFromState(state, modelName, entityId);
      break;
  }

  return state;
};
/**
 * Reducer for queuing an entity for deletion in the state.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Existing or new state.
 */


function deleteEntity() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,immutable__WEBPACK_IMPORTED_MODULE_3__.fromJS)(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CORE_STATE.dirty["delete"]);
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.RECEIVE_DELETE_ENTITY_ID:
    case types.REMOVE_DELETE_ENTITY_ID:
      return processAction(state, action);

    case resetTypes.RESET_ALL_STATE:
      return (0,immutable__WEBPACK_IMPORTED_MODULE_3__.fromJS)(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CORE_STATE.dirty["delete"]);

    case resetTypes.RESET_STATE_FOR_MODEL:
      return state.delete((0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(action.modelName));
  }

  return state;
}
/**
 * Reducer for queueing the entity for trashing in the state.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Existing or new state.
 */

function trashEntity() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,immutable__WEBPACK_IMPORTED_MODULE_3__.fromJS)(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CORE_STATE.dirty.trash);
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.RECEIVE_TRASH_ENTITY_ID:
    case types.REMOVE_TRASH_ENTITY_ID:
      return processAction(state, action);

    case resetTypes.RESET_ALL_STATE:
      return (0,immutable__WEBPACK_IMPORTED_MODULE_3__.fromJS)(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CORE_STATE.dirty.trash);

    case resetTypes.RESET_STATE_FOR_MODEL:
      return state.delete((0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(action.modelName));
  }

  return state;
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/reducers/dirty-relations.js":
/*!************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/reducers/dirty-relations.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dirtyRelations": function() { return /* binding */ dirtyRelations; },
/* harmony export */   "removeRelatedEntitiesForEntity": function() { return /* binding */ removeRelatedEntitiesForEntity; },
/* harmony export */   "replaceOldRelationIdWithNewRelationId": function() { return /* binding */ replaceOldRelationIdWithNewRelationId; }
/* harmony export */ });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cuid */ "cuid");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_action_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");
/**
 * External imports
 */




/**
 * Internal imports.
 */


const {
  relations: types,
  resets: resetTypes
} = _actions_action_types__WEBPACK_IMPORTED_MODULE_3__.ACTION_TYPES;
/**
 * Used to determine whether the relation exists in the provided map.
 *
 * @param {Immutable.Map} relationMap
 * @param {string} queueType
 * @param {number} entityId
 * @return {boolean} True means the relation exists for the given entity Id
 * false means it does not exist.
 */

const relationExistsInMap = (relationMap, queueType, entityId) => {
  return relationMap.get(queueType, (0,immutable__WEBPACK_IMPORTED_MODULE_4__.Set)()).includes(entityId);
};
/**
 * Used to indicate whether the relation exists already in the state for the
 * given data.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @param {Immutable.Map} relationMap
 * @return {boolean} True means the relation exists in the state.
 */


const hasRelation = (state, action, relationMap) => {
  const {
    relationEntityId,
    entityId,
    queueType
  } = action;
  let {
    relationName,
    modelName
  } = action;

  if (relationExistsInMap(relationMap, queueType, entityId)) {
    return true;
  } // still here? Okay, let's do a reverse lookup then, where the relation may
  // be stored with the relation as the originating entity.


  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(relationName);
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(modelName);
  const entityIds = state.getIn([queueType, relationName, relationEntityId, modelName]);
  return entityIds ? entityIds.includes(entityId) : false;
};
/**
 * Retrieve the relation map from the index for the given data.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} A new map is returned if there isn't an existing map present.
 */


const getRelationMap = (state, action) => {
  const {
    relationName,
    relationEntityId: relationId,
    modelName
  } = action; // get the map for the queueType

  return state.getIn(['index', relationName, relationId, modelName]) || (0,immutable__WEBPACK_IMPORTED_MODULE_4__.Map)();
};
/**
 * Given a set of ids, this returns whether the given id exists in it.
 *
 * @param {number} entityId
 * @param {Immutable.Set} idSet
 * @return {boolean} True means it exists in the array.
 */


const idExistsInSet = (entityId, idSet) => {
  return idSet instanceof immutable__WEBPACK_IMPORTED_MODULE_4__.Set && idSet.includes(entityId);
};
/**
 * Reducer for adding to the relations index state.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @param {Immutable.Map} relationMap
 * @return {Immutable.Map}  Either existing state if no change or new state if change.
 */


function indexRelations(state, action, relationMap) {
  const {
    type,
    relationName,
    relationEntityId,
    modelName,
    entityId,
    queueType
  } = action;
  let entityIds = relationMap.get(queueType) || (0,immutable__WEBPACK_IMPORTED_MODULE_4__.Set)();
  const path = [relationName, relationEntityId, modelName, queueType];

  switch (type) {
    case types.RECEIVE_DIRTY_RELATION_ADDITION:
    case types.RECEIVE_DIRTY_RELATION_DELETION:
      if (idExistsInSet(entityId, entityIds)) {
        return state;
      }

      state = state.setIn(path, entityIds.add(entityId));
      break;

    case types.REMOVE_DIRTY_RELATION_ADDITION:
    case types.REMOVE_DIRTY_RELATION_DELETION:
      if (!idExistsInSet(entityId, entityIds)) {
        return state;
      }

      entityIds = entityIds.delete(entityId);

      if (entityIds.isEmpty()) {
        state = (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.removeEmptyFromState)(state, path, 0);
      } else {
        state = state.setIn(path, entityIds);
      }

      break;
  }

  return state;
}
/**
 * Retrieves relation ids from state for given data.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Set} A List of ids if present or empty List if not.
 */


function getRelationIdsFromState(state, action) {
  const {
    relationName,
    modelName,
    entityId
  } = action;
  const path = [modelName, entityId, relationName];
  return state.hasIn(path) ? state.getIn(path) : (0,immutable__WEBPACK_IMPORTED_MODULE_4__.Set)();
}
/**
 * Used to determine whether the state requires an update or not for the given
 * data.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @param {Immutable.Map} relationMap
 * @return {boolean} True indicates update is needed.
 */


function requiresUpdate(state, action, relationMap) {
  switch (action.type) {
    case types.RECEIVE_DIRTY_RELATION_ADDITION:
    case types.RECEIVE_DIRTY_RELATION_DELETION:
      return !hasRelation(state, action, relationMap);

    case types.REMOVE_DIRTY_RELATION_ADDITION:
    case types.REMOVE_DIRTY_RELATION_DELETION:
      return hasRelation(state, action, relationMap);
  }

  return false;
}
/**
 * Reducer for updating dirty relation state for given data.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @param {Immutable.Map} relationMap
 * @return {Immutable.Map} If no change original state is returned otherwise new state.
 */


function updateRelationState(state, action, relationMap) {
  const {
    type,
    relationName,
    relationEntityId,
    modelName,
    entityId,
    queueType
  } = action;
  const ids = relationMap.get(queueType) || (0,immutable__WEBPACK_IMPORTED_MODULE_4__.Set)();
  const path = [modelName, entityId, relationName];
  let relationIds;

  switch (type) {
    case types.RECEIVE_DIRTY_RELATION_ADDITION:
    case types.RECEIVE_DIRTY_RELATION_DELETION:
      if (idExistsInSet(entityId, ids)) {
        break;
      }

      relationIds = getRelationIdsFromState(state, action);

      if (relationIds.includes(relationEntityId)) {
        break;
      }

      state = state.setIn(path, relationIds.add(relationEntityId));
      break;

    case types.REMOVE_DIRTY_RELATION_ADDITION:
    case types.REMOVE_DIRTY_RELATION_DELETION:
      if (!idExistsInSet(entityId, ids)) {
        break;
      }

      relationIds = getRelationIdsFromState(state, action);

      if (!relationIds.includes(relationEntityId)) {
        break;
      }

      relationIds = relationIds.delete(relationEntityId);

      if (relationIds.isEmpty()) {
        state = (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.removeEmptyFromState)(state, path, 0);
      } else {
        state = state.setIn(path, relationIds);
      }

      break;
  }

  return state;
}
/**
 * Utility method assisting with replacing an old relation id for a new relation
 * id.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Either original or new state.
 */


function replaceOldRelationIdWithNewRelationId(state, action) {
  let {
    oldEntityId,
    newEntityId
  } = action;
  const {
    modelName
  } = action;
  oldEntityId = (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.normalizeEntityId)(oldEntityId);
  newEntityId = (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.normalizeEntityId)(newEntityId); // replacements in index

  let newState = replaceIds('index', state, modelName, oldEntityId, newEntityId);

  if (newState === state) {
    newState = replaceIds('delete', newState, modelName, oldEntityId, newEntityId);
  }

  if (newState === state) {
    newState = replaceIds('add', newState, modelName, oldEntityId, newEntityId);
  }

  return newState;
}
/**
 * Handles going through the provided state object and updating any occurrences
 * of the provided oldId for the provided model name with the new id.  This
 * mutates the incoming state so do not provide the original state from the
 * store.
 *
 * @param {string} stateProperty (what property for the state should be
 *   reviewed)
 * @param {Immutable.Map} state
 * @param {string} modelName
 * @param {number} oldId
 * @param {number} newId
 * @return {Immutable.Map} Returns either new state or existing state.
 */


const replaceIds = (stateProperty, state, modelName, oldId, newId) => {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(modelName);
  const mainPath = [stateProperty, modelName, oldId]; // first do top-level checks if it doesn't exist, bail.

  if (!state.hasIn(mainPath)) {
    return state;
  }

  const mainRecord = state.getIn(mainPath);
  state = state.deleteIn(mainPath).setIn([stateProperty, modelName, newId], mainRecord); // mainRecord provides the index to the other records needing updated.

  mainRecord.forEach((mapOrIds, relationModelName) => {
    const updateIds = (queueType, relationId) => {
      const relationPath = [queueType, relationModelName, relationId, modelName];
      let ids = state.getIn(relationPath) || (0,immutable__WEBPACK_IMPORTED_MODULE_4__.Set)();
      ids = ids.delete(oldId).add(newId);
      return state.setIn(relationPath, ids);
    };

    if (mapOrIds instanceof immutable__WEBPACK_IMPORTED_MODULE_4__.Map) {
      if (mapOrIds.has('add')) {
        mapOrIds.get('add').forEach(relationId => {
          state = updateIds('add', relationId);
        });
      }

      if (mapOrIds.has('delete')) {
        mapOrIds.get('delete').forEach(relationId => {
          state = updateIds('delete', relationId);
        });
      }
    } else if (mapOrIds instanceof immutable__WEBPACK_IMPORTED_MODULE_4__.Set) {
      const relationPath = ['index', relationModelName];
      mapOrIds.forEach(relationId => {
        let indexRecord = state.getIn([...relationPath, relationId, modelName]);
        let ids = indexRecord.get(stateProperty) || (0,immutable__WEBPACK_IMPORTED_MODULE_4__.Set)();
        ids = ids.delete(oldId).add(newId);
        indexRecord = indexRecord.set(stateProperty, ids);
        state = state.setIn([...relationPath, relationId, modelName], indexRecord);
      });
    }
  });
  return state;
};
/**
 * This ensures that for incoming relation state, relations are recorded in one
 * direction.  For example adding a relation for `event` to `datetime` and then
 * sometime later `datetime` to `event` for the same entities should result in
 * just a single record, not two.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Object} The action object to work with after normalization.
 */


const normalizeActionForState = (state, action) => {
  // normalizeIds
  action.entityId = (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.normalizeEntityId)(action.entityId);
  action.relationEntityId = (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.normalizeEntityId)(action.relationEntityId); // we only use index to help with normalization

  const index = state.get('index');
  const modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(action.modelName);
  const relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(action.relationName);
  const {
    relationEntityId,
    entityId
  } = action;

  if (modelName && relationName && index.has(modelName)) {
    // okay this model has already been used as a relation on another model
    // so let's normalize and make it the relation instead.
    return { ...action,
      modelName: relationName,
      entityId: relationEntityId,
      relationName: modelName,
      relationEntityId: entityId
    };
  } // we can return as is but lets normalize the incoming names


  return { ...action,
    modelName,
    relationName
  };
};
/**
 * Reducer for dirty relation state actions.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Returns original state if no changes, otherwise new state.
 */


function dirtyRelations(state, action) {
  action = normalizeActionForState(state, action);
  const {
    type
  } = action;
  const relationMap = getRelationMap(state, action); // does this even need an update?

  if (!requiresUpdate(state, action, relationMap)) {
    return state;
  }

  switch (type) {
    case types.RECEIVE_DIRTY_RELATION_ADDITION:
    case types.REMOVE_DIRTY_RELATION_ADDITION:
      state = state.set('index', indexRelations((0,immutable__WEBPACK_IMPORTED_MODULE_4__.Map)(state.get('index')), action, relationMap));
      return state.set('add', updateRelationState((0,immutable__WEBPACK_IMPORTED_MODULE_4__.Map)(state.get('add')), action, relationMap));

    case types.RECEIVE_DIRTY_RELATION_DELETION:
    case types.REMOVE_DIRTY_RELATION_DELETION:
      // if the relation or entity id is a cuid, then we skip this because
      // the relation has never been persisted anyways.
      if (cuid__WEBPACK_IMPORTED_MODULE_2___default().isCuid(action.relationEntityId) || cuid__WEBPACK_IMPORTED_MODULE_2___default().isCuid(action.entityId)) {
        return state;
      }

      state = state.set('index', indexRelations((0,immutable__WEBPACK_IMPORTED_MODULE_4__.Map)(state.get('index')), action, relationMap));
      return state.set('delete', updateRelationState((0,immutable__WEBPACK_IMPORTED_MODULE_4__.Map)(state.get('delete')), action, relationMap));
  }

  return state;
}
/**
 * Utility function for removing entity id in the state for a given modelName
 * which may exist as a relation in the state.
 *
 * @param {Immutable.Map} state Immutable collection
 * @param {Object} modelData An object containing data for use in the function.
 * @return {Immutable.Map} Immutable collection  either the original state or a new state.
 */


const clearRelatedEntitiesForEntity = (state, modelData) => {
  const {
    modelRemoved,
    entityIdRemoved,
    indexType,
    relationTypes
  } = modelData;
  const recordPath = [indexType, modelRemoved, entityIdRemoved];

  const clearEntityIdsInPath = (subState, path) => {
    if (subState.hasIn(path)) {
      let entityIds = subState.getIn(path) || (0,immutable__WEBPACK_IMPORTED_MODULE_4__.Set)();
      entityIds = entityIds.delete(entityIdRemoved);

      if (!entityIds.isEmpty()) {
        subState.setIn(path, entityIds);
      } else {
        (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.removeEmptyFromState)(subState, path, 1, false);
      }
    }
  };

  if (state.hasIn(recordPath)) {
    state = state.withMutations(subState => {
      const mainRecord = subState.getIn(recordPath);
      (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.removeEmptyFromState)(subState, recordPath, 1, false);
      mainRecord.forEach((relationRecord, relationModelName) => {
        if (relationRecord instanceof immutable__WEBPACK_IMPORTED_MODULE_4__.Set) {
          relationRecord.forEach(relationId => {
            clearEntityIdsInPath(subState, ['index', relationModelName, relationId, modelRemoved, indexType]);
          });
        } else if (relationTypes !== null && relationRecord instanceof immutable__WEBPACK_IMPORTED_MODULE_4__.Map) {
          relationTypes.forEach(relationType => {
            if (relationRecord.has(relationType)) {
              const relationIds = relationRecord.get(relationType) || (0,immutable__WEBPACK_IMPORTED_MODULE_4__.Set)();
              relationIds.forEach(relationId => {
                clearEntityIdsInPath(subState, [relationType, relationModelName, relationId, modelRemoved]);
              });
            }
          });
        }
      });
    });
  }

  return state;
};
/**
 * Handles removing all relationships in the dirty relations state for the given
 * action object (containing modelName and entityId)
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Either the original state or new state if it was updated.
 */


function removeRelatedEntitiesForEntity(state, action) {
  const modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(action.modelName);
  const entityId = (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.normalizeEntityId)(action.entityId);
  [[modelName, entityId, 'index', ['add', 'delete']], [modelName, entityId, 'add'], [modelName, entityId, 'delete']].forEach(_ref => {
    let [modelRemoved, entityIdRemoved, indexType, relationTypes = null] = _ref;
    state = clearRelatedEntitiesForEntity(state, {
      modelRemoved,
      entityIdRemoved,
      indexType,
      relationTypes
    });
  });
  return state;
}
/**
 * Handles clearing the given model from the state.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 *
 * @return {Immutable.Map} New state.
 */


const clearStateForModel = (state, action) => {
  const modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(action.modelName); // index record path

  state = clearModelFromSubstate(state, 'index', modelName); // delete record path

  state = clearModelFromSubstate(state, 'delete', modelName); // add record path

  state = clearModelFromSubstate(state, 'add', modelName);
  return state;
};
/**
 * For the given arguments clears the model from the substate on the given state
 * for the given substate key.
 *
 * @param {Immutable.Map} state
 * @param {string} subStateKey
 * @param {string} modelName
 * @return {Immutable.Map} The new state.
 */


const clearModelFromSubstate = (state, subStateKey, modelName) => {
  state = state.deleteIn([subStateKey, modelName]);
  let subState = state.get(subStateKey);
  subState = subState.withMutations(mutatedState => {
    state.get(subStateKey).forEach((entityMaps, relationName) => {
      entityMaps.forEach((modelMap, relationEntityId) => {
        const deletePath = [relationName, relationEntityId, modelName];
        mutatedState.deleteIn(deletePath);
        (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.removeEmptyFromState)(mutatedState, deletePath, 1, false);
      });
    });
  });
  state = state.set(subStateKey, subState);
  return state;
};
/**
 * exports useful for testing.
 */



/**
 * Default reducer for handling dirty relation state.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Returns original state if no changes, otherwise new state.
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,immutable__WEBPACK_IMPORTED_MODULE_4__.fromJS)(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CORE_STATE.dirty.relations);
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.RECEIVE_UPDATED_ENTITY_ID_FOR_RELATIONS:
      return replaceOldRelationIdWithNewRelationId(state, action);

    case types.REMOVE_RELATED_ENTITIES_FOR_ENTITY:
      return removeRelatedEntitiesForEntity(state, action);

    case resetTypes.RESET_ALL_STATE:
      return (0,immutable__WEBPACK_IMPORTED_MODULE_4__.fromJS)(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CORE_STATE.dirty.relations);

    case resetTypes.RESET_STATE_FOR_MODEL:
      return clearStateForModel(state, action);

    case types.RECEIVE_DIRTY_RELATION_ADDITION:
    case types.REMOVE_DIRTY_RELATION_ADDITION:
    case types.RECEIVE_DIRTY_RELATION_DELETION:
    case types.REMOVE_DIRTY_RELATION_DELETION:
      return dirtyRelations(state, action);
  }

  return state;
});

/***/ }),

/***/ "./assets/src/data/eventespresso/core/reducers/dirty.js":
/*!**************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/reducers/dirty.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dirty_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dirty-entities */ "./assets/src/data/eventespresso/core/reducers/dirty-entities.js");
/* harmony import */ var _dirty_relations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dirty-relations */ "./assets/src/data/eventespresso/core/reducers/dirty-relations.js");
/**
 * External imports
 */

/**
 * Internal imports
 */



/**
 * The root state ('delete', 'trash', relations') is a plain object, but the
 * slices are immutable Maps).
 */

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  delete: _dirty_entities__WEBPACK_IMPORTED_MODULE_1__.deleteEntity,
  trash: _dirty_entities__WEBPACK_IMPORTED_MODULE_1__.trashEntity,
  relations: _dirty_relations__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./assets/src/data/eventespresso/core/reducers/entities.js":
/*!*****************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/reducers/entities.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ entities; },
/* harmony export */   "receiveEntity": function() { return /* binding */ receiveEntity; },
/* harmony export */   "receiveEntityRecords": function() { return /* binding */ receiveEntityRecords; },
/* harmony export */   "removeEntityById": function() { return /* binding */ removeEntityById; }
/* harmony export */ });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_action_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");
/**
 * External imports
 */





/**
 * Internal imports
 */


const {
  entities: types,
  resets: resetTypes
} = _actions_action_types__WEBPACK_IMPORTED_MODULE_4__.ACTION_TYPES;
/**
 * This replaces any entities in the incoming object with matching entities (by
 * id) in the state (if they exist).
 *
 * @param {Immutable.Map} state
 * @param {string} modelName
 * @param {Immutable.Map} entityRecords
 * @return {Immutable.Map} New entityRecords object.
 */

const replaceExistingEntitiesFromState = (state, modelName, entityRecords) => {
  const existingEntities = state.get(modelName, null);

  if (existingEntities === null) {
    return entityRecords;
  }

  return entityRecords.merge(existingEntities);
};
/**
 * Reducer for receiving an entity into the state.
 *
 * This does not replace any entity that already exists in the state.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} New state if there is a change otherwise existing state.
 */


function receiveEntity(state, action) {
  /**
   * @type {string} modelName
   * @type {BaseEntity|null} entity
   */
  const {
    entity
  } = action;

  if (!(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__.isModelEntity)(entity) || state.hasIn([entity.modelName, entity.id])) {
    return state;
  }

  return state.setIn([entity.modelName, entity.id], entity);
}
/**
 * A reducer returning the new state for action.
 *
 * Handles receiving entity records from a rest response and converting them to
 * model entities using the provided factory.
 *
 * It is expected that the incoming entity records are an array of BaseEntity
 * children instances.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} The new state (or the original if no
 * change detected or action isn't handled by this method)
 */


function receiveEntityRecords(state, action) {
  const {
    type,
    modelName
  } = action; // convert from array of entities to a Map indexed by entity id.

  const incomingEntities = (0,immutable__WEBPACK_IMPORTED_MODULE_5__.Map)().withMutations(subState => {
    action.entities.forEach(entity => {
      if ((0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__.isModelEntityOfModel)(entity, modelName)) {
        subState.set(entity.id, entity);
      }
    });
  });

  if (!state.has(modelName) || incomingEntities.isEmpty()) {
    return state;
  }

  let updateState = false,
      entityRecords;

  switch (type) {
    case types.RECEIVE_ENTITY_RECORDS:
      // if all incoming keys exist in state already then we don't do
      // anything
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.difference)(Array.from(incomingEntities.keys()), Array.from(state.get(modelName, (0,immutable__WEBPACK_IMPORTED_MODULE_5__.Map)()).keys())))) {
        break;
      } // replace any incoming entityRecords with existing entityRecords already
      // in the store so this registry acts as the "authority"
      // for entityRecords.


      entityRecords = replaceExistingEntitiesFromState(state, modelName, incomingEntities);
      updateState = true;
      break;

    case types.RECEIVE_AND_REPLACE_ENTITY_RECORDS:
      updateState = true;
      entityRecords = state.get(modelName, (0,immutable__WEBPACK_IMPORTED_MODULE_5__.Map)()).merge(incomingEntities);
      break;
  }

  if (updateState) {
    return state.set(modelName, entityRecords);
  }

  return state;
}
/**
 * A reducer handling the removal of an entity from state matching the given
 * id.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} New or existing state.
 */


function removeEntityById(state, action) {
  const {
    modelName,
    entityId = 0
  } = action;
  const id = (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_3__.normalizeEntityId)(entityId);
  return state.deleteIn([modelName, id]);
}
/**
 * Exports useful for tests.
 */



/**
 * Default reducer for handling entities in state.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} New or existing state
 */

function entities() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,immutable__WEBPACK_IMPORTED_MODULE_5__.fromJS)(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_CORE_STATE.entities);
  let action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type) {
    switch (action.type) {
      case types.RECEIVE_ENTITY_RECORDS:
      case types.RECEIVE_AND_REPLACE_ENTITY_RECORDS:
        return receiveEntityRecords(state, action);

      case types.RECEIVE_ENTITY:
        return receiveEntity(state, action);

      case types.REMOVE_ENTITY_BY_ID:
        return removeEntityById(state, action);

      case resetTypes.RESET_ALL_STATE:
        return (0,immutable__WEBPACK_IMPORTED_MODULE_5__.fromJS)(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_CORE_STATE.entities);

      case resetTypes.RESET_STATE_FOR_MODEL:
        return state.has((0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(action.modelName)) ? state.set((0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(action.modelName), (0,immutable__WEBPACK_IMPORTED_MODULE_5__.Map)()) : state;
    }
  }

  return state;
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/reducers/index.js":
/*!**************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/reducers/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities */ "./assets/src/data/eventespresso/core/reducers/entities.js");
/* harmony import */ var _relations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relations */ "./assets/src/data/eventespresso/core/reducers/relations.js");
/* harmony import */ var _dirty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dirty */ "./assets/src/data/eventespresso/core/reducers/dirty.js");
/* harmony import */ var _model_specific_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model-specific-reducers */ "./assets/src/data/eventespresso/core/reducers/model-specific-reducers.js");
/**
 * External imports
 */

/**
 * Internal imports
 */





/**
 * Reducers for entities, relations and dirty state.
 *
 * Be aware that the root state is a plain object but the slices (entities,
 * relations, dirty) are immutable Maps.
 */

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  entities: _entities__WEBPACK_IMPORTED_MODULE_1__["default"],
  relations: _relations__WEBPACK_IMPORTED_MODULE_2__["default"],
  dirty: _dirty__WEBPACK_IMPORTED_MODULE_3__["default"],
  modelSpecific: _model_specific_reducers__WEBPACK_IMPORTED_MODULE_4__["default"]
}));

/***/ }),

/***/ "./assets/src/data/eventespresso/core/reducers/model-specific-reducers.js":
/*!********************************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/reducers/model-specific-reducers.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handleReceiveSelector; }
/* harmony export */ });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _actions_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");
/**
 * External imports
 */


const {
  modelSpecific: types,
  resets: resetTypes
} = _actions_action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES;
/**
 * Handle receiving a model specific selector record into the state.
 *
 * @param {Map} state
 * @param {Object} action
 * @return {Map} New or existing state.
 */

function handleReceiveSelector() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,immutable__WEBPACK_IMPORTED_MODULE_1__.Map)();
  let action = arguments.length > 1 ? arguments[1] : undefined;
  const {
    type,
    selector,
    args,
    value
  } = action;

  switch (type) {
    case types.RECEIVE_SELECTOR_VALUE:
      return state.setIn([selector, JSON.stringify(args)], value);

    case resetTypes.RESET_ALL_MODEL_SPECIFIC:
    case resetTypes.RESET_ALL_STATE:
      return (0,immutable__WEBPACK_IMPORTED_MODULE_1__.Map)();

    case resetTypes.RESET_MODEL_SPECIFIC_FOR_SELECTOR:
      return state.delete(selector);

    case resetTypes.RESET_MODEL_SPECIFIC_FOR_SELECTOR_AND_ARGS:
      return state.deleteIn([selector, JSON.stringify(args)]);
  }

  return state;
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/reducers/relations.js":
/*!******************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/reducers/relations.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ relations; },
/* harmony export */   "normalizedReceiveAndRemoveRelations": function() { return /* binding */ normalizedReceiveAndRemoveRelations; },
/* harmony export */   "removeRelatedEntitiesForEntity": function() { return /* binding */ removeRelatedEntitiesForEntity; },
/* harmony export */   "updateEntityIdForRelations": function() { return /* binding */ updateEntityIdForRelations; }
/* harmony export */ });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _actions_action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/action-types */ "./assets/src/data/eventespresso/core/actions/action-types.js");
/**
 * External imports.
 */



/**
 * Internal Imports
 */


const {
  relations: types,
  resets: resetTypes
} = _actions_action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES;
/**
 * Handles normalizing the incoming action so that we're always only receiving
 * relation data in the state oriented from one direction.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Existing or new state.
 */

const normalizedReceiveAndRemoveRelations = (state, action) => {
  // first normalize the action
  action = { ...action,
    modelName: (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(action.modelName),
    relationName: (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(action.relationName),
    entityId: (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.normalizeEntityId)(action.entityId)
  };
  const {
    modelName,
    relationName,
    relatedEntityIds,
    entityId
  } = action; // add to state from the context of the model

  state = receiveAndRemoveRelations(state, action); // add to state from the context of the relation

  const newAction = { ...action,
    modelName: (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(relationName),
    relationName: (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(modelName),
    relatedEntityIds: [entityId]
  };

  while (relatedEntityIds.length > 0) {
    newAction.entityId = (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.normalizeEntityId)(relatedEntityIds.pop());
    state = receiveAndRemoveRelations(state, newAction);
  }

  return state;
};
/**
 * Reducer for the relations state in the store.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Either a new state or the existing state.
 */


function receiveAndRemoveRelations(state, action) {
  const {
    modelName,
    relationName,
    entityId,
    type
  } = action;
  const relationEntityIds = (0,immutable__WEBPACK_IMPORTED_MODULE_3__.Set)(action.relatedEntityIds);
  const path = [modelName, entityId, relationName];
  const existingIds = state.getIn(path, (0,immutable__WEBPACK_IMPORTED_MODULE_3__.Set)());

  switch (type) {
    case types.RECEIVE_RELATED_ENTITY_IDS:
      return state.setIn(path, existingIds.concat(relationEntityIds));

    case types.REMOVE_RELATED_ENTITY_IDS:
      const idsAfterRemoval = existingIds.filter(id => !relationEntityIds.keyOf((0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.normalizeEntityId)(id))); // Immutable.Set().filter() returns new instance, so let's compare
      // size

      if (idsAfterRemoval.count() === existingIds.count()) {
        return state;
      }

      return !idsAfterRemoval.isEmpty() ? state.setIn(path, idsAfterRemoval) : (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.removeEmptyFromState)(state, path);
  }

  return state;
}
/**
 * Reducer for handling entity ids in the relation that have a cuid that has
 * been updated with a new entity id from the server.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Either new or original state
 */


function updateEntityIdForRelations(state, action) {
  let {
    oldEntityId,
    newEntityId,
    modelName
  } = action;
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(modelName);
  oldEntityId = (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.normalizeEntityId)(oldEntityId);
  newEntityId = (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.normalizeEntityId)(newEntityId); // from context of modelName

  const modelRecordToReplace = state.getIn([modelName, oldEntityId], (0,immutable__WEBPACK_IMPORTED_MODULE_3__.Map)());

  if (!modelRecordToReplace.isEmpty()) {
    state = replaceRelationRecords(state, {
      modelName,
      oldEntityId,
      newEntityId,
      mainRecordToReplace: modelRecordToReplace
    });
  }

  return state;
}
/**
 * Utility method for handling replacing the old entity id from incoming model
 * with the provided new id data (or just removing it if removeOnly is true)
 * This handles both the index and entityMap objects in the relations state.
 *
 * @param {Immutable.Map} state
 * @param {Object} modelData
 * @param {boolean} removeOnly If true, then the value for oldEntityId will be
 * removed from state and newEntity will not be added to state.
 * @return {Immutable.Map} Returns either new or existing state.
 */


const replaceRelationRecords = function (state, modelData) {
  let removeOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const {
    modelName,
    oldEntityId,
    newEntityId = 0,
    mainRecordToReplace
  } = modelData; // first from context of model

  const mainPath = [modelName, oldEntityId];
  state = state.withMutations(subState => {
    subState.deleteIn(mainPath);
    mainPath.pop();

    if (removeOnly) {
      if (subState.getIn(mainPath).isEmpty()) {
        subState.deleteIn(mainPath);
      }
    } else {
      subState.setIn([...mainPath, newEntityId], mainRecordToReplace);
    }
  }); // now we loop through the relations on the main record and use that to
  // change the values in the relation states.

  mainRecordToReplace.forEach((relationIds, relationName) => {
    relationIds = relationIds.toArray();
    state = state.withMutations(subState => {
      while (relationIds.length > 0) {
        const relationPath = [(0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(relationName), relationIds.pop(), (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(modelName)];
        let relationRecord = subState.getIn(relationPath, (0,immutable__WEBPACK_IMPORTED_MODULE_3__.Set)());
        relationRecord = relationRecord.delete(oldEntityId);

        if (removeOnly && relationRecord.isEmpty()) {
          (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.removeEmptyFromState)(subState, relationPath, 1, false);
        } else {
          relationRecord = removeOnly ? relationRecord : relationRecord.add(newEntityId);
          subState.setIn(relationPath, relationRecord);
        }
      }
    });
  });
  return state;
};
/**
 * Removes any relation requests for related entities in the state.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} either existing (if no changes) or new state.
 */


const removeRelatedEntitiesForEntity = (state, action) => {
  let {
    modelName,
    entityId
  } = action;
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(modelName);
  entityId = (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.normalizeEntityId)(entityId);
  const modelRecordToReplace = state.getIn([modelName, entityId], (0,immutable__WEBPACK_IMPORTED_MODULE_3__.Map)());

  if (!modelRecordToReplace.isEmpty()) {
    state = replaceRelationRecords(state, {
      modelName,
      oldEntityId: entityId,
      mainRecordToReplace: modelRecordToReplace
    }, true);
  }

  return state;
};
/**
 * Handles resetting the state for the given modelName in the action.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 *
 * @return {Immutable.Map} The new (or existing if no changes) state.
 */


const resetStateForModel = (state, action) => {
  const modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(action.modelName); // get the relations for the model

  const modelRelations = state.get(modelName, (0,immutable__WEBPACK_IMPORTED_MODULE_3__.Map)());

  if (!modelRelations.isEmpty()) {
    // delete the modelName form the state
    state = state.delete(modelName); // loop through the relations and delete

    state = state.withMutations(subState => {
      modelRelations.forEach(relationState => {
        relationState.forEach((relationIds, relationName) => {
          relationIds = relationIds.toArray();

          while (relationIds.length > 0) {
            const relationPath = [(0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(relationName), relationIds.pop()];
            let relationRecord = subState.getIn(relationPath, (0,immutable__WEBPACK_IMPORTED_MODULE_3__.Map)());
            relationRecord = relationRecord.delete(modelName);

            if (relationRecord.isEmpty()) {
              (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.removeEmptyFromState)(subState, relationPath, 0, false);
            } else {
              subState.setIn(relationPath, relationRecord);
            }
          }
        });
      });
    });
  }

  return state;
};
/**
 * export for tests
 */



/**
 * Reducer for relation related state changes.
 *
 * @param {Immutable.Map} state
 * @param {Object} action
 * @return {Immutable.Map} Original state if no change, new state if change.
 */

function relations() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,immutable__WEBPACK_IMPORTED_MODULE_3__.fromJS)(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CORE_STATE.relations);
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.RECEIVE_RELATED_ENTITY_IDS:
    case types.REMOVE_RELATED_ENTITY_IDS:
      return normalizedReceiveAndRemoveRelations(state, action);

    case types.RECEIVE_UPDATED_ENTITY_ID_FOR_RELATIONS:
      return updateEntityIdForRelations(state, action);

    case types.REMOVE_RELATED_ENTITIES_FOR_ENTITY:
      return removeRelatedEntitiesForEntity(state, action);

    case resetTypes.RESET_ALL_STATE:
      return (0,immutable__WEBPACK_IMPORTED_MODULE_3__.fromJS)(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CORE_STATE.relations);

    case resetTypes.RESET_STATE_FOR_MODEL:
      return resetStateForModel(state, action);
  }

  return state;
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/resolvers/entities.js":
/*!******************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/resolvers/entities.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEntityById": function() { return /* binding */ getEntityById; }
/* harmony export */ });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../actions */ "./assets/src/data/eventespresso/core/actions/index.js");
/* harmony import */ var _schema_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../schema/constants */ "./assets/src/data/eventespresso/schema/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./assets/src/data/eventespresso/core/resolvers/utils.js");
/**
 * External imports
 */


/**
 * Internal Imports
 */





/**
 * A resolver for getting an entity for the given model name and entity id.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {Array} calculatedFields
 * @return {null|BaseEntity} If successfully retrieved, the entity,
 * otherwise null.
 */

function* getEntityById(modelName, entityId) {
  let calculatedFields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(modelName);
  let path = `${(0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.getEndpoint)(modelName)}/${entityId}`;
  path = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.appendCalculatedFieldsToPath)(path, calculatedFields);
  const entity = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_2__.fetch)({
    path
  });
  const factory = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_2__.resolveSelect)(_schema_constants__WEBPACK_IMPORTED_MODULE_4__.REDUCER_KEY, 'getFactoryForModel', modelName);

  if (!(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__.isModelEntityFactoryOfModel)(factory, modelName)) {
    return null;
  }

  const fullEntity = factory.fromExisting(entity);
  yield (0,_actions__WEBPACK_IMPORTED_MODULE_3__.receiveEntityRecords)(modelName, [fullEntity]);
  return fullEntity;
}

/***/ }),

/***/ "./assets/src/data/eventespresso/core/resolvers/index.js":
/*!***************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/resolvers/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEntityById": function() { return /* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_0__.getEntityById; },
/* harmony export */   "getRelatedEntities": function() { return /* reexport safe */ _relations__WEBPACK_IMPORTED_MODULE_1__.getRelatedEntities; },
/* harmony export */   "getRelatedEntitiesForIds": function() { return /* reexport safe */ _relations__WEBPACK_IMPORTED_MODULE_1__.getRelatedEntitiesForIds; }
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities */ "./assets/src/data/eventespresso/core/resolvers/entities.js");
/* harmony import */ var _relations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relations */ "./assets/src/data/eventespresso/core/resolvers/relations.js");



/***/ }),

/***/ "./assets/src/data/eventespresso/core/resolvers/relations.js":
/*!*******************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/resolvers/relations.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRelatedEntities": function() { return /* binding */ getRelatedEntities; },
/* harmony export */   "getRelatedEntitiesForIds": function() { return /* binding */ getRelatedEntitiesForIds; }
/* harmony export */ });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../actions */ "./assets/src/data/eventespresso/core/actions/index.js");
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../base-model */ "./assets/src/data/eventespresso/base-model.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _schema_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../schema/constants */ "./assets/src/data/eventespresso/schema/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./assets/src/data/eventespresso/core/resolvers/utils.js");
/**
 * External imports
 */







/**
 * Internal Imports
 */







const DEFAULT_EMPTY_ARRAY = [];
/**
 * A resolver for getting relation entities for the given model name and entity
 * for that model.
 *
 * @param {BaseEntity} entity
 * @param {string} relationModelName
 * @param {Array} calculatedFields
 * @return {[]|Array<BaseEntity>} If there are relations, returns an array of
 * BaseEntity instances for the relations, otherwise an empty array.
 */

function* getRelatedEntities(entity, relationModelName) {
  let calculatedFields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (!(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__.isModelEntity)(entity)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__.InvalidModelEntity('', entity);
  } // if entity is new then there won't be any relations for it on the server
  // yet, so let's just return early.


  if (entity.isNew) {
    return DEFAULT_EMPTY_ARRAY;
  }

  relationModelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(relationModelName);
  const pluralRelationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.pluralModelName)(relationModelName);
  const modelName = entity.modelName.toLowerCase();
  const relationResourceProperty = pluralRelationName + 'Resource';
  const relationEndpoint = entity[relationResourceProperty] ? (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.stripBaseRouteFromUrl)(entity[relationResourceProperty].resourceLink) : '';

  if (relationEndpoint === '') {
    warning__WEBPACK_IMPORTED_MODULE_3___default()(false, (0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.sprintf)('There is no relation resource for the given model (%s) and requested relation (%s)', modelName, pluralRelationName));
    return DEFAULT_EMPTY_ARRAY;
  }

  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_6__.dispatch)(_schema_constants__WEBPACK_IMPORTED_MODULE_10__.REDUCER_KEY, 'receiveRelationEndpointForModelEntity', modelName, entity.id, relationModelName, relationEndpoint);
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_6__.dispatch)('core/data', 'finishResolution', _schema_constants__WEBPACK_IMPORTED_MODULE_10__.REDUCER_KEY, 'receiveRelationEndpointForModelEntity', [modelName, entity.id, relationModelName, relationEndpoint]); // add calculatedFields to endpoint?

  const path = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.appendCalculatedFieldsToPath)(relationEndpoint, calculatedFields);
  let relationEntities = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_6__.fetch)({
    path
  });
  relationEntities = !(0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(relationEntities) ? relationEntities : DEFAULT_EMPTY_ARRAY;
  relationEntities = !(0,lodash__WEBPACK_IMPORTED_MODULE_4__.isArray)(relationEntities) ? [relationEntities] : relationEntities;

  if (!relationEntities.length) {
    return relationEntities;
  }

  const factory = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_6__.resolveSelect)(_schema_constants__WEBPACK_IMPORTED_MODULE_10__.REDUCER_KEY, 'getFactoryForModel', relationModelName);

  if (!(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__.isModelEntityFactoryOfModel)(factory, relationModelName)) {
    return DEFAULT_EMPTY_ARRAY;
  }

  let fullEntities = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.keyEntitiesByPrimaryKeyValue)(relationModelName, relationEntities);
  fullEntities = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.createAndKeyEntitiesByPrimaryKeyValue)(factory, fullEntities);
  const entityIds = Array.from(fullEntities.keys()); // are there already entities for the ids in the store? If so...we use
  // those.

  const existingEntities = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_6__.select)(_constants__WEBPACK_IMPORTED_MODULE_9__.REDUCER_KEY, 'getEntitiesByIds', relationModelName, entityIds);

  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(existingEntities)) {
    fullEntities = (0,_base_model__WEBPACK_IMPORTED_MODULE_8__.keepExistingEntitiesInObject)(existingEntities.reduce((entitiesObject, entityObj) => {
      entitiesObject[entityObj.id] = entity;
      return entitiesObject;
    }, {}), fullEntities);
  } // if fullEntities is not a map, then we need to make it a map


  const entityArray = fullEntities instanceof Map ? Array.from(fullEntities.values()) : fullEntities;
  yield (0,_actions__WEBPACK_IMPORTED_MODULE_7__.receiveEntityRecords)(relationModelName, entityArray);
  yield (0,_actions__WEBPACK_IMPORTED_MODULE_7__.receiveRelatedEntities)(modelName, entity.id, relationModelName, entityIds);
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_6__.resolveGetRelatedEntities)(entity, fullEntities, entityIds);
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_6__.resolveGetEntityByIdForIds)(relationModelName, entityIds);
  return entityArray;
}
/**
 * Resolver for the getRelatedEntitiesForIds selector
 *
 * @param {string} modelName
 * @param {Array<number>} entityIds
 * @param {string} relationName
 * @param {Array} calculatedFields  This will retrieve any named calculated
 * fields for the related entities.
 *
 * @return {Array|undefined} If there is no schema for the relation, an
 * empty array is returned.
 */

function* getRelatedEntitiesForIds(modelName, entityIds, relationName) {
  let calculatedFields = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(relationName);
  const hasJoinTable = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_6__.resolveSelect)(_schema_constants__WEBPACK_IMPORTED_MODULE_10__.REDUCER_KEY, 'hasJoinTableRelation', modelName, relationName);
  const relationSchema = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_6__.resolveSelect)(_schema_constants__WEBPACK_IMPORTED_MODULE_10__.REDUCER_KEY, 'getRelationSchema', modelName, relationName);

  if (relationSchema === null) {
    return DEFAULT_EMPTY_ARRAY;
  }

  const relationType = relationSchema.relation_type;
  const factory = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_6__.resolveSelect)(_schema_constants__WEBPACK_IMPORTED_MODULE_10__.REDUCER_KEY, 'getFactoryForModel', relationName);
  const response = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_6__.fetch)({
    path: getRelationRequestUrl(modelName, entityIds, relationName, relationSchema, relationType, hasJoinTable, calculatedFields)
  });

  if (!response.length) {
    return DEFAULT_EMPTY_ARRAY;
  }

  const relationPrimaryKey = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.getPrimaryKey)(relationName);
  const modelPrimaryKey = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.getPrimaryKey)(modelName);
  const pluralRelationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.pluralModelName)(relationName);
  let hasSetMap = (0,immutable__WEBPACK_IMPORTED_MODULE_12__.Map)();

  if (hasJoinTable) {
    while (response.length > 0) {
      const record = response.pop();
      let relationRecords = record[pluralRelationName] || null;
      relationRecords = relationRecords === null && !(0,lodash__WEBPACK_IMPORTED_MODULE_4__.isUndefined)(record[relationName]) ? record[relationName] : relationRecords;
      relationRecords = relationRecords !== null && !(0,lodash__WEBPACK_IMPORTED_MODULE_4__.isArray)(relationRecords) ? [relationRecords] : relationRecords;

      if (relationRecords !== null) {
        while (relationRecords.length > 0) {
          const modelId = record[modelPrimaryKey];
          const relationId = record[relationPrimaryKey];
          const relationRecord = relationRecords.pop();

          if (relationRecord !== null && !hasSetMap.hasIn([modelId, relationId])) {
            const relationEntity = factory.fromExisting(relationRecord);
            yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_6__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_9__.REDUCER_KEY, 'resolveRelationRecordForRelation', relationEntity, modelName, modelId);
            hasSetMap = hasSetMap.setIn([modelId, relationId], true);
          }
        }
      }
    }
  } else {
    while (response.length > 0) {
      const record = response.pop();
      const modelId = isBelongsToRelation(relationType) ? record[modelPrimaryKey] : record[modelName].id;
      const relationId = record[relationPrimaryKey];

      if (!hasSetMap.hasIn([modelId, relationId])) {
        const relationEntity = factory.fromExisting(record[relationName]);
        yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_6__.dispatch)(_constants__WEBPACK_IMPORTED_MODULE_9__.REDUCER_KEY, 'resolveRelationRecordForRelation', relationEntity, modelName, modelId);
        hasSetMap = hasSetMap.setIn([modelId, relationId], true);
      }
    }
  }
}
/**
 * Constructs and returns the url for a relation entity request using the given
 * arguments
 *
 * @param {string} modelName
 * @param {Array} entityIds
 * @param {string} relationName
 * @param {Object} relationSchema
 * @param {string} relationType
 * @param {boolean} hasJoinTable
 * @param {Array} calculatedFields
 * @return {string} A path to use for a relation request.
 */

const getRelationRequestUrl = (modelName, entityIds, relationName, relationSchema, relationType, hasJoinTable, calculatedFields) => {
  let path;
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(relationName);

  switch (true) {
    case hasJoinTable:
      path = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.getEndpoint)((0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(relationSchema.joining_model_name).toLowerCase());
      path += '/?where' + (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.getPrimaryKeyQueryString)(modelName, entityIds);
      path += `&include=${(0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.modelNameForQueryString)(relationName)}.*`;
      path = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.appendCalculatedFieldsToPath)(path, calculatedFields, relationName);
      break;

    case isBelongsToRelation(relationType):
      path = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.getEndpoint)(modelName);
      path += `/?where${(0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.getPrimaryKeyQueryString)(modelName, entityIds)}`;
      path += `&include=${(0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.modelNameForQueryString)(relationName)}.*`;
      path = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.appendCalculatedFieldsToPath)(path, calculatedFields, relationName);
      break;

    default:
      // we do the reverse endpoint so that we are getting the belongs to
      // relation responses back and including the relation entities we
      // want in the response (belongs to).  So for instance if the
      // incoming arguments are:
      // `getRelatedEntitiesForEntityIds(
      // 		'attendee',
      // 		[ 10, 20],
      // 		'registration'
      // )
      // then the query would be:
      // /registrations/?where[ATT_ID][IN]=10,20&include=Attendee.*
      // basically the goal here is to get one to one relations returned
      // in the query for easier parsing/dispatching.
      // @todo, currently this will NOT account for paging.
      path = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.getEndpoint)(relationName);
      path += `/?where${(0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.getPrimaryKeyQueryString)(modelName, entityIds)}`;
      path += `&include=${(0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.modelNameForQueryString)(modelName)}.*`;
      path = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.appendCalculatedFieldsToPath)(path, calculatedFields);
      break;
  }

  return path;
};
/**
 * Returns whether the given relationType is equal to `EE_Belongs_To_Relation`
 *
 * @param {string} relationType
 * @return {boolean}  True means the given relationType is `EE_Belongs_To_Relation`
 */


const isBelongsToRelation = relationType => {
  return relationType === 'EE_Belongs_To_Relation';
};

/***/ }),

/***/ "./assets/src/data/eventespresso/core/resolvers/utils.js":
/*!***************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/resolvers/utils.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendCalculatedFieldsToPath": function() { return /* binding */ appendCalculatedFieldsToPath; }
/* harmony export */ });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Appends provided calculated fields to the provided path if not empty.
 *
 * Also, if modelName is passed in undefined, then any fields are appended
 * without modification.  Otherwise they will be suffixed with the modelName as
 * a part of the query to indicate what model the calculated fields apply to.
 *
 * @param {string} path
 * @param {Array<string>} calculatedFields
 * @param {string} modelName
 * @return {string} The path with calculated fields appended if present.
 */

const appendCalculatedFieldsToPath = (path, calculatedFields, modelName) => {
  calculatedFields = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.castArray)(calculatedFields);

  if (calculatedFields.length > 0) {
    // setup fields string
    const nameForQueryString = modelName !== undefined ? (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.modelNameForQueryString)((0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.singularModelName)(modelName)) : '';
    const queryStrings = nameForQueryString ? calculatedFields.map(field => {
      return `${nameForQueryString}.${field}`;
    }) : calculatedFields;
    path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.addQueryArgs)(path, {
      calculate: queryStrings.join()
    });
  }

  return path;
};

/***/ }),

/***/ "./assets/src/data/eventespresso/core/selectors/entities.js":
/*!******************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/selectors/entities.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllEntitiesInState": function() { return /* binding */ getAllEntitiesInState; },
/* harmony export */   "getEntitiesByIds": function() { return /* binding */ getEntitiesByIds; },
/* harmony export */   "getEntitiesForModel": function() { return /* binding */ getEntitiesForModel; },
/* harmony export */   "getEntityById": function() { return /* binding */ getEntityById; },
/* harmony export */   "getEntityIdsQueuedForDelete": function() { return /* binding */ getEntityIdsQueuedForDelete; },
/* harmony export */   "getEntityIdsQueuedForTrash": function() { return /* binding */ getEntityIdsQueuedForTrash; },
/* harmony export */   "getEntityRecordsForModel": function() { return /* binding */ getEntityRecordsForModel; },
/* harmony export */   "getModelsQueuedForDelete": function() { return /* binding */ getModelsQueuedForDelete; },
/* harmony export */   "getModelsQueuedForTrash": function() { return /* binding */ getModelsQueuedForTrash; }
/* harmony export */ });
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/es/rememo.js");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External imports
 */



/**
 * Returns all entity records for the given modelName in the current state.
 * An entity record is the Map of entities (entityId => entity).
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {Object<number|string, BaseEntity>}|null} A collection of entity
 * records for the given model indexed by primary key value or null if none
 * have been set in the state.
 */

const getEntityRecordsForModel = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])((state, modelName) => {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  return state.entities.has(modelName) ? state.entities.get(modelName).toJS() : null;
}, (state, modelName) => [state.entities.get(modelName)]);
/**
 * Returns all entities for the given model.
 * This differs from entityRecords, in that the entities are NOT indexed by
 * primary key value and an Array of entities is returned instead of an object.
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {Array<BaseEntity>|null} An array of entities for the given model or
 * null if none have been set in the state.
 */

const getEntitiesForModel = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])((state, modelName) => {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  return state.entities.has(modelName) ? state.entities.get(modelName).valueSeq().toArray() : [];
}, (state, modelName) => [state.entities.get(modelName)]);
/**
 * Returns the model entity for the given model and id.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {number|string} entityId
 * @return {BaseEntity|null} Returns the model entity or null.
 */

function getEntityById(state, modelName, entityId) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  return state.entities.getIn([modelName, (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.normalizeEntityId)(entityId)]) || null;
}
/**
 * Retrieves an array of model entities for the provided array of ids and model.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {Array<string|number>} entityIds
 * @return {Array<BaseEntity>|null} Returns an array of model entities for the
 * provided ids or null if never been set.
 */


const getEntitiesByIds = (state, modelName, entityIds) => {
  return retrieveEntitiesByIds(state, modelName, entityIds.join());
};

getEntitiesByIds.clear = () => retrieveEntitiesByIds.clear();

getEntitiesByIds.getDependants = (state, modelName) => retrieveEntitiesByIds.getDependants(state, modelName);
/**
 * Retrieves an array of model entities for the provided array of ids and model.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {string} entityIds  A comma delimited string of ids.  This is so
 * we are passing a primitive arg to rememo for better cache validation.
 * @return {Array<BaseEntity>|null} Returns an array of model entities for the
 * provided ids or null if never been set.
 */


const retrieveEntitiesByIds = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])((state, modelName, entityIds) => {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  entityIds = entityIds.split(',');
  const entities = [];

  if (state.entities.has(modelName)) {
    entityIds.forEach(entityId => {
      const entity = getEntityById(state, modelName, entityId);

      if (entity !== null) {
        entities.push(entity);
      }
    });
  }

  return entities;
}, (state, modelName) => [state.entities.get(modelName)]);
/**
 * Retrieves an array of entity ids queued for trash for the given model.
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {Array<number>} An array of entity ids.
 */

const getEntityIdsQueuedForTrash = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])((state, modelName) => {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  return state.dirty.trash.has(modelName) ? state.dirty.trash.get(modelName).toArray() : [];
}, (state, modelName) => [state.dirty.trash.get(modelName)]);
/**
 * Retrieves an array of entity ids queued for delete for the given model.
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {Array<number|string>} An array of entity ids.
 */

const getEntityIdsQueuedForDelete = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])((state, modelName) => {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  return state.dirty.delete.has(modelName) ? state.dirty.delete.get(modelName).toArray() : [];
}, (state, modelName) => [state.dirty.delete.get(modelName)]);
/**
 * Retrieves all the models currently having ids queued for trash
 *
 * @param {Object} state
 * @return {Array<string>} An array of model names.
 */

const getModelsQueuedForTrash = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])(state => {
  return state.dirty.trash.keySeq().toArray();
}, state => [state.dirty.trash]);
/**
 * Retrieves all the models currently having ids queued for delete.
 *
 * @param {Object} state
 * @return {Array<string>} An array of model names.
 */

const getModelsQueuedForDelete = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])(state => {
  return state.dirty.delete.keySeq().toArray();
}, state => [state.dirty.delete]);
/**
 * Returns the state.entities value.
 *
 * @param {Object} state
 *
 * @return {Map} The entities state immutable map.
 */

const getAllEntitiesInState = state => state.entities;



/***/ }),

/***/ "./assets/src/data/eventespresso/core/selectors/index.js":
/*!***************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/selectors/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countRelationModelsIndexedForEntity": function() { return /* reexport safe */ _relations__WEBPACK_IMPORTED_MODULE_1__.countRelationModelsIndexedForEntity; },
/* harmony export */   "getAllEntitiesInState": function() { return /* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_0__.getAllEntitiesInState; },
/* harmony export */   "getAllRelationsInState": function() { return /* reexport safe */ _relations__WEBPACK_IMPORTED_MODULE_1__.getAllRelationsInState; },
/* harmony export */   "getEntitiesByIds": function() { return /* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_0__.getEntitiesByIds; },
/* harmony export */   "getEntitiesForModel": function() { return /* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_0__.getEntitiesForModel; },
/* harmony export */   "getEntityById": function() { return /* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_0__.getEntityById; },
/* harmony export */   "getEntityIdsQueuedForDelete": function() { return /* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_0__.getEntityIdsQueuedForDelete; },
/* harmony export */   "getEntityIdsQueuedForTrash": function() { return /* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_0__.getEntityIdsQueuedForTrash; },
/* harmony export */   "getEntityRecordsForModel": function() { return /* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_0__.getEntityRecordsForModel; },
/* harmony export */   "getModelsQueuedForDelete": function() { return /* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_0__.getModelsQueuedForDelete; },
/* harmony export */   "getModelsQueuedForTrash": function() { return /* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_0__.getModelsQueuedForTrash; },
/* harmony export */   "getRelatedEntities": function() { return /* reexport safe */ _relations__WEBPACK_IMPORTED_MODULE_1__.getRelatedEntities; },
/* harmony export */   "getRelatedEntitiesForIds": function() { return /* reexport safe */ _relations__WEBPACK_IMPORTED_MODULE_1__.getRelatedEntitiesForIds; },
/* harmony export */   "getRelationAdditionsQueuedForModel": function() { return /* reexport safe */ _relations__WEBPACK_IMPORTED_MODULE_1__.getRelationAdditionsQueuedForModel; },
/* harmony export */   "getRelationDeletionsQueuedForModel": function() { return /* reexport safe */ _relations__WEBPACK_IMPORTED_MODULE_1__.getRelationDeletionsQueuedForModel; },
/* harmony export */   "getRelationIdsForEntityRelation": function() { return /* reexport safe */ _relations__WEBPACK_IMPORTED_MODULE_1__.getRelationIdsForEntityRelation; }
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities */ "./assets/src/data/eventespresso/core/selectors/entities.js");
/* harmony import */ var _relations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relations */ "./assets/src/data/eventespresso/core/selectors/relations.js");



/***/ }),

/***/ "./assets/src/data/eventespresso/core/selectors/relations.js":
/*!*******************************************************************!*\
  !*** ./assets/src/data/eventespresso/core/selectors/relations.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countRelationModelsIndexedForEntity": function() { return /* binding */ countRelationModelsIndexedForEntity; },
/* harmony export */   "getAllRelationsInState": function() { return /* binding */ getAllRelationsInState; },
/* harmony export */   "getRelatedEntities": function() { return /* binding */ getRelatedEntities; },
/* harmony export */   "getRelatedEntitiesForIds": function() { return /* binding */ getRelatedEntitiesForIds; },
/* harmony export */   "getRelationAdditionsQueuedForModel": function() { return /* binding */ getRelationAdditionsQueuedForModel; },
/* harmony export */   "getRelationDeletionsQueuedForModel": function() { return /* binding */ getRelationDeletionsQueuedForModel; },
/* harmony export */   "getRelationIdsForEntityRelation": function() { return /* binding */ getRelationIdsForEntityRelation; }
/* harmony export */ });
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/es/rememo.js");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entities */ "./assets/src/data/eventespresso/core/selectors/entities.js");
/**
 * External imports
 */






/**
 * Internal imports
 */


const DEFAULT_EMPTY_SET = (0,immutable__WEBPACK_IMPORTED_MODULE_6__.Set)();
/**
 * Retrieves the relation ids for the given entity and relation name from the
 * state and considers how the relation might be saved in the state (either as
 * relation mapped to model (index) or model mapped to relation (entityMap)
 *
 * @param {Object} state
 * @param {BaseEntity} entity
 * @param {string} relationName
 * @return {Array} An empty array if there are no ids for the given relation.
 */

const getRelationIdsForEntityRelation = (0,rememo__WEBPACK_IMPORTED_MODULE_3__["default"])((state, entity, relationName) => {
  if (!(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__.isModelEntity)(entity)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_1__.InvalidModelEntity('', entity);
  }

  const modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(entity.modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(relationName);

  if (state.relations.hasIn([modelName, entity.id, relationName])) {
    return (state.relations.getIn([modelName, entity.id, relationName]) || (0,immutable__WEBPACK_IMPORTED_MODULE_6__.Set)()).toArray();
  }

  return [];
}, (state, entity, relationName) => {
  if (!(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__.isModelEntity)(entity)) {
    return [DEFAULT_EMPTY_SET];
  }

  const modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(entity.modelName),
        id = entity.id;
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(relationName);
  return [state.relations.getIn([modelName, id, relationName])];
});
/**
 * Returns all the relation entities for the relation on model entity.
 *
 * @param {Object} state
 * @param {BaseEntity} entity
 * @param {string} relationModelName
 * @return {Array<BaseEntity>} An array of entities for the relation.
 */

const getRelatedEntities = (0,rememo__WEBPACK_IMPORTED_MODULE_3__["default"])((state, entity, relationModelName) => {
  if (!(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__.isModelEntity)(entity)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_1__.InvalidModelEntity('', entity);
  }

  relationModelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(relationModelName);
  return (0,_entities__WEBPACK_IMPORTED_MODULE_5__.getEntitiesByIds)(state, relationModelName, getRelationIdsForEntityRelation(state, entity, relationModelName));
}, (state, entity, relationName) => [..._entities__WEBPACK_IMPORTED_MODULE_5__.getEntitiesByIds.getDependants(state, (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(relationName)), ...getRelationIdsForEntityRelation.getDependants(state, entity, (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(relationName))]);
/**
 * Efficient selector for getting all the related entities for the given model,
 * it's entity ids, and the relation name.
 *
 * Instead of using the `getRelations` selector which gets the relations for a
 * single entity.  This allows you to get all the relations for a given set of
 * entity ids (i.e. Get all datetimes related to the event ids: 10, 20, and 30).
 *
 * This selector is wired up to a resolver that does an efficient request to
 * retrieve all those entities and then dispatch the appropriate actions so
 * the relation state is correctly recorded for each relation.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {Array<number>} entityIds
 * @param {string} relationName
 * @return {Array<BaseEntity>} An array of BaseEntity instances for the
 * relations.
 */

const getRelatedEntitiesForIds = (0,rememo__WEBPACK_IMPORTED_MODULE_3__["default"])((state, modelName, entityIds, relationName) => {
  let relationEntities = (0,immutable__WEBPACK_IMPORTED_MODULE_6__.Set)();
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(relationName);
  entityIds.forEach(entityId => {
    const entity = (0,_entities__WEBPACK_IMPORTED_MODULE_5__.getEntityById)(state, modelName, entityId);
    const relatedEntities = getRelatedEntities(state, entity, relationName);
    relationEntities = relationEntities.merge(relatedEntities);
  });
  return relationEntities.toJS();
}, (state, modelName, entityIds, relationName) => [..._entities__WEBPACK_IMPORTED_MODULE_5__.getEntitiesByIds.getDependants(state, (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName)), ..._entities__WEBPACK_IMPORTED_MODULE_5__.getEntitiesByIds.getDependants(state, (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(relationName))]);
/**
 * Looks up the relations queued for a given model first from the actual relation
 * type in the state, and then a reverse lookup in the index if not there.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {string} type 'add' or 'delete'
 * @return {Object} Returns an object keyed by entity ids for the given model.
 * The values on for each entity id is an object keyed by relation names and
 * with values being an array of ids for relation. Example:
 * {
 *   10: {
 *     datetimes: [ 22, 23 ],
 *     message_template_groups: [ 2, 4 ],
 *   },
 *   20: {
 *     datetimes: [ 24, 25 ],
 *   },
 * }
 */

const lookupRelationsQueuedForModel = function (state, modelName) {
  let type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'add';
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  let relationsQueued = (0,immutable__WEBPACK_IMPORTED_MODULE_6__.Map)();

  if (state.dirty.relations.hasIn([type, modelName])) {
    relationsQueued = relationsQueued.mergeDeep(state.dirty.relations.getIn([type, modelName]));
  }

  if (state.dirty.relations.hasIn(['index', modelName])) {
    let relations = (0,immutable__WEBPACK_IMPORTED_MODULE_6__.Map)();
    state.dirty.relations.getIn(['index', modelName]).forEach((relationMap, entityId) => {
      relationMap.forEach((relationRecord, model) => {
        if (relationRecord.has(type)) {
          relations = relations.setIn([entityId, (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(model)], relationRecord.get(type));
        }
      });
    });
    relationsQueued = relationsQueued.mergeDeep(relations);
  }

  return relationsQueued.toJS();
};
/**
 * Retrieves all the queued relation additions for the given model
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {Object} Returns an object keyed by entity ids for the given model.
 * The values on for each entity id is an object keyed by relation names and
 * with values being an array of ids for relation. Example:
 * {
 *   10: {
 *     datetimes: [ 22, 23 ],
 *     message_template_groups: [ 2, 4 ],
 *   },
 *   20: {
 *     datetimes: [ 24, 25 ],
 *   },
 * }
 *
 */


const getRelationAdditionsQueuedForModel = (0,rememo__WEBPACK_IMPORTED_MODULE_3__["default"])((state, modelName) => {
  return lookupRelationsQueuedForModel(state, modelName);
}, (state, modelName) => [state.dirty.relations.getIn(['add', (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName)]), state.dirty.relations.getIn(['index', (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName)])]);
/**
 * Retrieves all the queued relation deletions for the given model
 * Similar to `getRelationAdditionsQueuedForModel` except this is relations
 * queued for deletion.
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {Object} Returns an object keyed by entity ids for the given model.
 * The values on for each entity id is an object keyed by relation names and
 * with values being an array of ids for relation.
 */

const getRelationDeletionsQueuedForModel = (0,rememo__WEBPACK_IMPORTED_MODULE_3__["default"])((state, modelName) => {
  return lookupRelationsQueuedForModel(state, modelName, 'delete');
}, (state, modelName) => [state.dirty.relations.getIn(['delete', (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName)]), state.dirty.relations.getIn(['index', (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName)])]);
/**
 * Returns a count of all the relation models (not count of entities) that exist
 * in the state being related to the given model and entityId.
 *
 * Note: This only queries the state, not any relations that might exist in the
 * db.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {number|string} entityId
 * @return {number} The count of relations.
 */

const countRelationModelsIndexedForEntity = (0,rememo__WEBPACK_IMPORTED_MODULE_3__["default"])((state, modelName, entityId) => {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  entityId = (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__.normalizeEntityId)(entityId); // we can just get this from the context of the model

  return (state.relations.getIn([modelName, entityId]) || (0,immutable__WEBPACK_IMPORTED_MODULE_6__.Map)()).count();
}, (state, modelName, entityId) => {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  entityId = (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_4__.normalizeEntityId)(entityId);
  return [state.relations.getIn([modelName, entityId])];
});
/**
 * Return the contents of the state.relations map.
 *
 * @param {Object} state
 *
 * @return {Map} The state.relations map.
 */

const getAllRelationsInState = state => state.relations;



/***/ }),

/***/ "./assets/src/data/eventespresso/lists/action-types.js":
/*!*************************************************************!*\
  !*** ./assets/src/data/eventespresso/lists/action-types.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPES": function() { return /* binding */ ACTION_TYPES; },
/* harmony export */   "RESET_TYPES": function() { return /* binding */ RESET_TYPES; }
/* harmony export */ });
const ACTION_TYPES = {
  RECEIVE_LIST: 'RECEIVE_LIST',
  RECEIVE_ENTITY_LIST: 'RECEIVE_ENTITY_LIST'
};
const RESET_TYPES = {
  RESET_ALL_STATE: 'RESET_ALL_STATE',
  RESET_STATE_FOR_IDENTIFIER: 'RESET_STATE_FOR_IDENTIFIER',
  RESET_SPECIFIC_STATE_FOR_IDENTIFIER: 'RESET_SPECIFIC_STATE_FOR_IDENTIFIER'
};

/***/ }),

/***/ "./assets/src/data/eventespresso/lists/actions.js":
/*!********************************************************!*\
  !*** ./assets/src/data/eventespresso/lists/actions.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "receiveEntityResponse": function() { return /* binding */ receiveEntityResponse; },
/* harmony export */   "receiveResponse": function() { return /* binding */ receiveResponse; },
/* harmony export */   "resetAllState": function() { return /* binding */ resetAllState; },
/* harmony export */   "resetEntitiesForModelName": function() { return /* binding */ resetEntitiesForModelName; },
/* harmony export */   "resetForSelectorAndIdentifier": function() { return /* binding */ resetForSelectorAndIdentifier; },
/* harmony export */   "resetGenericItemsWithIdentifier": function() { return /* binding */ resetGenericItemsWithIdentifier; },
/* harmony export */   "resetSpecificStateForSelector": function() { return /* binding */ resetSpecificStateForSelector; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-types */ "./assets/src/data/eventespresso/lists/action-types.js");
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./assets/src/data/eventespresso/lists/constants.js");
/**
 * External imports
 */


/**
 * Internal imports
 */




/**
 * Returns an action object used in updating the store with the provided items
 * retrieved from a request using the given querystring.
 *
 * This is a generic response action.
 *
 * @param {string} identifier
 * @param {string} queryString  Results are stored indexed by the query
 * string generating them.
 * @param {Array<*>} items     items attached with the list.
 * @return {
 * 	{
 * 		type: string,
 * 		identifier: string,
 * 		queryString: string,
 * 		items: Array<*>
 *	}
 * } Object for action.
 */

function receiveResponse(identifier, queryString) {
  let items = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.RECEIVE_LIST,
    identifier,
    queryString,
    items
  };
}
/**
 * Returns an action object used in updating the store with the provided entity
 * items retrieved from a request using the given query string.
 *
 * @param {string} modelName
 * @param {string} queryString
 * @param {Array<BaseEntity>}entities
 * @return {{type: string, identifier: string, queryString: string, items:
 *   Array<BaseEntity>}} An action object.
 */

function receiveEntityResponse(modelName, queryString) {
  let entities = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.RECEIVE_ENTITY_LIST,
    identifier: modelName,
    queryString,
    items: entities
  };
}
/**
 * Action triggering resetting all state in the store.
 */

function* resetAllState() {
  // action for resetting the entire state
  yield {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__.RESET_TYPES.RESET_ALL_STATE
  };

  if (invalidateActionsAvailable()) {
    yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/data', 'invalidateResolutionForStore', _constants__WEBPACK_IMPORTED_MODULE_4__.REDUCER_KEY);
    return;
  } // get resolvers from core/data and dispatch invalidation of each resolver.


  const resolvers = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_3__.select)('core/data', 'getCachedResolvers', _constants__WEBPACK_IMPORTED_MODULE_4__.REDUCER_KEY); // dispatch invalidation of the cached resolvers

  for (const selector in resolvers) {
    for (const entry of resolvers[selector]._map) {
      yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/data', 'invalidateResolution', _constants__WEBPACK_IMPORTED_MODULE_4__.REDUCER_KEY, selector, entry[0]);
    }
  }
}
/**
 * Action triggering resetting state in the store for the given selector name and
 * identifier
 *
 * @param {string} selectorName
 * @param {string} identifier
 */

function* resetForSelectorAndIdentifier(selectorName, identifier) {
  yield {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__.RESET_TYPES.RESET_STATE_FOR_IDENTIFIER,
    identifier
  }; // get resolvers from core/data

  const resolvers = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_3__.select)('core/data', 'getCachedResolvers', _constants__WEBPACK_IMPORTED_MODULE_4__.REDUCER_KEY); // dispatch invalidation of the cached resolvers for any resolver that
  // has a variation of modelName in the selector name or in the args for the
  // cached resolver.

  for (const selector in resolvers) {
    if (selectorName === selector || identifierInSelector(selector, identifier)) {
      for (const entry of resolvers[selector]._map) {
        if (entry[0][0] === identifier) {
          yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/data', 'invalidateResolution', _constants__WEBPACK_IMPORTED_MODULE_4__.REDUCER_KEY, selector, entry[0]);
        }
      }
    }
  }
}
/**
 * Action triggering the state reset for the "generic" selector ('getItems') and
 * it's identifier
 *
 * @param {string} identifier
 */

function* resetGenericItemsWithIdentifier(identifier) {
  yield* resetForSelectorAndIdentifier('getItems', identifier);
}
/**
 * Action triggering the state reset for the entity selectors for the given
 * modelName
 *
 * @param {string} modelName
 */

function* resetEntitiesForModelName(modelName) {
  yield* resetForSelectorAndIdentifier('getEntities', modelName);
  yield* resetForSelectorAndIdentifier('getEntitiesByIds', modelName);
}
/**
 * Action triggering the state reset for the specific selector name, identifier
 * and query string.
 *
 * @param {string} selectorName
 * @param {string} identifier
 * @param {string} queryString
 */

function* resetSpecificStateForSelector(selectorName, identifier, queryString) {
  yield {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__.RESET_TYPES.RESET_SPECIFIC_STATE_FOR_IDENTIFIER,
    identifier,
    queryString
  };
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/data', 'invalidateResolution', _constants__WEBPACK_IMPORTED_MODULE_4__.REDUCER_KEY, selectorName, [identifier, queryString]);
}
/**
 * Helper for determining if actions are available in the `core/data` package.
 *
 * @return {boolean}  True means additional invalidation actions available.
 */

const invalidateActionsAvailable = () => {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/data').invalidateResolutionForStore !== undefined;
};
/**
 * Helper for determining whether the given identifier is found in the given
 * selectorName.
 *
 * @param {string} selectorName
 * @param {string} identifier
 * @return {boolean} True means it is present, false means it isn't
 */


const identifierInSelector = (selectorName, identifier) => {
  if (selectorName === 'getItems') {
    return false;
  }

  const singularName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(identifier);
  const pluralName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.pluralModelName)(identifier);
  selectorName = selectorName.toLowerCase();
  return selectorName.indexOf(singularName) > -1 || selectorName.indexOf(pluralName) > -1;
};

/***/ }),

/***/ "./assets/src/data/eventespresso/lists/constants.js":
/*!**********************************************************!*\
  !*** ./assets/src/data/eventespresso/lists/constants.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REDUCER_KEY": function() { return /* binding */ REDUCER_KEY; }
/* harmony export */ });
/**
 * The key for the reducer on the store.
 *
 * @type {string}
 */
const REDUCER_KEY = 'eventespresso/lists';

/***/ }),

/***/ "./assets/src/data/eventespresso/lists/index.js":
/*!******************************************************!*\
  !*** ./assets/src/data/eventespresso/lists/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./assets/src/data/eventespresso/lists/reducers.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./assets/src/data/eventespresso/lists/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./assets/src/data/eventespresso/lists/actions.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "./assets/src/data/eventespresso/lists/resolvers.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model */ "./assets/src/data/eventespresso/lists/model.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./assets/src/data/eventespresso/lists/constants.js");
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */








/**
 * Creates specific model entity selectors (getEvents, getDatetimes etc)
 *
 * @type {Object<Function>}
 */

const entitySelectors = (0,_model__WEBPACK_IMPORTED_MODULE_5__.createEntitySelectors)(_selectors__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Creates specific model entity resolvers (getEvents, getDatetimes etc)
 *
 * @type {Object<Function>}
 */

const entityResolvers = (0,_model__WEBPACK_IMPORTED_MODULE_5__.createEntityResolvers)(_resolvers__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Registers the store for the 'eventespresso/lists` reducer.
 */

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, {
  reducer: _reducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__,
  selectors: { ..._selectors__WEBPACK_IMPORTED_MODULE_2__,
    ...entitySelectors
  },
  resolvers: { ..._resolvers__WEBPACK_IMPORTED_MODULE_4__,
    ...entityResolvers
  },
  controls: _base_controls__WEBPACK_IMPORTED_MODULE_7__["default"]
}));

/***/ }),

/***/ "./assets/src/data/eventespresso/lists/model.js":
/*!******************************************************!*\
  !*** ./assets/src/data/eventespresso/lists/model.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEntityResolvers": function() { return /* binding */ createEntityResolvers; },
/* harmony export */   "createEntitySelectors": function() { return /* binding */ createEntitySelectors; }
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-model */ "./assets/src/data/eventespresso/base-model.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model */ "./assets/src/data/model/index.js");
/* harmony import */ var _base_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-selectors */ "./assets/src/data/eventespresso/base-selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./assets/src/data/eventespresso/lists/constants.js");
/**
 * Internal dependencies
 */




/**
 * This method creates selectors for each registered model name wrapping the
 * generic source selectors.
 *
 * @param {Object<Function>} source
 * @return {Object<Function>} All the generated selectors for each model.
 */

const createEntitySelectors = source => _model__WEBPACK_IMPORTED_MODULE_1__.MODEL_NAMES.reduce((selectors, modelName) => {
  const methodNameForGet = (0,_base_model__WEBPACK_IMPORTED_MODULE_0__.getMethodName)(modelName, '', 'get', true);

  selectors[methodNameForGet] = (state, queryString) => source.getEntities(state, modelName, queryString);

  selectors[(0,_base_model__WEBPACK_IMPORTED_MODULE_0__.getMethodName)(modelName, 'byIds', 'get', true)] = function (state) {
    let ids = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    return source.getEntitiesByIds(state, modelName, ids);
  };

  selectors[(0,_base_model__WEBPACK_IMPORTED_MODULE_0__.getMethodName)(modelName, '', 'isRequesting', true)] = (state, queryString) => (0,_base_selectors__WEBPACK_IMPORTED_MODULE_2__.isResolving)(_constants__WEBPACK_IMPORTED_MODULE_3__.REDUCER_KEY, methodNameForGet, queryString);

  return selectors;
}, {});
/**
 * This method creates resolvers for each registered model name wrapping the
 * generic source resolvers.
 *
 * @param {Object<Function>} source
 * @return {Object<Function>} All the generated resolvers for each model.
 */

const createEntityResolvers = source => _model__WEBPACK_IMPORTED_MODULE_1__.MODEL_NAMES.reduce((resolvers, modelName) => {
  resolvers[(0,_base_model__WEBPACK_IMPORTED_MODULE_0__.getMethodName)(modelName, '', 'get', true)] = queryString => source.getEntities(modelName, queryString);

  resolvers[(0,_base_model__WEBPACK_IMPORTED_MODULE_0__.getMethodName)(modelName, 'byIds', 'get', true)] = ids => source.getEntitiesByIds(modelName, ids);

  return resolvers;
}, {});

/***/ }),

/***/ "./assets/src/data/eventespresso/lists/reducers.js":
/*!*********************************************************!*\
  !*** ./assets/src/data/eventespresso/lists/reducers.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "receiveListItems": function() { return /* binding */ receiveListItems; }
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./assets/src/data/eventespresso/lists/action-types.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Internal dependencies
 */

/**
 * External dependencies
 */



/**
 * Reducer managing item list state.
 *
 * @param {Immutable.Map} state  Current state.
 * @param {Object} action	Dispatched action.
 * @return {Immutable.Map}	Updated state.
 */

function receiveListItems() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,immutable__WEBPACK_IMPORTED_MODULE_2__.fromJS)(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_LISTS_STATE);
  let action = arguments.length > 1 ? arguments[1] : undefined;
  const {
    type,
    identifier,
    queryString
  } = action;
  const path = [identifier, queryString];
  let {
    items
  } = action;
  let doUpdate = true,
      existingValues;

  switch (type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.RECEIVE_LIST:
      existingValues = state.getIn(path) || (0,immutable__WEBPACK_IMPORTED_MODULE_2__.Set)();
      items = existingValues.merge(items);
      break;

    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.RECEIVE_ENTITY_LIST:
      existingValues = state.getIn(path) || (0,immutable__WEBPACK_IMPORTED_MODULE_2__.OrderedMap)();
      items = existingValues.merge(items.map(entity => [entity.id, entity]));
      break;

    case _action_types__WEBPACK_IMPORTED_MODULE_0__.RESET_TYPES.RESET_ALL_STATE:
      return (0,immutable__WEBPACK_IMPORTED_MODULE_2__.fromJS)(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_LISTS_STATE);

    case _action_types__WEBPACK_IMPORTED_MODULE_0__.RESET_TYPES.RESET_STATE_FOR_IDENTIFIER:
      return state.delete(identifier);

    case _action_types__WEBPACK_IMPORTED_MODULE_0__.RESET_TYPES.RESET_SPECIFIC_STATE_FOR_IDENTIFIER:
      return state.deleteIn([identifier, queryString]);

    default:
      doUpdate = false;
  }

  return doUpdate ? state.setIn([identifier, queryString], items) : state;
}
/* harmony default export */ __webpack_exports__["default"] = (receiveListItems);

/***/ }),

/***/ "./assets/src/data/eventespresso/lists/resolvers.js":
/*!**********************************************************!*\
  !*** ./assets/src/data/eventespresso/lists/resolvers.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildAndDispatchEntitiesFromResponse": function() { return /* binding */ buildAndDispatchEntitiesFromResponse; },
/* harmony export */   "getEntities": function() { return /* binding */ getEntities; },
/* harmony export */   "getEntitiesByIds": function() { return /* binding */ getEntitiesByIds; },
/* harmony export */   "getItems": function() { return /* binding */ getItems; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./assets/src/data/eventespresso/lists/actions.js");
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _schema_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../schema/constants */ "./assets/src/data/eventespresso/schema/constants.js");
/**
 * External imports
 */


/**
 * Internal dependencies
 */





const DEFAULT_EMPTY_ARRAY = [];
/**
 * Resolver for generic items returned from an endpoint.
 *
 * @param {string} identifier  The identifier for the items.
 * @param {string} queryString  Additional query string parameters passed on to
 *   the REST request.
 */

function* getItems(identifier, queryString) {
  const items = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_3__.fetch)({
    path: queryString
  });
  yield (0,_actions__WEBPACK_IMPORTED_MODULE_2__.receiveResponse)(identifier, queryString, items);
}
/**
 * Utility for handling an entity response and constructing BaseEntity
 * children from them.
 *
 * Note, this uses the entities stored in the eventespresso/core store as the
 * authority so if an entity already exists there, it replaces what was
 * retrieved from the server.
 *
 * @param {string} modelName
 * @param {Array} response
 * @return {IterableIterator<*>|Array<BaseEntity>}  An empty array if the
 * factory cannot be retrieved for the model.  Otherwise the constructed
 * entities.
 */

function* buildAndDispatchEntitiesFromResponse(modelName, response) {
  const factory = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_3__.resolveSelect)(_schema_constants__WEBPACK_IMPORTED_MODULE_5__.REDUCER_KEY, 'getFactoryForModel', modelName);

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(factory)) {
    return DEFAULT_EMPTY_ARRAY;
  }

  let fullEntities = response.map(entity => factory.fromExisting(entity));
  const entityIds = fullEntities.map(entity => entity.id); // are there already entities for the ids in the store?  If so, we use those

  const existingEntities = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_3__.select)(_core_constants__WEBPACK_IMPORTED_MODULE_4__.REDUCER_KEY, 'getEntitiesByIds', modelName, entityIds);

  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(existingEntities)) {
    fullEntities = fullEntities.map(entity => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(existingEntities, existingEntity => {
        return existingEntity.id === entity.id;
      }) || entity;
    });
  }

  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_3__.dispatch)(_core_constants__WEBPACK_IMPORTED_MODULE_4__.REDUCER_KEY, 'receiveEntityRecords', modelName, fullEntities);
  yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_3__.resolveGetEntityByIdForIds)(modelName, entityIds);
  return fullEntities;
}
/**
 * Resolver for model entities returned from an endpoint.
 *
 * @param {string} modelName
 * @param {string} queryString
 * @return {IterableIterator<*>|Array<BaseEntity>} An empty array if no
 * entities retrieved.
 */

function* getEntities(modelName, queryString) {
  const response = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_3__.fetch)({
    path: (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.applyQueryString)(modelName, queryString)
  });

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(response)) {
    return DEFAULT_EMPTY_ARRAY;
  }

  const fullEntities = yield buildAndDispatchEntitiesFromResponse(modelName, response);
  yield (0,_actions__WEBPACK_IMPORTED_MODULE_2__.receiveEntityResponse)(modelName, queryString, fullEntities);
}
/**
 * Resolver for getting model entities for a given set of ids
 *
 * @param {string} modelName
 * @param {Array<number>}ids
 * @return {IterableIterator<*>|Array} An empty array if no entities retrieved.
 */

function* getEntitiesByIds(modelName) {
  let ids = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const queryString = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.getPrimaryKeyQueryString)(modelName, ids);
  const response = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_3__.fetch)({
    path: (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.applyQueryString)(modelName, queryString)
  });

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(response)) {
    return DEFAULT_EMPTY_ARRAY;
  }

  const fullEntities = yield buildAndDispatchEntitiesFromResponse(modelName, response);
  yield (0,_actions__WEBPACK_IMPORTED_MODULE_2__.receiveEntityResponse)(modelName, queryString, fullEntities);
}

/***/ }),

/***/ "./assets/src/data/eventespresso/lists/selectors.js":
/*!**********************************************************!*\
  !*** ./assets/src/data/eventespresso/lists/selectors.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEntities": function() { return /* binding */ getEntities; },
/* harmony export */   "getEntitiesByIds": function() { return /* binding */ getEntitiesByIds; },
/* harmony export */   "getItems": function() { return /* binding */ getItems; },
/* harmony export */   "isRequestingEntities": function() { return /* binding */ isRequestingEntities; },
/* harmony export */   "isRequestingItems": function() { return /* binding */ isRequestingItems; }
/* harmony export */ });
/* harmony import */ var _base_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-selectors */ "./assets/src/data/eventespresso/base-selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./assets/src/data/eventespresso/lists/constants.js");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/es/rememo.js");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/**
 * Internal dependencies
 */


/**
 * External dependencies
 */





const DEFAULT_EMPTY_ARRAY = [];
/**
 * Generic helper for retrieving items from state for given identifier and
 * queryString.
 *
 * @param {Immutable.Map} state
 * @param {string} identifier
 * @param {string} queryString
 * @param {*} defaultEmpty  Caller can supply what the default is when state is
 * doesn't have entries for the given identifier and queryString
 * @return {Array|Object} Returns the array of items if the given identifier/
 * querystring does not exist in the state or the given items as an array or
 * object (depending on how they are stored in the state).
 */

const retrieveItems = function (state, identifier, queryString) {
  let defaultEmpty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0,immutable__WEBPACK_IMPORTED_MODULE_5__.Set)();
  return state.getIn([identifier, queryString]) || defaultEmpty;
};
/**
 * Returns all the items for the given identifier and queryString
 *
 * @param {Immutable.Map} state Data state.
 * @param {string} identifier The identifier the items are being retrieved for.
 * @param {string} queryString The query string for retrieving the items.
 * @return {Array} Returns an array of items for the given model and query.
 */


const getItems = (0,rememo__WEBPACK_IMPORTED_MODULE_3__["default"])((state, identifier, queryString) => retrieveItems(state, identifier, queryString).toArray(), (state, identifier, queryString) => [state.getIn([identifier, queryString])]);
/**
 * Returns all the model entities for the given modelName and query string.
 *
 * @param {Immutable.Map} state
 * @param {string} modelName
 * @param {string} queryString
 * @return {Array<BaseEntity>} Returns array of entities.
 */

const getEntities = (0,rememo__WEBPACK_IMPORTED_MODULE_3__["default"])((state, modelName, queryString) => retrieveItems(state, modelName, queryString, (0,immutable__WEBPACK_IMPORTED_MODULE_5__.OrderedMap)()).valueSeq().toArray(), (state, modelName, queryString) => [state.getIn([modelName, queryString])]);
/**
 * Returns all the model entities for the given modelName and query string.
 *
 * @param {Immutable.Map} state
 * @param {string} modelName
 * @param {Array} ids
 * @return {Array<BaseEntity>} An array of entities.
 */

const getEntitiesByIds = function (state, modelName) {
  let ids = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  try {
    const queryString = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_4__.getPrimaryKeyQueryString)(modelName, ids);
    return getEntities(state, modelName, queryString);
  } catch (e) {
    return DEFAULT_EMPTY_ARRAY;
  }
};

getEntitiesByIds.clear = () => getEntities.clear();
/**
 * Helper indicating whether the given identifier, selectorName, and queryString
 * is being resolved or not.
 *
 * @param {Immutable.Map} state
 * @param {string} identifier
 * @param {string} selectorName
 * @param {string} queryString
 * @return {boolean} Returns true if the selector is currently requesting items.
 */


function isRequesting(state, identifier, selectorName, queryString) {
  (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_4__.assertImmutableObjectHasPath)([identifier], state, (0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The given identifier (%s) does not exist in the state.', 'event_espresso'), identifier));
  return (0,_base_selectors__WEBPACK_IMPORTED_MODULE_0__.isResolving)(_constants__WEBPACK_IMPORTED_MODULE_1__.REDUCER_KEY, selectorName, identifier, queryString);
}
/**
 * Returns whether the items for the given identifier and query string are being
 * requested.
 *
 * @param {Immutable.Map} state Data state.
 * @param {string} identifier  The identifier for the items being requested
 * @param {string} queryString The query string for the request
 * @return {boolean} Whether items are being requested or not.
 */


function isRequestingItems(state, identifier, queryString) {
  return isRequesting(state, identifier, 'getItems', queryString);
}
/**
 * Returns whether the get entities request is in the process of being resolved
 * or not.
 *
 * @param {Immutable.Map} state
 * @param {string} modelName
 * @param {string} queryString
 * @return {boolean} True means entities (for the given model) are being
 * requested.
 */

function isRequestingEntities(state, modelName, queryString) {
  return isRequesting(state, modelName, 'getEntities', queryString);
}

/***/ }),

/***/ "./assets/src/data/eventespresso/schema/action-types.js":
/*!**************************************************************!*\
  !*** ./assets/src/data/eventespresso/schema/action-types.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPES": function() { return /* binding */ ACTION_TYPES; }
/* harmony export */ });
const ACTION_TYPES = {
  RECEIVE_SCHEMA_RECORD: 'RECEIVE_SCHEMA_RECORD',
  RECEIVE_FACTORY_FOR_MODEL: 'RECEIVE_FACTORY_FOR_MODEL',
  RECEIVE_RELATION_ENDPOINT_FOR_MODEL_ENTITY: 'RECEIVE_RELATION_ENDPOINT_FOR_MODEL_ENTITY',
  RECEIVE_RELATION_SCHEMA: 'RECEIVE_RELATION_SCHEMA'
};

/***/ }),

/***/ "./assets/src/data/eventespresso/schema/actions.js":
/*!*********************************************************!*\
  !*** ./assets/src/data/eventespresso/schema/actions.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "receiveFactoryForModel": function() { return /* binding */ receiveFactoryForModel; },
/* harmony export */   "receiveRelationEndpointForModelEntity": function() { return /* binding */ receiveRelationEndpointForModelEntity; },
/* harmony export */   "receiveRelationSchema": function() { return /* binding */ receiveRelationSchema; },
/* harmony export */   "receiveSchemaForModel": function() { return /* binding */ receiveSchemaForModel; }
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./assets/src/data/eventespresso/schema/action-types.js");
/**
 * Internal imports
 */

/**
 * Returns an action object used to update the store with the provided schema
 * for the provided modelName.
 *
 * @param {string} modelName
 * @param {Object} schema
 * @return {{type: string, modelName: *, schema}}  The action object.
 */

function receiveSchemaForModel(modelName) {
  let schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.RECEIVE_SCHEMA_RECORD,
    modelName,
    schema
  };
}
/**
 * Returns an action object used to update the store with the provided model
 * entity factory for the provided modelName.
 *
 * @param {string} modelName
 * @param {Object} factory
 * @return {{type: string, modelName: string, factory: Object}} An action
 * object.
 */

function receiveFactoryForModel(modelName) {
  let factory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.RECEIVE_FACTORY_FOR_MODEL,
    modelName,
    factory
  };
}
/**
 * Returns an action object used to update the store with the provided relation
 * endpoint for the model and id, and its relations.
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {string} relationName
 * @param {string} endpoint
 * @return {
 * 	{
 * 		modelName: *,
 * 		endpoint: *,
 * 		relationName: *,
 * 		entityId: *,
 * 		type: string
 * 	}
 * } An action object.
 */

function receiveRelationEndpointForModelEntity(modelName, entityId, relationName, endpoint) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.RECEIVE_RELATION_ENDPOINT_FOR_MODEL_ENTITY,
    modelName,
    entityId,
    relationName,
    endpoint
  };
}
function receiveRelationSchema(modelName, relationName, relationSchema) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.RECEIVE_RELATION_SCHEMA,
    modelName,
    relationName,
    relationSchema
  };
}

/***/ }),

/***/ "./assets/src/data/eventespresso/schema/constants.js":
/*!***********************************************************!*\
  !*** ./assets/src/data/eventespresso/schema/constants.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JOIN_RELATION_TYPES": function() { return /* binding */ JOIN_RELATION_TYPES; },
/* harmony export */   "REDUCER_KEY": function() { return /* binding */ REDUCER_KEY; }
/* harmony export */ });
/**
 * Identifier key for this store reducer.
 *
 * @type {string}
 */
const REDUCER_KEY = 'eventespresso/schema';
const JOIN_RELATION_TYPES = ['EE_HABTM_Relation', 'EE_HABTM_Any_Relation'];

/***/ }),

/***/ "./assets/src/data/eventespresso/schema/index.js":
/*!*******************************************************!*\
  !*** ./assets/src/data/eventespresso/schema/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SCHEMA_KEY": function() { return /* binding */ SCHEMA_KEY; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./assets/src/data/eventespresso/schema/constants.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./assets/src/data/eventespresso/schema/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./assets/src/data/eventespresso/schema/actions.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "./assets/src/data/eventespresso/schema/resolvers.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./assets/src/data/eventespresso/schema/reducers.js");
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model */ "./assets/src/data/eventespresso/schema/model.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */








/**
 * Creates specific model entity selectors (getFactoryForEvent etc)
 *
 * @type {Object<Function>}
 */

const entitySelectors = (0,_model__WEBPACK_IMPORTED_MODULE_7__.createEntitySelectors)(_selectors__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Creates specific model entity resolvers (getFactoryForEvent etc)
 *
 * @type {Object<Function>}
 */

const entityResolvers = (0,_model__WEBPACK_IMPORTED_MODULE_7__.createEntityResolvers)(_resolvers__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Registration of store for eventespresso/schema.
 */

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)(_constants__WEBPACK_IMPORTED_MODULE_1__.REDUCER_KEY, {
  reducer: _reducers__WEBPACK_IMPORTED_MODULE_5__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__,
  controls: _base_controls__WEBPACK_IMPORTED_MODULE_6__["default"],
  selectors: { ..._selectors__WEBPACK_IMPORTED_MODULE_2__,
    ...entitySelectors
  },
  resolvers: { ..._resolvers__WEBPACK_IMPORTED_MODULE_4__,
    ...entityResolvers
  }
}));
const SCHEMA_KEY = _constants__WEBPACK_IMPORTED_MODULE_1__.REDUCER_KEY;

/***/ }),

/***/ "./assets/src/data/eventespresso/schema/model.js":
/*!*******************************************************!*\
  !*** ./assets/src/data/eventespresso/schema/model.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEntityResolvers": function() { return /* binding */ createEntityResolvers; },
/* harmony export */   "createEntitySelectors": function() { return /* binding */ createEntitySelectors; }
/* harmony export */ });
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-model */ "./assets/src/data/eventespresso/base-model.js");
/* harmony import */ var _base_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-selectors */ "./assets/src/data/eventespresso/base-selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./assets/src/data/eventespresso/schema/constants.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




/**
 * Creates selectors for each registered model name wrapping the generic source
 * selectors.
 *
 * @param {Object<Function>} source
 * @return {Object<Function>} All the generated selectors for each model.
 */

const createEntitySelectors = source => _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.MODEL_NAMES.reduce((selectors, modelName) => {
  const schemaMethodName = (0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'schema', 'get');
  const factoryMethodName = (0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'factory', 'get');

  selectors[schemaMethodName] = state => source.getSchemaForModel(state, modelName);

  selectors[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'schema', 'isRequesting')] = () => (0,_base_selectors__WEBPACK_IMPORTED_MODULE_2__.isResolving)(_constants__WEBPACK_IMPORTED_MODULE_3__.REDUCER_KEY, schemaMethodName);

  selectors[factoryMethodName] = state => source.getFactoryForModel(state, modelName);

  selectors[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'factory', 'isRequesting')] = () => (0,_base_selectors__WEBPACK_IMPORTED_MODULE_2__.isResolving)(_constants__WEBPACK_IMPORTED_MODULE_3__.REDUCER_KEY, factoryMethodName);

  return selectors;
}, {});
/**
 * Creates resolvers for each registered model name wrapping the generic source
 * resolvers.
 *
 * @param {Object<Function>} source
 * @return {Object<Function>} All the generated resolvers for each model.
 */

const createEntityResolvers = source => _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__.MODEL_NAMES.reduce((resolvers, modelName) => {
  resolvers[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'schema', 'get')] = () => source.getSchemaForModel(modelName);

  resolvers[(0,_base_model__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(modelName, 'factory', 'get')] = () => source.getFactoryForModel(modelName);

  return resolvers;
}, {});

/***/ }),

/***/ "./assets/src/data/eventespresso/schema/reducers.js":
/*!**********************************************************!*\
  !*** ./assets/src/data/eventespresso/schema/reducers.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "receiveFactory": function() { return /* binding */ receiveFactory; },
/* harmony export */   "receiveRelationEndpointForEntity": function() { return /* binding */ receiveRelationEndpointForEntity; },
/* harmony export */   "receiveRelationSchema": function() { return /* binding */ receiveRelationSchema; },
/* harmony export */   "receiveSchema": function() { return /* binding */ receiveSchema; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/is-shallow-equal */ "@wordpress/is-shallow-equal");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-types */ "./assets/src/data/eventespresso/schema/action-types.js");
/**
 * External dependencies
 */






/**
 * Internal imports
 */


/**
 * Reducer for a model schema.
 *
 * @param {Map} state
 * @param {Object} action
 * @return {Map} The new (or original) state.
 */

const receiveSchema = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,immutable__WEBPACK_IMPORTED_MODULE_6__.fromJS)(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_SCHEMA_STATE.schema);
  let action = arguments.length > 1 ? arguments[1] : undefined;
  const {
    type,
    schema
  } = action;

  try {
    const modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(action.modelName);

    if ((0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__.isSchemaResponseOfModel)(schema, modelName) && type === _action_types__WEBPACK_IMPORTED_MODULE_5__.ACTION_TYPES.RECEIVE_SCHEMA_RECORD) {
      return state.set(modelName, schema);
    }
  } catch (e) {
    return state;
  }

  return state;
};
/**
 * Reducer for a model factory
 *
 * @param {Map} state
 * @param {Object} action
 * @return {Map} the new (or original) state.
 */

const receiveFactory = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,immutable__WEBPACK_IMPORTED_MODULE_6__.fromJS)(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_SCHEMA_STATE.factory);
  let action = arguments.length > 1 ? arguments[1] : undefined;
  const {
    type,
    factory
  } = action;

  try {
    const modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(action.modelName);

    if ((0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__.isModelEntityFactoryOfModel)(factory, modelName) && type === _action_types__WEBPACK_IMPORTED_MODULE_5__.ACTION_TYPES.RECEIVE_FACTORY_FOR_MODEL) {
      return state.set(modelName, factory);
    }
  } catch (e) {
    return state;
  }

  return state;
};
/**
 * Reducer for relation endpoints.
 *
 * @param {Map}state
 * @param {Object} action
 * @return {Map} New or original state.
 */

const receiveRelationEndpointForEntity = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,immutable__WEBPACK_IMPORTED_MODULE_6__.fromJS)(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_SCHEMA_STATE.relationEndpoints);
  let action = arguments.length > 1 ? arguments[1] : undefined;

  try {
    const {
      type,
      entityId,
      endpoint
    } = action;
    const modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(action.modelName);
    const relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(action.relationName);

    if (type === _action_types__WEBPACK_IMPORTED_MODULE_5__.ACTION_TYPES.RECEIVE_RELATION_ENDPOINT_FOR_MODEL_ENTITY) {
      return state.setIn([modelName, (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__.normalizeEntityId)(entityId), relationName], endpoint);
    }
  } catch (e) {
    return state;
  }

  return state;
};
/**
 * Reducer for relation schema
 *
 * @param {Map} state
 * @param {Object} action
 * @return {Map} New or original state
 */

const receiveRelationSchema = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,immutable__WEBPACK_IMPORTED_MODULE_6__.Map)();
  let action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _action_types__WEBPACK_IMPORTED_MODULE_5__.ACTION_TYPES.RECEIVE_RELATION_SCHEMA) {
    const modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(action.modelName);
    const relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(action.relationName);

    if (_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_4___default()(state.getIn([modelName, relationName], {}), action.relationSchema)) {
      return state;
    }

    return state.setIn([modelName, relationName], action.relationSchema);
  }

  return state;
};
/**
 * Be aware that the root state is a plain object but each slice ('schema',
 * 'factory', 'relationEndpoints') is an immutable Map.
 */

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  schema: receiveSchema,
  factory: receiveFactory,
  relationEndpoints: receiveRelationEndpointForEntity,
  relationSchema: receiveRelationSchema
}));

/***/ }),

/***/ "./assets/src/data/eventespresso/schema/resolvers.js":
/*!***********************************************************!*\
  !*** ./assets/src/data/eventespresso/schema/resolvers.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFactoryForModel": function() { return /* binding */ getFactoryForModel; },
/* harmony export */   "getRelationEndpointForEntityId": function() { return /* binding */ getRelationEndpointForEntityId; },
/* harmony export */   "getRelationPrimaryKeyString": function() { return /* binding */ getRelationPrimaryKeyString; },
/* harmony export */   "getRelationResponseType": function() { return /* binding */ getRelationResponseType; },
/* harmony export */   "getRelationSchema": function() { return /* binding */ getRelationSchema; },
/* harmony export */   "getRelationType": function() { return /* binding */ getRelationType; },
/* harmony export */   "getSchemaForModel": function() { return /* binding */ getSchemaForModel; },
/* harmony export */   "hasJoinTableRelation": function() { return /* binding */ hasJoinTableRelation; }
/* harmony export */ });
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./assets/src/data/eventespresso/schema/actions.js");
/* harmony import */ var _base_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-controls */ "./assets/src/data/eventespresso/base-controls.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/constants */ "./assets/src/data/eventespresso/core/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./assets/src/data/eventespresso/schema/constants.js");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */





/**
 * A resolver for getting the schema for a given model name.
 *
 * @param {string} modelName
 * @return {Object} Retrieved schema.
 */

function* getSchemaForModel(modelName) {
  const path = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.getEndpoint)((0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(modelName));
  const schema = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.fetch)({
    path,
    method: 'OPTIONS'
  });
  yield (0,_actions__WEBPACK_IMPORTED_MODULE_3__.receiveSchemaForModel)(modelName, schema);
  return schema;
}
/**
 * A resolver for getting the model entity factory for a given model name.
 *
 * @param {string} modelName
 * @param {Object} schema
 * @return {Object|null} retrieved factory
 */

function* getFactoryForModel(modelName) {
  let schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__.isSchemaResponseOfModel)(schema, modelName)) {
    schema = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveSelect)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getSchemaForModel', modelName);
  }

  if (!(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__.isSchemaResponseOfModel)(schema, modelName)) {
    return null;
  }

  const factory = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.createEntityFactory)(modelName, schema.schema, (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.MODEL_PREFIXES)(modelName));
  yield (0,_actions__WEBPACK_IMPORTED_MODULE_3__.receiveFactoryForModel)(modelName, factory);
  return factory;
}
/**
 * A resolver for getting the relation endpoint for a given model, it's id, and
 * the requested relation.
 *
 * The EE REST api names relations according to whether they there are singular
 * or plural relations on a given model (eg. Registrations have one event
 * relation, but Events can have multiple datetimes).  This means the only way
 * to derive an accurate endpoint for a given relation request on an entity is
 * to retrieve the entity from the resource and derive the endpoint from the
 * links in the response.
 *
 *
 * @param {string} modelName
 * @param {number} entityId
 * @param {string} relationModelName
 * @return {IterableIterator<*>|string} A generator or the derived endpoint.
 */

function* getRelationEndpointForEntityId(modelName, entityId, relationModelName) {
  // first attempt to get the relation endpoint from the entity that might
  // already be in core state.
  const entity = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveSelect)(_core_constants__WEBPACK_IMPORTED_MODULE_5__.REDUCER_KEY, 'getEntityById', modelName, entityId);
  relationModelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(relationModelName);
  const pluralRelationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.pluralModelName)(relationModelName);
  let endpoint = '';

  if ((0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__.isModelEntity)(entity) && entity[pluralRelationName + 'Resource']) {
    endpoint = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.stripBaseRouteFromUrl)(entity[pluralRelationName + 'Resource'].resourceLink);
  } else {
    const response = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.fetch)({
      path: (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.getEndpoint)(modelName) + '/' + entityId
    });

    if (!response._links) {
      return '';
    }

    const links = response._links || {};
    const baseRelationPath = 'https://api.eventespresso.com/';
    endpoint = links[baseRelationPath + relationModelName] || '';
    endpoint = endpoint === '' && links[baseRelationPath + pluralRelationName] || endpoint;
  }

  if (endpoint) {
    yield (0,_actions__WEBPACK_IMPORTED_MODULE_3__.receiveRelationEndpointForModelEntity)(modelName, entityId, relationModelName, endpoint);
  }

  return endpoint;
}
/**
 * A resolver for getting the primary key string to use in a query for the given
 * model and relation. This considers the join type for the relation.
 *
 * @see the `getRelationPrimaryKeyString` selector for example.
 *
 * @param {string} modelName
 * @param {string} relationName
 * @return {string} The primary key string to use or an empty string if relation
 * type could not be determined.
 */

function* getRelationPrimaryKeyString(modelName, relationName) {
  // normalize
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(relationName);
  const relationType = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveSelect)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getRelationType', modelName, relationName);

  if (relationType === '') {
    return '';
  }

  const relationPrimaryKey = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.getPrimaryKey)(relationName);
  return relationType === 'EE_Belongs_To_Relation' ? relationPrimaryKey : `${(0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.modelNameForQueryString)(relationName)}.${relationPrimaryKey}`;
}
/**
 * A resolver for returning what the expected response type is for the given
 * relation.
 *
 * @param {string} modelName  The model the relation is for.
 * @param {string} relationName The model name the relation is to.
 * @return {string} The type of the relation.
 */

function* getRelationResponseType(modelName, relationName) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(relationName);
  const relationSchema = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveSelect)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getRelationSchema', modelName, relationName);
  return relationSchema !== null ? relationSchema.type : '';
}
/**
 * A resolver for returning whether the given modelName and relationName have
 * a join table for representing their relation.
 *
 * @param {string} modelName
 * @param {string} relationName
 * @return {boolean}  True means there is a join table, false means there isn't.
 */

function* hasJoinTableRelation(modelName, relationName) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(relationName);
  const relationType = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveSelect)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getRelationType', modelName, relationName);
  return _constants__WEBPACK_IMPORTED_MODULE_6__.JOIN_RELATION_TYPES.indexOf(relationType) > -1;
}
/**
 * A resolver for getting the relation type describing the relation between
 * modelName and relationName
 *
 * @param {string} modelName
 * @param {string} relationName
 * @return {string}  The relation type to describe the relation
 */

function* getRelationType(modelName, relationName) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(relationName);
  const relationSchema = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveSelect)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getRelationSchema', modelName, relationName);
  return relationSchema !== null ? relationSchema.relation_type : '';
}
/**
 * A resolver for retrieving the relation schema from the server for the given
 * modelName and relationName.
 *
 * @param {string} modelName
 * @param {string} relationName
 * @throws Error
 */

function* getRelationSchema(modelName, relationName) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.singularModelName)(relationName);
  const pluralRelationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__.pluralModelName)(relationName);
  const schema = yield (0,_base_controls__WEBPACK_IMPORTED_MODULE_4__.resolveSelect)(_constants__WEBPACK_IMPORTED_MODULE_6__.REDUCER_KEY, 'getSchemaForModel', modelName);

  if (schema === null) {
    throw new Error('The ' + modelName + ' does not have a schema');
  } // is there a schema for plural relation name?


  let typeSchema = schema.schema.properties[pluralRelationName] || null;
  typeSchema = typeSchema === null && !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(schema.schema.properties[relationName]) ? schema.schema.properties[relationName] : typeSchema;

  if (typeSchema === null) {
    throw new Error('There is no relation for ' + relationName + ' on the ' + 'model ' + modelName);
  }

  yield (0,_actions__WEBPACK_IMPORTED_MODULE_3__.receiveRelationSchema)(modelName, relationName, typeSchema);
}

/***/ }),

/***/ "./assets/src/data/eventespresso/schema/selectors.js":
/*!***********************************************************!*\
  !*** ./assets/src/data/eventespresso/schema/selectors.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFactoryForModel": function() { return /* binding */ getFactoryForModel; },
/* harmony export */   "getRelationEndpointForEntityId": function() { return /* binding */ getRelationEndpointForEntityId; },
/* harmony export */   "getRelationPrimaryKeyString": function() { return /* binding */ getRelationPrimaryKeyString; },
/* harmony export */   "getRelationResponseType": function() { return /* binding */ getRelationResponseType; },
/* harmony export */   "getRelationSchema": function() { return /* binding */ getRelationSchema; },
/* harmony export */   "getRelationType": function() { return /* binding */ getRelationType; },
/* harmony export */   "getSchemaForModel": function() { return /* binding */ getSchemaForModel; },
/* harmony export */   "hasJoinTableRelation": function() { return /* binding */ hasJoinTableRelation; },
/* harmony export */   "hasResolvedFactoryForModel": function() { return /* binding */ hasResolvedFactoryForModel; },
/* harmony export */   "hasResolvedSchemaForModel": function() { return /* binding */ hasResolvedSchemaForModel; },
/* harmony export */   "isRequestingFactoryForModel": function() { return /* binding */ isRequestingFactoryForModel; },
/* harmony export */   "isRequestingRelationEndpointForEntityId": function() { return /* binding */ isRequestingRelationEndpointForEntityId; },
/* harmony export */   "isRequestingSchemaForModel": function() { return /* binding */ isRequestingSchemaForModel; }
/* harmony export */ });
/* harmony import */ var _base_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-selectors */ "./assets/src/data/eventespresso/base-selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./assets/src/data/eventespresso/schema/constants.js");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/es/rememo.js");
/**
 * Internal dependencies
 */


/**
 * External imports
 */





/**
 * Selector for returning the schema object for a given model name from the
 * state.
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {Object} The schema object or null if it doesn't exist.
 */

function getSchemaForModel(state, modelName) {
  return state.schema.get((0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName), null);
}
/**
 * Selector for returning whether the schema is being requested or not for the
 * given model name.
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {boolean}  True means its being requested.
 */

function isRequestingSchemaForModel(state, modelName) {
  return (0,_base_selectors__WEBPACK_IMPORTED_MODULE_0__.isResolving)(_constants__WEBPACK_IMPORTED_MODULE_1__.REDUCER_KEY, 'getSchemaForModel', (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName));
}
/**
 * Selector for returning whether the schema has been resolved or not for the
 * given model name.
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {boolean} True means that the schema has finished resolving for this
 * model name.
 */

function hasResolvedSchemaForModel(state, modelName) {
  return (0,_base_selectors__WEBPACK_IMPORTED_MODULE_0__.hasFinishedResolving)(_constants__WEBPACK_IMPORTED_MODULE_1__.REDUCER_KEY, 'getSchemaForModel', (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName));
}
/**
 * Selector for returning the model entity factory object for a given
 * model name from the state.
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {Object} Returns the model entity factory or null if it doesn't
 * exist.
 */

function getFactoryForModel(state, modelName) {
  const factory = state.factory.get((0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName), null);
  return !(factory instanceof immutable__WEBPACK_IMPORTED_MODULE_5__.Map) ? factory : null;
}
/**
 * Selector for returning whether the model entity factory is being requested
 * or not for the given model name from the state.
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {boolean}  True means it is being requested.
 */

function isRequestingFactoryForModel(state, modelName) {
  return (0,_base_selectors__WEBPACK_IMPORTED_MODULE_0__.isResolving)(_constants__WEBPACK_IMPORTED_MODULE_1__.REDUCER_KEY, 'getFactoryForModel', (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName));
}
/**
 * Selector for returning whether the factory has been resolved or not for the
 * given model name.
 *
 * @param {Object} state
 * @param {string} modelName
 * @return {boolean} True means that the factory has finished resolving for this
 * model name.
 */

function hasResolvedFactoryForModel(state, modelName) {
  return (0,_base_selectors__WEBPACK_IMPORTED_MODULE_0__.hasFinishedResolving)(_constants__WEBPACK_IMPORTED_MODULE_1__.REDUCER_KEY, 'getFactoryForModel', (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName));
}
/**
 * Return the relation endpoint for the given model, entity id and relation.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {number|string} entityId
 * @param {string} relationModelName
 * @return {string} Returns the relation endpoint if available or an empty
 * string.
 */

function getRelationEndpointForEntityId(state, modelName, entityId, relationModelName) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  relationModelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(relationModelName);
  entityId = (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_3__.normalizeEntityId)(entityId);
  return state.relationEndpoints.getIn([modelName, entityId, relationModelName]) || '';
}
/**
 * Selector for returning whether the relation endpoint is being requested
 * or not for the given model name, entity id, and relation from the state.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {number|string} entityId
 * @param {string} relationModelName
 * @return {boolean}  True means it is being requested.
 */

function isRequestingRelationEndpointForEntityId(state, modelName, entityId, relationModelName) {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  entityId = (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_3__.normalizeEntityId)(entityId);
  relationModelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(relationModelName);
  return (0,_base_selectors__WEBPACK_IMPORTED_MODULE_0__.isResolving)(_constants__WEBPACK_IMPORTED_MODULE_1__.REDUCER_KEY, 'getRelationEndpointForEntityId', modelName, entityId, relationModelName);
}
/**
 * Selector for returning the primary key string to use in a query for the given
 * model and relation.  This considers the join type for the relation.
 *
 * For example:  If you were doing a query to get the registrations related to an
 * attendee, you would need the string to use for the `REG_ID` primary key in
 * the query.  Since the join type for registrations to attendees is
 * EE_Has_Many_Relation, then the query string would need to be
 * `Registration.REG_ID`.  If however you were getting the attendee related
 * to a registration, then the join type for attendees on registrations is
 * EE_Belongs_To_Relation, in which case the attendee primary key would be
 * `ATT_ID` (the registration table has the foreign key on it).
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {string} relationName
 *
 * @return {string} The primary key string to use or an empty string if relation
 * type could not be determined.
 */

const getRelationPrimaryKeyString = (0,rememo__WEBPACK_IMPORTED_MODULE_4__["default"])((state, modelName, relationName) => {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(relationName);
  const relationType = getRelationType(state, modelName, relationName);

  if (relationType === '') {
    return '';
  }

  const relationPrimaryKey = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.getPrimaryKey)(relationName);
  return relationType === 'EE_Belongs_To_Relation' ? relationPrimaryKey : `${(0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.modelNameForQueryString)(relationName)}.${relationPrimaryKey}`;
}, (state, modelName, relationName) => {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(relationName);
  return [state.relationSchema.getIn([modelName, relationName], '')];
});
/**
 * Selector returning the relation response type for the given relation.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {string} relationName
 * @return {string} The type for the relation returned for the given model and
 * relation.
 */

const getRelationResponseType = (state, modelName, relationName) => {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(relationName);
  const relationSchema = getRelationSchema(state, modelName, relationName);
  return relationSchema !== null ? relationSchema.type : '';
};
/**
 * Selector returning whether the relation between the given model name and
 * relation name has a join table.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {string} relationName
 * @return {boolean} True means there is a join table, false means there isn't.
 */

const hasJoinTableRelation = (state, modelName, relationName) => {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(relationName);
  const relationType = getRelationType(state, modelName, relationName);
  return _constants__WEBPACK_IMPORTED_MODULE_1__.JOIN_RELATION_TYPES.indexOf(relationType) > -1;
};
/**
 * Selector returning the relation type describing the relation between the
 * given model name and relation name.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {string} relationName
 * @return {string}  The relation type (eg. "EE_HABTM_Relation")
 */

const getRelationType = (state, modelName, relationName) => {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(relationName);
  const relationSchema = getRelationSchema(state, modelName, relationName);
  return relationSchema !== null ? relationSchema.relation_type : '';
};
/**
 * Selector returning the relation schema describing the relation between the
 * given model name and relation name.
 *
 * @param {Object} state
 * @param {string} modelName
 * @param {string} relationName
 * @return {Object|null} An object or null if there is no relation schema.
 */

const getRelationSchema = (state, modelName, relationName) => {
  modelName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(modelName);
  relationName = (0,_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__.singularModelName)(relationName);
  return state.relationSchema.getIn([modelName, relationName], null);
};

/***/ }),

/***/ "./assets/src/data/model/assertions.js":
/*!*********************************************!*\
  !*** ./assets/src/data/model/assertions.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assertEntityHasKey": function() { return /* binding */ assertEntityHasKey; },
/* harmony export */   "assertImmutableObjectHasPath": function() { return /* binding */ assertImmutableObjectHasPath; },
/* harmony export */   "assertIsArray": function() { return /* binding */ assertIsArray; },
/* harmony export */   "assertIsMap": function() { return /* binding */ assertIsMap; },
/* harmony export */   "assertIsNotEmpty": function() { return /* binding */ assertIsNotEmpty; }
/* harmony export */ });
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External imports
 */



/**
 * Asserts whether the given key exists in the provided entity object.
 * This is used when calling code wants an exception to be thrown.
 *
 * @param { string } key
 * @param { Object } entity
 * @param { string } message
 * @throws { Exception }  Throws an exception if the provided entity does not
 *                          have the given key.
 */

const assertEntityHasKey = function (key, entity) {
  let message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (message === '') {
    message = (0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The provided entity (%s) does not have the given property (%s)', 'event_espresso'), entity, key);
  }

  if (!entity.hasOwnProperty(key)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__.Exception(message);
  }
};
/**
 * Asserts whether the given path in the provided immutable object exists.
 * This is used when calling code wants an exception to be thrown if the given
 * search path array does not exist in the immutable object.
 *
 * If the immutable object is setup like this:
 *
 * immutable = Immutable.Map().set( 'event', Immutable.Map().set( 10, Event ) );
 *
 * Then a valid searchable path could be `[ 'event', 10 ]`.  An invalid path
 * would be `[ 'datetime', 10 ]`
 *
 * @param {Array} path  Searchable path for the immutable ojbect to verify.
 * @param {Immutable.Map|Immutable.Set} immutable  An immutable object (Map, Set, List etc)
 * @param {string} message A custom message to use.
 * @throws Exception
 */

const assertImmutableObjectHasPath = function (path, immutable) {
  let message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (message === '') {
    message = (0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The provided immutable object (%s) does not have the given path (%s)', 'event_espresso'), immutable, path);
  }

  if (!immutable.hasIn(path)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__.Exception(message);
  }
};
/**
 * Asserts whether the given value is an array.
 *
 * @param {*} items
 * @param { string }  message
 * @throws { Exception } Throws an exception if the provided value is not an
 *                          array.
 */

const assertIsArray = function (items) {
  let message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (message === '') {
    message = (0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The provided value is not an array.', 'event_espresso');
  }

  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isArray)(items)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__.Exception(message);
  }
};
/**
 * Validates whether the given value is empty or not.
 *
 * Call this validator when you want to make sure the value is NOT empty.
 *
 * @param {*} items
 * @param { string } message
 * @throws { Exception } Throws an exception if the provided value is empty.
 */

const assertIsNotEmpty = function (items) {
  let message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (message === '') {
    message = (0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The provided items must not be empty', 'event_espresso');
  }

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(items)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__.Exception(message);
  }
};
/**
 * Asserts whether the given value is a Map object.
 *
 * @param {*} item
 * @param {string} message
 * @throws { Exception }
 */

const assertIsMap = function (item) {
  let message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (message === '') {
    message = (0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The provided item must be a Map object', 'event_espresso');
  }

  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isMap)(item)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__.Exception(message);
  }
};

/***/ }),

/***/ "./assets/src/data/model/attendee/constants.js":
/*!*****************************************************!*\
  !*** ./assets/src/data/model/attendee/constants.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODEL_NAME": function() { return /* binding */ MODEL_NAME; }
/* harmony export */ });
const MODEL_NAME = 'attendee';

/***/ }),

/***/ "./assets/src/data/model/attendee/index.js":
/*!*************************************************!*\
  !*** ./assets/src/data/model/attendee/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODEL_NAME": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.MODEL_NAME; },
/* harmony export */   "defaultQueryData": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_0__.defaultQueryData; },
/* harmony export */   "getQueryString": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_0__.getQueryString; },
/* harmony export */   "mapOrderBy": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_0__.mapOrderBy; },
/* harmony export */   "orderByMap": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_0__.orderByMap; },
/* harmony export */   "queryDataTypes": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_0__.queryDataTypes; },
/* harmony export */   "whereConditions": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_0__.whereConditions; }
/* harmony export */ });
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query */ "./assets/src/data/model/attendee/query.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/attendee/constants.js");



/***/ }),

/***/ "./assets/src/data/model/attendee/query.js":
/*!*************************************************!*\
  !*** ./assets/src/data/model/attendee/query.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultQueryData": function() { return /* binding */ defaultQueryData; },
/* harmony export */   "getQueryString": function() { return /* binding */ getQueryString; },
/* harmony export */   "mapOrderBy": function() { return /* binding */ mapOrderBy; },
/* harmony export */   "orderByMap": function() { return /* binding */ orderByMap; },
/* harmony export */   "queryDataTypes": function() { return /* binding */ queryDataTypes; },
/* harmony export */   "whereConditions": function() { return /* binding */ whereConditions; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base */ "./assets/src/data/model/base.js");
/* harmony import */ var _registration_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../registration/constants */ "./assets/src/data/model/registration/constants.js");
/**
 * External imports
 */




const orderByMap = {
  id: 'ATT_ID',
  lastNameOnly: 'ATT_lname',
  firstNameOnly: 'ATT_fname',
  firstThenLastName: ['ATT_fname', 'ATT_lname'],
  lastThenFirstName: ['ATT_lname', 'ATT_fname']
};
/**
 * Described attributes for this model
 *
 * @type {{attributes: *}}
 */

const queryDataTypes = {
  forEventId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  forDatetimeId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  forTicketId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  forStatusId: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(_registration_constants__WEBPACK_IMPORTED_MODULE_2__.REGISTRATION_STATUS_IDS),
  forRegistrationId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  showGravatar: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  queryData: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    limit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    orderBy: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(Object.keys(orderByMap)),
    order: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(_base__WEBPACK_IMPORTED_MODULE_1__.ALLOWED_ORDER_VALUES)
  })
};
/**
 * Default attributes for this model
 *
 * @type {
 * 	{
 * 		attributes: {
 * 			limit: number,
 * 			orderBy: string,
 * 			order: string,
 *   	}
 *   }
 * }
 */

const defaultQueryData = {
  queryData: {
    limit: 100,
    orderBy: 'lastThenFirstName',
    order: _base__WEBPACK_IMPORTED_MODULE_1__.QUERY_ORDER_ASC
  }
};
/**
 * Used to map an orderBy string to the actual value used
 * in a REST query from the context of a attendee.
 *
 * @param {string} 		orderBy
 * @return { string } 	Returns an actual orderBy string
 * 						for the REST query for the provided alias
 */

const mapOrderBy = orderBy => {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(orderByMap[orderBy]) ? orderBy : orderByMap[orderBy];
};
/**
 * Builds where conditions for an attendees endpoint request
 *
 * @param {number} forEventId    	ID of Event to retrieve attendees for
 * @param {number} forDatetimeId 	ID of Datetime to retrieve attendees for
 * @param {number} forTicketId 		ID of Ticket to retrieve attendees for
 * @param {number} forRegistrationId
 * @param {string} forStatusId 		ID of Status to retrieve attendees for
 * @param {string} showGravatar 	Boolean toggle for whether to display user Gravatar
 * @return {string}                	The assembled where conditions.
 */

const whereConditions = _ref => {
  let {
    forEventId = 0,
    forDatetimeId = 0,
    forTicketId = 0,
    forRegistrationId = 0,
    forStatusId = 'RAP',
    showGravatar = false
  } = _ref;
  const where = []; // ensure that entity IDs are integers

  forRegistrationId = parseInt(forRegistrationId, 10);
  forTicketId = parseInt(forTicketId, 10);
  forDatetimeId = parseInt(forDatetimeId, 10);
  forEventId = parseInt(forEventId, 10); // order of priority for provided arguments.

  if (forRegistrationId !== 0 && !isNaN(forRegistrationId)) {
    where.push(`where[Registration.REG_ID]=${forRegistrationId}`);
  } else if (forTicketId !== 0 && !isNaN(forTicketId)) {
    where.push(`where[Registration.Ticket.TKT_ID]=${forTicketId}`);
  } else if (forDatetimeId !== 0 && !isNaN(forDatetimeId)) {
    where.push(`where[Registration.Ticket.Datetime.DTT_ID]=${forDatetimeId}`);
  } else if (forEventId !== 0 && !isNaN(forEventId)) {
    where.push(`where[Registration.EVT_ID]=${forEventId}`);
  }

  if (_registration_constants__WEBPACK_IMPORTED_MODULE_2__.REGISTRATION_STATUS_IDS.includes(forStatusId)) {
    where.push(`where[Registration.Status.STS_ID]=${forStatusId}`);
  }

  if (showGravatar === true) {
    where.push('calculate=user_avatar');
  }

  return where.join('&');
};
/**
 * Return a query string for use by a REST request given a set of queryData.
 *
 * @param { Object } queryData
 * @return { string }  Returns the query string.
 */

const getQueryString = function () {
  let queryData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  queryData = { ...defaultQueryData.queryData,
    ...queryData
  };
  return (0,_base__WEBPACK_IMPORTED_MODULE_1__.getQueryString)(queryData, whereConditions, mapOrderBy);
};

/***/ }),

/***/ "./assets/src/data/model/base-date-formatter.js":
/*!******************************************************!*\
  !*** ./assets/src/data/model/base-date-formatter.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertEntitiesDatesToMoment": function() { return /* binding */ convertEntitiesDatesToMoment; },
/* harmony export */   "convertEntityDatesToMoment": function() { return /* binding */ convertEntityDatesToMoment; },
/* harmony export */   "formatDatesOnEntities": function() { return /* binding */ formatDatesOnEntities; },
/* harmony export */   "formatDatesOnEntity": function() { return /* binding */ formatDatesOnEntity; },
/* harmony export */   "formatEntitiesDatesToMysql": function() { return /* binding */ formatEntitiesDatesToMysql; },
/* harmony export */   "formatEntitiesDatesToSite": function() { return /* binding */ formatEntitiesDatesToSite; },
/* harmony export */   "formatEntityDatesToMysql": function() { return /* binding */ formatEntityDatesToMysql; },
/* harmony export */   "formatEntityDatesToSite": function() { return /* binding */ formatEntityDatesToSite; }
/* harmony export */ });
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External imports
 */


/**
 * Formats the date fields on provided entities.  Does not mutate original
 * entities.
 *
 * @param { Array } entities  An array of entity objects
 * @param { Array } entityDateFields  An array of field names that are date
 *   fields.
 * @param { string } format  The format to transform the date field values to.
 * @param { boolean } local      Whether or not to convert the date field value
 *   to the local timezone for the host.
 * @return { Array }  Returns a new array of new entities with the date field
 *   values formatted
 */

const formatDatesOnEntities = function () {
  let entities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let entityDateFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_0__.DATE_TIME_FORMAT_ISO8601;
  let local = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(entities) || (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(entityDateFields)) {
    return entities;
  }

  const formattedEntities = [];
  entities.forEach(entity => {
    formattedEntities.push(formatDatesOnEntity(entity, entityDateFields, format, local));
  });
  return formattedEntities;
};
/**
 * Formats the date fields on the provided entity.  Does not mutate original
 * entity.
 *
 * @param { Object } entity  An entity
 * @param { Array } entityDateFields  An array of field names that are date
 *   fields.
 * @param { string } format  The format to transform the date field values to.
 * @param { boolean } local      Whether or not to convert the date field value
 *   to the local timezone for the host.
 * @return { Object }  Returns a new entity with the date field values formatted
 */

const formatDatesOnEntity = function () {
  let entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let entityDateFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_0__.DATE_TIME_FORMAT_ISO8601;
  let local = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  const newEntity = { ...entity
  };
  entityDateFields.forEach(dateField => {
    if (newEntity[dateField]) {
      newEntity[dateField] = _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_0__.formatDateString(newEntity[dateField], format, local);
    }
  });
  return newEntity;
};
/**
 * Formats the date fields to mysql format on provided entities.  Does not
 * mutate original entities.
 *
 * @param { Array } entities  An array of entity objects
 * @param { Array } entityDateFields  An array of field names that are date
 *   fields.
 * @param { boolean } local      Whether or not to convert the date field value
 *   to the local timezone for the host.
 * @return { Array }  Returns a new array of new entities with the date field
 *   values formatted
 */

const formatEntitiesDatesToMysql = function () {
  let entities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let entityDateFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let local = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return formatDatesOnEntities(entities, entityDateFields, _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_0__.DATE_TIME_FORMAT_MYSQL, local);
};
/**
 * Formats the date fields to mysql format on provided entity.  Does not
 * mutate original entity.
 *
 * @param { Object } entity  An array of entity objects
 * @param { Array } entityDateFields  An array of field names that are date
 *   fields.
 * @param { boolean } local      Whether or not to convert the date field value
 *   to the local timezone for the host.
 * @return { Object }  Returns a new entity with the date field values formatted
 */

const formatEntityDatesToMysql = function () {
  let entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let entityDateFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let local = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return formatDatesOnEntity(entity, entityDateFields, _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_0__.DATE_TIME_FORMAT_MYSQL, local);
};
/**
 * Formats the date fields to the site format on provided entities.  Does not
 * mutate original entities.
 *
 * @param { Array } entities  An array of entity objects
 * @param { Array } entityDateFields  An array of field names that are date
 *   fields.
 * @param { boolean } local      Whether or not to convert the date field value
 *   to the local timezone for the host.
 * @return { Array }  Returns a new array of new entities with the date field
 *   values formatted
 */

const formatEntitiesDatesToSite = function () {
  let entities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let entityDateFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let local = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return formatDatesOnEntities(entities, entityDateFields, _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_0__.DATE_TIME_FORMAT_SITE, local);
};
/**
 * Formats the date fields to the site format on provided entity.  Does not
 * mutate original entity.
 *
 * @param { Object } entity  An array of entity objects
 * @param { Array } entityDateFields  An array of field names that are date
 *   fields.
 * @param { boolean } local      Whether or not to convert the date field value
 *   to the local timezone for the host.
 * @return { Object }  Returns a new entity with the date field values formatted
 */

const formatEntityDatesToSite = function () {
  let entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let entityDateFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let local = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return formatDatesOnEntity(entity, entityDateFields, _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_0__.DATE_TIME_FORMAT_SITE, local);
};
/**
 * Converts date field values to moment objects for the provided entities.
 * Does not mutate original entities.
 *
 * @param { Array } entities An array of entity objects
 * @param { Array } entityDateFields An array of field names that are date
 *   fields.
 * @return { Array } Returns a new array of new entities with the date field
 *   values converted to moment objects.
 */

const convertEntitiesDatesToMoment = function () {
  let entities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let entityDateFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(entities) || (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(entityDateFields)) {
    return entities;
  }

  const formattedEntities = [];
  entities.forEach(entity => {
    formattedEntities.push(convertEntityDatesToMoment(entity, entityDateFields));
  });
  return formattedEntities;
};
/**
 * Converts date field values to moment objects for the provided entity.
 * Does not mutate original entity.
 *
 * @param { Object } entity An entity.
 * @param { Array } entityDateFields An array of field names that are date
 *   fields.
 * @return { Object } Returns a new entity with the date field values converted
 *   to moment objects.
 */

const convertEntityDatesToMoment = function () {
  let entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let entityDateFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const newEntity = { ...entity
  };
  entityDateFields.forEach(dateField => {
    if (newEntity[dateField]) {
      newEntity[dateField] = _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_0__.stringToMoment(newEntity[dateField]);
    }
  });
  return newEntity;
};

/***/ }),

/***/ "./assets/src/data/model/base.js":
/*!***************************************!*\
  !*** ./assets/src/data/model/base.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALLOWED_ORDER_VALUES": function() { return /* binding */ ALLOWED_ORDER_VALUES; },
/* harmony export */   "GREATER_THAN": function() { return /* binding */ GREATER_THAN; },
/* harmony export */   "GREATER_THAN_AND_EQUAL": function() { return /* binding */ GREATER_THAN_AND_EQUAL; },
/* harmony export */   "LESS_THAN": function() { return /* binding */ LESS_THAN; },
/* harmony export */   "LESS_THAN_AND_EQUAL": function() { return /* binding */ LESS_THAN_AND_EQUAL; },
/* harmony export */   "QUERY_ORDER_ASC": function() { return /* binding */ QUERY_ORDER_ASC; },
/* harmony export */   "QUERY_ORDER_DESC": function() { return /* binding */ QUERY_ORDER_DESC; },
/* harmony export */   "getQueryString": function() { return /* binding */ getQueryString; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

const QUERY_ORDER_ASC = 'ASC';
const QUERY_ORDER_DESC = 'DESC';
const ALLOWED_ORDER_VALUES = ['asc', 'desc', 'ASC', 'DESC'];
const GREATER_THAN = encodeURIComponent('>');
const LESS_THAN = encodeURIComponent('<');
const GREATER_THAN_AND_EQUAL = encodeURIComponent('>=');
const LESS_THAN_AND_EQUAL = encodeURIComponent('<=');
/**
 * Return a query string for use by a REST request given a set of queryData.
 *
 * @param { Object } queryData
 * @param {Function} whereConditions  A function for prepping the where
 * 										conditions from the queryData.
 * @param {Function} mapOrderBy		A function for mapping incoming order_by
 * 										strings to the value needed for the
 * 										query_string.
 * @return { string }  					Returns the query string.
 */

const getQueryString = function () {
  let queryData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let whereConditions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => null;
  let mapOrderBy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : orderBy => orderBy;
  const where = whereConditions(queryData);
  const {
    limit,
    order,
    orderBy,
    defaultWhereConditions
  } = queryData;
  const queryParams = [];

  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(limit)) {
    queryParams.push(`limit=${limit}`);
  }

  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(defaultWhereConditions)) {
    queryParams.push(`default_where_conditions=${defaultWhereConditions}`);
  }

  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(mapOrderBy(orderBy))) {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(mapOrderBy(orderBy))) {
      for (const field of mapOrderBy(orderBy)) {
        queryParams.push(`order_by[${field}]=${order}`);
      }
    } else {
      queryParams.push(`order=${order}`);
      queryParams.push(`order_by=${mapOrderBy(orderBy)}`);
    }
  }

  let queryString = queryParams.join('&');

  if (where) {
    queryString += '&' + where;
  }

  return queryString;
};

/***/ }),

/***/ "./assets/src/data/model/checkin/constants.js":
/*!****************************************************!*\
  !*** ./assets/src/data/model/checkin/constants.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHECKIN_STATUS_ID": function() { return /* binding */ CHECKIN_STATUS_ID; },
/* harmony export */   "CHECKIN_STATUS_IDS": function() { return /* binding */ CHECKIN_STATUS_IDS; },
/* harmony export */   "MODEL_NAME": function() { return /* binding */ MODEL_NAME; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

const MODEL_NAME = 'checkin';
const CHECKIN_STATUS_ID = {
  STATUS_CHECKED_OUT: false,
  STATUS_CHECKED_IN: true,
  STATUS_CHECKED_NEVER: 2
};
const CHECKIN_STATUS_IDS = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.values)(CHECKIN_STATUS_ID);

/***/ }),

/***/ "./assets/src/data/model/checkin/index.js":
/*!************************************************!*\
  !*** ./assets/src/data/model/checkin/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHECKIN_STATUS_ID": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHECKIN_STATUS_ID; },
/* harmony export */   "CHECKIN_STATUS_IDS": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CHECKIN_STATUS_IDS; },
/* harmony export */   "MODEL_NAME": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MODEL_NAME; },
/* harmony export */   "defaultQueryData": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.defaultQueryData; },
/* harmony export */   "getQueryString": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.getQueryString; },
/* harmony export */   "mapOrderBy": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.mapOrderBy; },
/* harmony export */   "optionsEntityMap": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.optionsEntityMap; },
/* harmony export */   "queryDataTypes": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.queryDataTypes; },
/* harmony export */   "whereConditions": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.whereConditions; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/checkin/constants.js");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query */ "./assets/src/data/model/checkin/query.js");



/***/ }),

/***/ "./assets/src/data/model/checkin/query.js":
/*!************************************************!*\
  !*** ./assets/src/data/model/checkin/query.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultQueryData": function() { return /* binding */ defaultQueryData; },
/* harmony export */   "getQueryString": function() { return /* binding */ getQueryString; },
/* harmony export */   "mapOrderBy": function() { return /* binding */ mapOrderBy; },
/* harmony export */   "optionsEntityMap": function() { return /* binding */ optionsEntityMap; },
/* harmony export */   "queryDataTypes": function() { return /* binding */ queryDataTypes; },
/* harmony export */   "whereConditions": function() { return /* binding */ whereConditions; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../status */ "./assets/src/data/model/status/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base */ "./assets/src/data/model/base.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/checkin/constants.js");
/**
 * External imports
 */



/**
 * Internal imports
 */



/**
 * Described attributes for this model
 *
 * @type {{attributes: *}}
 */

const queryDataTypes = {
  forDatetimeId: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
  forEventId: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
  forRegistrationId: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
  forTicketId: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
  forStatusId: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(_constants__WEBPACK_IMPORTED_MODULE_3__.CHECKIN_STATUS_IDS),
  queryData: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    limit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    orderBy: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['CHK_ID', 'REG_ID', 'CHK_timestamp', 'DTT_ID']),
    order: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(_base__WEBPACK_IMPORTED_MODULE_2__.ALLOWED_ORDER_VALUES)
  })
};
const optionsEntityMap = {
  default: () => {
    return [{
      label: (0,_status__WEBPACK_IMPORTED_MODULE_1__.prettyStatus)(_constants__WEBPACK_IMPORTED_MODULE_3__.CHECKIN_STATUS_ID.STATUS_CHECKED_OUT),
      value: _constants__WEBPACK_IMPORTED_MODULE_3__.CHECKIN_STATUS_ID.STATUS_CHECKED_OUT
    }, {
      label: (0,_status__WEBPACK_IMPORTED_MODULE_1__.prettyStatus)(_constants__WEBPACK_IMPORTED_MODULE_3__.CHECKIN_STATUS_ID.STATUS_CHECKED_IN),
      value: _constants__WEBPACK_IMPORTED_MODULE_3__.CHECKIN_STATUS_ID.STATUS_CHECKED_IN
    }];
  }
};
/**
 * Default attributes for this model
 *
 * @type {
 * 	{
 * 		attributes: {
 * 			limit: number,
 * 			orderBy: string,
 * 			order: string,
 *   	}
 *   }
 * }
 */

const defaultQueryData = {
  queryData: {
    limit: 100,
    orderBy: 'CHK_timestamp',
    order: _base__WEBPACK_IMPORTED_MODULE_2__.QUERY_ORDER_DESC
  }
};
/**
 * Used to map an orderBy string to the actual value used in a REST query from
 * the context of a registration.
 *
 * @param {string} orderBy
 *
 * @return { string } Returns an actual orderBy string for the REST query for
 *                      the provided alias
 */

const mapOrderBy = orderBy => {
  const orderByMap = {
    timestamp: 'CHK_timestamp',
    id: 'CHK_ID'
  };
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(orderByMap[orderBy]) ? orderBy : orderByMap[orderBy];
};
/**
 * Builds where conditions for an registrations endpoint request
 *
 * @param {number} forDatetimeId    	ID of Event to retrieve registrations for
 * @param {number} forEventId    ID of Attendee to retrieve registrations for
 * @param {number} forRegistrationId ID of Transaction to retrieve registrations for
 * @param {number} forTicketId 		ID of Ticket to retrieve registrations for
 * @param {string} forStatusId 		ID of Status to retrieve registrations for
 * @return {string}                	The assembled where conditions.
 */

const whereConditions = _ref => {
  let {
    forDatetimeId = 0,
    forEventId = 0,
    forRegistrationId = 0,
    forTicketId = 0,
    forStatusId = ''
  } = _ref;
  const where = [];
  forEventId = parseInt(forEventId, 10);

  if (forEventId !== 0 && !isNaN(forEventId)) {
    where.push('where[Registration.EVT_ID]=' + forEventId);
  }

  forDatetimeId = parseInt(forDatetimeId, 10);

  if (forDatetimeId !== 0 && !isNaN(forDatetimeId)) {
    where.push('where[DTT_ID]=' + forDatetimeId);
  }

  forRegistrationId = parseInt(forRegistrationId, 10);

  if (forRegistrationId !== 0 && !isNaN(forRegistrationId)) {
    where.push('where[REG_ID]=' + forRegistrationId);
  }

  forTicketId = parseInt(forTicketId, 10);

  if (forTicketId !== 0 && !isNaN(forTicketId)) {
    where.push('where[Registration.TKT_ID]=' + forTicketId);
  }

  if (forStatusId !== '' && forStatusId !== null) {
    where.push('where[CHK_in]=' + forStatusId);
  }

  return where.join('&');
};
/**
 * Return a query string for use by a REST request given a set of queryData.
 *
 * @param { Object } queryData
 * @return { string }  Returns the query string.
 */

const getQueryString = function () {
  let queryData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  queryData = { ...defaultQueryData.queryData,
    ...queryData
  };
  return (0,_base__WEBPACK_IMPORTED_MODULE_2__.getQueryString)(queryData, whereConditions, mapOrderBy);
};

/***/ }),

/***/ "./assets/src/data/model/datetime/constants.js":
/*!*****************************************************!*\
  !*** ./assets/src/data/model/datetime/constants.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATETIME_STATUS_ID": function() { return /* binding */ DATETIME_STATUS_ID; },
/* harmony export */   "DATETIME_STATUS_IDS": function() { return /* binding */ DATETIME_STATUS_IDS; },
/* harmony export */   "MODEL_NAME": function() { return /* binding */ MODEL_NAME; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const MODEL_NAME = 'datetime';
const DATETIME_STATUS_ID = {
  SOLD_OUT: 'DTS',
  ACTIVE: 'DTA',
  UPCOMING: 'DTU',
  POSTPONED: 'DTP',
  CANCELLED: 'DTC',
  EXPIRED: 'DTE',
  INACTIVE: 'DTI'
};
const DATETIME_STATUS_IDS = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.values)(DATETIME_STATUS_ID);

/***/ }),

/***/ "./assets/src/data/model/datetime/formatter.js":
/*!*****************************************************!*\
  !*** ./assets/src/data/model/datetime/formatter.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATE_FIELDS": function() { return /* binding */ DATE_FIELDS; },
/* harmony export */   "prettyDateFromDateTime": function() { return /* binding */ prettyDateFromDateTime; }
/* harmony export */ });
/* harmony import */ var _base_date_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-date-formatter */ "./assets/src/data/model/base-date-formatter.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Internal imports
 */

/**
 * External imports
 */




/**
 * Array of fields that have date information
 *
 * @type { string[] }
 */

const DATE_FIELDS = ['DTT_EVT_start', 'DTT_EVT_end'];
/**
 * Will hold the dynamically generated list of formatters for dates.  Formatters
 * are functions defined in `../base-date-formatter` but wrapped by dynamically
 * generated functions (callable via same name) that automatically receive the
 * correct dateFieldsMap argument.
 *
 * Eg.  `../base-date-formatter has
 * formatDatesOnEntities( entities, entityDateFields, format, local );
 * When importing `formatDatesOnEntities` from this file, you can call it simply
 * by doing this:
 *
 * formatDatesOnEntities( dateTimeObjects, format, local );
 *
 * Notice that it's called without the entityDateFields argument because that's
 * provided by this generator.
 *
 * @type {{}}
 */

const formatters = {};
(0,lodash__WEBPACK_IMPORTED_MODULE_1__.forOwn)(_base_date_formatter__WEBPACK_IMPORTED_MODULE_0__, (implementation, functionName) => {
  formatters[functionName] = function () {
    for (var _len = arguments.length, incomingArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      incomingArgs[_key] = arguments[_key];
    }

    const firstArg = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.pullAt)(incomingArgs, 0);
    return implementation(firstArg[0], DATE_FIELDS, ...incomingArgs);
  };
});
/**
 * This will spit out a prettified label for the provided DateTime entity.
 *
 * If there is a DTT_name, the format will be:
 * `DTT_name (DTT_EVT_start - DTT_EVT_end)`
 *
 * If no DTT_name then:
 * `DTT_EVT_start - DTT_EVT_end`
 *
 * This will account for if both start and end are in the same day and simply
 * use time for the end part.
 *
 * @param { BaseEntity } DateTimeEntity
 * @return { string }  A formatted string representing the provided
 *    DateTimeEntity.
 */

const prettyDateFromDateTime = DateTimeEntity => {
  let content = '';

  if ((0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__.isModelEntityOfModel)(DateTimeEntity, 'datetime')) {
    if (DateTimeEntity.DTT_EVT_start.hasSame(DateTimeEntity.DTT_EVT_end, 'day')) {
      content += (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__.allDateTimesAsString)(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__.SEPARATOR_SPACE_DASH_SPACE, DateTimeEntity.DTT_EVT_start.toFormat(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__.DATE_TIME_FORMAT_SITE), DateTimeEntity.DTT_EVT_end.toFormat(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__.TIME_FORMAT_SITE));
    } else {
      content += (0,_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__.allDateTimesAsString)(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__.SEPARATOR_SPACE_DASH_SPACE, DateTimeEntity.DTT_EVT_start.toFormat(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__.DATE_TIME_FORMAT_SITE), DateTimeEntity.DTT_EVT_end.toFormat(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__.DATE_TIME_FORMAT_SITE));
    }

    content = DateTimeEntity.DTT_name ? `${DateTimeEntity.DTT_name} (${content})` : content;
  }

  return content;
};
/* harmony default export */ __webpack_exports__["default"] = (formatters);

/***/ }),

/***/ "./assets/src/data/model/datetime/index.js":
/*!*************************************************!*\
  !*** ./assets/src/data/model/datetime/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATETIME_STATUS_ID": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.DATETIME_STATUS_ID; },
/* harmony export */   "DATETIME_STATUS_IDS": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.DATETIME_STATUS_IDS; },
/* harmony export */   "DATE_FIELDS": function() { return /* reexport safe */ _formatter__WEBPACK_IMPORTED_MODULE_2__.DATE_FIELDS; },
/* harmony export */   "MODEL_NAME": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MODEL_NAME; },
/* harmony export */   "defaultQueryData": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.defaultQueryData; },
/* harmony export */   "getQueryString": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.getQueryString; },
/* harmony export */   "mapOrderBy": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.mapOrderBy; },
/* harmony export */   "nowDateAndTime": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.nowDateAndTime; },
/* harmony export */   "prettyDateFromDateTime": function() { return /* reexport safe */ _formatter__WEBPACK_IMPORTED_MODULE_2__.prettyDateFromDateTime; },
/* harmony export */   "queryDataTypes": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.queryDataTypes; },
/* harmony export */   "whereConditions": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.whereConditions; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/datetime/constants.js");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query */ "./assets/src/data/model/datetime/query.js");
/* harmony import */ var _formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatter */ "./assets/src/data/model/datetime/formatter.js");




/***/ }),

/***/ "./assets/src/data/model/datetime/query.js":
/*!*************************************************!*\
  !*** ./assets/src/data/model/datetime/query.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultQueryData": function() { return /* binding */ defaultQueryData; },
/* harmony export */   "getQueryString": function() { return /* binding */ getQueryString; },
/* harmony export */   "mapOrderBy": function() { return /* binding */ mapOrderBy; },
/* harmony export */   "nowDateAndTime": function() { return /* binding */ nowDateAndTime; },
/* harmony export */   "queryDataTypes": function() { return /* binding */ queryDataTypes; },
/* harmony export */   "whereConditions": function() { return /* binding */ whereConditions; }
/* harmony export */ });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "moment-timezone");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base */ "./assets/src/data/model/base.js");
/**
 * External imports
 */



/**
 * Internal dependencies
 */


const nowDateAndTime = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()();
/**
 * Described attributes for this model
 *
 * @type {{attributes: *}}
 */

const queryDataTypes = {
  queryData: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    limit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    orderBy: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['DTT_name', 'DTT_ID', 'start_date', 'end_date']),
    order: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(_base__WEBPACK_IMPORTED_MODULE_2__.ALLOWED_ORDER_VALUES),
    showExpired: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    month: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().month)
  })
};
/**
 * Default attributes for this model
 *
 * @type {
 * 	{
 * 		attributes: {
 * 			limit: number,
 * 			orderBy: string,
 * 			order: string,
 *   		showExpired: boolean
 *   	}
 *   }
 * }
 */

const defaultQueryData = {
  queryData: {
    limit: 100,
    orderBy: 'start_date',
    order: _base__WEBPACK_IMPORTED_MODULE_2__.QUERY_ORDER_DESC,
    showExpired: false
  }
};
/**
 * Used to map an orderBy string to the actual value used in a REST query from
 * the context of an event.
 *
 * @param {string} orderBy
 *
 * @return { string } Returns an actual orderBy string for the REST query for
 *                      the provided alias
 */

const mapOrderBy = orderBy => {
  const orderByMap = {
    start_date: 'DTT_EVT_start',
    end_date: 'DTT_EVT_end'
  };
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(orderByMap[orderBy]) ? orderBy : orderByMap[orderBy];
};
/**
 * Builds where conditions for an events endpoint request using provided
 * information.
 *
 * @param {number} forEventId  ID for Event to retrieve datetimes from
 * @param {boolean} showExpired  Whether or not to include expired events.
 * @param {string} month         Return events for the given month.  Can be any
 *                                 in any month format recognized by moment.
 * @return {string}             The assembled where conditions.
 */

const whereConditions = _ref => {
  let {
    forEventId = 0,
    showExpired = false,
    month = 'none'
  } = _ref;
  const where = [];

  if (!showExpired) {
    where.push('where[DTT_EVT_end**expired][]=' + _base__WEBPACK_IMPORTED_MODULE_2__.GREATER_THAN + '&where[DTT_EVT_end**expired][]=' + nowDateAndTime.local().format());
  }

  if (month && month !== 'none') {
    where.push('where[DTT_EVT_start][]=' + _base__WEBPACK_IMPORTED_MODULE_2__.GREATER_THAN_AND_EQUAL + '&where[DTT_EVT_start][]=' + moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()().month(month).startOf('month').local().format());
    where.push('where[DTT_EVT_end][]=' + _base__WEBPACK_IMPORTED_MODULE_2__.LESS_THAN_AND_EQUAL + '&where[DTT_EVT_end][]=' + moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()().month(month).endOf('month').local().format());
  }

  if (parseInt(forEventId, 10) !== 0) {
    where.push('where[Event.EVT_ID]=' + forEventId);
  }

  return where.join('&');
};
/**
 * Return a query string for use by a REST request given a set of queryData.
 *
 * @param { Object } queryData
 * @return { string }  Returns the query string.
 */

const getQueryString = function () {
  let queryData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  queryData = { ...defaultQueryData.queryData,
    ...queryData
  };
  return (0,_base__WEBPACK_IMPORTED_MODULE_2__.getQueryString)(queryData, whereConditions, mapOrderBy);
};

/***/ }),

/***/ "./assets/src/data/model/default-model-state.js":
/*!******************************************************!*\
  !*** ./assets/src/data/model/default-model-state.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_CORE_STATE": function() { return /* binding */ DEFAULT_CORE_STATE; },
/* harmony export */   "DEFAULT_LISTS_STATE": function() { return /* binding */ DEFAULT_LISTS_STATE; },
/* harmony export */   "DEFAULT_SCHEMA_STATE": function() { return /* binding */ DEFAULT_SCHEMA_STATE; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memize */ "./node_modules/memize/index.js");
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _endpoints_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endpoints.js */ "./assets/src/data/model/endpoints.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Receives an object map of modelName to endpoint and maps that to a default
 * map of modelName to empty object.
 *
 * @param { Object } modelNameEndpoints
 * @return { Object } An object of { { modelName } : {} }
 */

const mapToObjectValues = modelNameEndpoints => {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.mapValues)(modelNameEndpoints, function () {
    return {};
  });
};

const getDefaultModelEntitiesObject = memize__WEBPACK_IMPORTED_MODULE_1___default()(() => mapToObjectValues(_endpoints_js__WEBPACK_IMPORTED_MODULE_2__.endpoints));
/**
 * Provides the default state to be used by stores containing lists.
 *
 * @type { Object }
 */

const DEFAULT_LISTS_STATE = mapToObjectValues(_endpoints_js__WEBPACK_IMPORTED_MODULE_2__.endpoints);
/**
 * Provides the default state to be used by the core store.
 *
 * @type {{entities: {}, entityIds: {}, dirty: {}}}
 */

const DEFAULT_CORE_STATE = {
  entities: { ...getDefaultModelEntitiesObject()
  },
  relations: {},
  dirty: {
    relations: {
      index: {},
      delete: {},
      add: {}
    },
    trash: {},
    delete: {}
  }
};
/**
 * Provides the default state to be used by the schema store.
 *
 * @type {Object}
 */

const DEFAULT_SCHEMA_STATE = {
  schema: { ...getDefaultModelEntitiesObject()
  },
  factory: { ...getDefaultModelEntitiesObject()
  },
  relationEndpoints: { ...getDefaultModelEntitiesObject()
  },
  relationSchema: {}
};

/***/ }),

/***/ "./assets/src/data/model/endpoints.js":
/*!********************************************!*\
  !*** ./assets/src/data/model/endpoints.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyQueryString": function() { return /* binding */ applyQueryString; },
/* harmony export */   "baseRestRoute": function() { return /* binding */ baseRestRoute; },
/* harmony export */   "endpoints": function() { return /* binding */ endpoints; },
/* harmony export */   "getEndpoint": function() { return /* binding */ getEndpoint; },
/* harmony export */   "stripBaseRouteFromUrl": function() { return /* binding */ stripBaseRouteFromUrl; }
/* harmony export */ });
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assertions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertions */ "./assets/src/data/model/assertions.js");
/**
 * External imports
 */

/**
 * Internal imports
 */


/**
 * All available endpoints exposed via the eejs.data global from the server.
 *
 * @type {{}}
 */

const {
  collection_endpoints: endpoints = {},
  base_rest_route: baseRestRoute
} = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__.data.paths;
/**
 * Retrieves the endpoint for the provided model.
 *
 * @param {string} modelName  What model to retrieve the endpoint for.
 * @return {string}  The endpoint for the provided model.
 * @throws {Exception}
 */

const getEndpoint = modelName => {
  (0,_assertions__WEBPACK_IMPORTED_MODULE_1__.assertEntityHasKey)(modelName, endpoints);
  return endpoints[modelName];
};
/**
 * Applies the provided queryString to the endpoint for the provided model name.
 *
 * @param {string} modelName  What model the final string is for.
 * @param {string} queryString  The query being appended to the endpoint.
 * @return {string} The final assembled query string.
 */

const applyQueryString = function (modelName) {
  let queryString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return queryString !== '' ? getEndpoint(modelName) + '?' + queryString : getEndpoint(modelName);
};
/**
 * Strips the base_rest_route (i.e. https://myurl.com/wp-json/) from the provided
 * url string.
 *
 * @param {string} url
 * @return {string} the url with the base rest route removed.
 */

const stripBaseRouteFromUrl = url => {
  return url.replace(baseRestRoute, '');
};

/***/ }),

/***/ "./assets/src/data/model/entity-factory/assertions.js":
/*!************************************************************!*\
  !*** ./assets/src/data/model/entity-factory/assertions.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assertValidFieldAndValueAgainstSchema": function() { return /* binding */ assertValidFieldAndValueAgainstSchema; },
/* harmony export */   "assertValidSchema": function() { return /* binding */ assertValidSchema; },
/* harmony export */   "assertValidSchemaFieldProperties": function() { return /* binding */ assertValidSchemaFieldProperties; },
/* harmony export */   "assertValidValueForPreparedField": function() { return /* binding */ assertValidValueForPreparedField; },
/* harmony export */   "maybeAssertValueObject": function() { return /* binding */ maybeAssertValueObject; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _booleans__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booleans */ "./assets/src/data/model/entity-factory/booleans.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validators */ "./assets/src/data/model/entity-factory/validators.js");
/* harmony import */ var _extractors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extractors */ "./assets/src/data/model/entity-factory/extractors.js");
/**
 * External imports
 */





/**
 * Internal imports
 */




/**
 * Asserts whether the provided field value is a known value object.
 *
 * Note: this only asserts known value objects, if the value is not detected as
 * a known value object it is passed back as is.
 *
 * @param {string} fieldName
 * @param {*} fieldValue
 * @param {Object} schema
 * @throws InvalidDateTime
 * @throws TypeError
 */

const maybeAssertValueObject = (fieldName, fieldValue, schema) => {
  if ((0,_booleans__WEBPACK_IMPORTED_MODULE_5__.isDateTimeField)(fieldName, schema)) {
    _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__.ServerDateTime.assertIsDateTime(fieldValue);
  }

  if ((0,_booleans__WEBPACK_IMPORTED_MODULE_5__.isMoneyField)(fieldName, schema)) {
    _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__.Money.assertMoney(fieldValue);
  }
};
/**
 * Asserts whether the provided object is a valid model schema object.
 *
 * Currently, an object is considered a valid model schema if it has a
 * 'properties' property.
 *
 * @param {*} schema
 * @throws InvalidSchema
 */

const assertValidSchema = schema => {
  if (!(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__.isSchema)(schema)) {
    throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__.InvalidSchema('This is an invalid schema for a model.');
  }
};
/**
 * Asserts that the given field exists in the provided schema and the shape for
 * the schema entry on that field is expected.
 *
 * @param {string} modelName  The model the schema belongs to, this is used for
 * error messages.
 * @param {string} fieldName  The field being checked against the schema
 * @param {Object} schema     The schema for the model used for validation
 * @throws InvalidSchema
 * @throws TypeError
 */

const assertValidSchemaFieldProperties = (modelName, fieldName, schema) => {
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(schema[fieldName])) {
    throw new TypeError((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)('The given "%s" fieldName does not have a defined schema for the model "%s"', fieldName, modelName));
  }

  if (schema[fieldName].type === 'object') {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(schema[fieldName].properties)) {
      throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__.InvalidSchema((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)('The schema for the field %s on the model %s is of type "object" but does not have a properties property.', fieldName, modelName));
    }

    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(schema[fieldName].properties.raw)) {
      throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__.InvalidSchema((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)('The schema for the field %s on the model %s is of type "object" but does not have a raw property in it\'s "properties" property.', fieldName, modelName));
    }

    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(schema[fieldName].properties.raw.type)) {
      throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__.InvalidSchema((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)('The schema for the field %s on the model %s is of type "object" and has a properties.raw property, however there is no "type" defined for the raw property.', fieldName, modelName));
    }
  }
};
/**
 * Asserts that the value provided for the prepared field is valid according to
 * the schema.
 *
 * Prepared fields are:
 *
 * - fields having values that are set as a value object and expect a value
 *   object on updates/inserts.
 * - fields that are the equivalent `raw` value when the field in the schema is
 *   defined to have raw and rendered/pretty values.
 *
 * Note:  This validates against prepared fields which means that:
 *
 * - if the prepared field has a value object as its value, then that value
 *   object is validated before any other validation.
 * - if the prepared field represents an object in the schema, then its value is
 *   validated against the `raw` type in the schema.
 *
 * @param {string} fieldName
 * @param {*} fieldValue
 * @param {Object} instance
 * @throws TypeError
 * @throws InvalidDateTime
 */

const assertValidValueForPreparedField = (fieldName, fieldValue, instance) => {
  const {
    schema
  } = instance;
  let isValid = (0,_validators__WEBPACK_IMPORTED_MODULE_6__.isShallowValidValueForField)(fieldName, fieldValue, schema);

  if (!isValid && schema[fieldName].type === 'object' && schema[fieldName].properties) {
    isValid = schema[fieldName].properties.raw.enum ? (0,_validators__WEBPACK_IMPORTED_MODULE_6__.validateEnumType)(schema[fieldName].properties.raw.type, schema[fieldName].properties.raw.enum, fieldValue) : (0,_validators__WEBPACK_IMPORTED_MODULE_6__.validateType)(schema[fieldName].properties.raw.type, (0,_extractors__WEBPACK_IMPORTED_MODULE_7__.maybeConvertFromValueObjectWithAssertions)(fieldName, fieldValue, schema));

    if (!isValid) {
      throw new TypeError((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)('The given "%1$s" field  is not valid for the defined schema.  It\'s `raw` property Value (%2$s) is not the correct expected type (%3$s).', fieldName, fieldValue, schema[fieldName].properties.raw.type));
    }
  }

  if (!isValid) {
    throw new TypeError((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)('The given "%1$s" field\'s Value (%2$s) is not valid for the defined schema type (%3$s).', fieldName, fieldValue, schema[fieldName].type));
  }
};
/**
 * Asserts whether the value for the given field is valid according to the
 * schema.
 *
 * This is used on entity construction and does not validate prepared field
 * values (see assert assertValidValueForPreparedField).
 *
 * This method also asserts that the schema has valid schema field properties.
 *
 * @param {string} modelName
 * @param {string} fieldName
 * @param {*} fieldValue
 * @param {Object} instance
 * @throws TypeError
 * @throws InvalidSchema
 */

const assertValidFieldAndValueAgainstSchema = (modelName, fieldName, fieldValue, instance) => {
  const schema = instance.schema;
  const validationType = (0,_validators__WEBPACK_IMPORTED_MODULE_6__.validateTypeForField)(fieldName, instance);
  assertValidSchemaFieldProperties(modelName, fieldName, schema);
  let isValid = (0,_validators__WEBPACK_IMPORTED_MODULE_6__.isShallowValidValueForField)(fieldName, fieldValue, schema, false); // account for fieldName fieldValues that have property schema. For Model
  // Entities, only the VALIDATE_TYPE property is cared about.

  if (schema[fieldName].type === 'object' && schema[fieldName].properties) {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(fieldValue[validationType])) {
      throw new TypeError((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)('The given "%1$s" value is not valid for the defined schema. It must be an object and it must have a `%2$s` key.', fieldName, validationType));
    }

    isValid = schema[fieldName].properties[validationType].enum ? (0,_validators__WEBPACK_IMPORTED_MODULE_6__.validateEnumType)(schema[fieldName].properties[validationType].type, schema[fieldName].properties.raw.enum, fieldValue[validationType]) : (0,_validators__WEBPACK_IMPORTED_MODULE_6__.validateType)(schema[fieldName].properties[validationType].type, fieldValue[validationType]);

    if (!isValid) {
      throw new TypeError((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)('The given "%1$s" value is not valid for the defined schema.  It\'s `%2$s` property value (%3$s) is not the correct expected type (%4$s).', fieldName, validationType, fieldValue, schema[fieldName].properties[validationType].type));
    }
  }

  if (!isValid) {
    throw new TypeError((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)('The given "%1$s" field\'s value (%2$s) is not valid for the defined schema type (%3$s).', fieldName, fieldValue, schema[fieldName].type));
  }
};

/***/ }),

/***/ "./assets/src/data/model/entity-factory/base-entity.js":
/*!*************************************************************!*\
  !*** ./assets/src/data/model/entity-factory/base-entity.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! memize */ "./node_modules/memize/index.js");
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assertions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assertions */ "./assets/src/data/model/entity-factory/assertions.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create */ "./assets/src/data/model/entity-factory/create.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/entity-factory/constants.js");


let _PRIVATE_PROPERTIES$S, _PRIVATE_PROPERTIES$V;

/**
 * External imports
 */


/**
 * Internal imports
 */




/**
 * BaseEntity is the basic class for all entities.  createEntityFactory returns
 * an instance of this and all the getters/setters for fields etc are
 * dynamically created via the constructor.
 */

_PRIVATE_PROPERTIES$S = _constants__WEBPACK_IMPORTED_MODULE_5__.PRIVATE_PROPERTIES.SAVE_STATE;
_PRIVATE_PROPERTIES$V = _constants__WEBPACK_IMPORTED_MODULE_5__.PRIVATE_PROPERTIES.VALIDATE_TYPES;

class BaseEntity {
  /**
   * Constructor for Base Entity
   *
   * @param {string} modelName
   * @param {Object} entityFieldsAndValues
   * @param {Object} schema
   * @param {Array}fieldPrefixes
   * @param {boolean} isNew
   */
  constructor(modelName, entityFieldsAndValues, schema) {
    let fieldPrefixes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    let isNew = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _PRIVATE_PROPERTIES$S, _constants__WEBPACK_IMPORTED_MODULE_5__.SAVE_STATE.CLEAN);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _PRIVATE_PROPERTIES$V, {});

    (0,_assertions__WEBPACK_IMPORTED_MODULE_3__.assertValidSchema)(schema);
    fieldPrefixes = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isArray)(fieldPrefixes) ? fieldPrefixes : [];
    (0,_create__WEBPACK_IMPORTED_MODULE_4__.createGetter)(this, 'fieldPrefixes', fieldPrefixes);
    (0,_create__WEBPACK_IMPORTED_MODULE_4__.createGetter)(this, 'schema', schema.properties);
    (0,_create__WEBPACK_IMPORTED_MODULE_4__.setSaveState)(this, isNew ? _constants__WEBPACK_IMPORTED_MODULE_5__.SAVE_STATE.NEW : _constants__WEBPACK_IMPORTED_MODULE_5__.SAVE_STATE.CLEAN);
    (0,_create__WEBPACK_IMPORTED_MODULE_4__.createGetter)(this, 'modelName', modelName);
    (0,_create__WEBPACK_IMPORTED_MODULE_4__.createGetter)(this, 'originalFieldsAndValues', entityFieldsAndValues);
    (0,_create__WEBPACK_IMPORTED_MODULE_4__.createGetter)(this, 'fieldsToPersistOnInsert', new Set(Object.keys(entityFieldsAndValues)));
    (0,_create__WEBPACK_IMPORTED_MODULE_4__.createEntityGettersAndSetters)(this);
    (0,_create__WEBPACK_IMPORTED_MODULE_4__.createPersistingGettersAndSetters)(this);
    Object.seal(this);
  }
  /**
   * Returns the current save state on the entity.
   *
   * Save state describes whether the entity is:
   *
   * - SAVE_STATE.NEW: The entity has never been persisted to storage.
   * - SAVE_STATE.CLEAN: The entity exists in storage and has not been mutated.
   * - SAVE_STATE.DIRTY: The entity is mutated and changes have not been
   * persisted to storage.
   *
   * @return {symbol}  Returns the current save state for the entity.
   */


  get saveState() {
    return this[_constants__WEBPACK_IMPORTED_MODULE_5__.PRIVATE_PROPERTIES.SAVE_STATE];
  }
  /**
   * Whether the current save state is SAVE_STATE.NEW
   *
   * @return {boolean}  True means SAVE_STATE.NEW is the save state.
   */


  get isNew() {
    return this.saveState === _constants__WEBPACK_IMPORTED_MODULE_5__.SAVE_STATE.NEW;
  }
  /**
   * Whether the current save state is SAVE_STATE.DIRTY
   *
   * @return {boolean}  True means SAVE_STATE.DIRTY is the save state.
   */


  get isDirty() {
    return this.saveState === _constants__WEBPACK_IMPORTED_MODULE_5__.SAVE_STATE.DIRTY;
  }
  /**
   * Whether the current save state is SAVE_STATE.CLEAN
   *
   * @return {boolean}  True means SAVE_STATE.CLEAN is the save state.
   */


  get isClean() {
    return this.saveState === _constants__WEBPACK_IMPORTED_MODULE_5__.SAVE_STATE.CLEAN;
  }
  /**
   * Whether the entity has any password protected fields.
   *
   * @return {boolean} True means it does, false means it doesn't.
   */


  get isPasswordProtected() {
    return this.protectedFields.length > 0;
  }
  /**
   * Whether the given fieldName is a password protected field.
   *
   * @return {function(string): boolean}  Returns a function that can be used
   * to check if the given field name is a protected field in this entity.
   */


  get isFieldPasswordProtected() {
    return fieldName => this.protectedFields.indexOf(fieldName) > -1;
  }
  /**
   * Used to clone the current entity object.  This results in an instance of
   * BaseEntity that is equivalent as this current instance (except it will
   * have a new generated id).
   *
   * @return {BaseEntity} A new instance of BaseEntity
   */


  get clone() {
    var _this = this;

    return function () {
      let keepId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      const createFactory = memize__WEBPACK_IMPORTED_MODULE_2___default()(() => createEntityFactory(_this.modelName, {
        $schema: {},
        properties: _this.schema
      }, _this.fieldPrefixes));
      const factory = createFactory();
      const newEntity = factory.createNew(_this.forClone);

      if (keepId) {
        newEntity.id = _this.id;
        (0,_create__WEBPACK_IMPORTED_MODULE_4__.setSaveState)(newEntity, _this.saveState, true);
      }

      return newEntity;
    };
  }

}
/**
 * A function that gives a class the provided name
 * (and optionally extends the provided object).
 *
 * @param {string} name
 * @param {Object} extendedClass
 * @return {Function} A function
 */


(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(BaseEntity, "name", 'BaseEntity');

const nameClass = (name, extendedClass) => {
  return class extends extendedClass {
    static get name() {
      return name;
    }

  };
};
/**
 * A factory for entity factories.
 *
 * Calling this returns an object of factory functions that instantiate an
 * instance of a named Entity.  The modelName is used as the name for the new
 * entity.
 *
 * Two methods are available on the object returned: `createNew` and
 * `fromExisting`.
 *
 * @param {string} modelName  The model for the entity
 * @param {Object} schema     The schema for the model. This is the schema
 * provided by the OPTIONS endpoint for the model.
 * @param {Array} fieldPrefixes An array of field prefixes for base fields on
 * on the model (eg. Event model has `[ EVT ]` prefixes on fields, Datetime model
 * has [ `DTT`, `DTT_EVT` ]
 * @return {Object} A factory for instantiating an entity instance.
 */


const createEntityFactory = function (modelName, schema) {
  let fieldPrefixes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  const Entity = nameClass((0,lodash__WEBPACK_IMPORTED_MODULE_1__.upperFirst)((0,lodash__WEBPACK_IMPORTED_MODULE_1__.camelCase)(modelName)), BaseEntity);
  return {
    /**
     * Exposes modelName so client code can derive what model this factory
     * is for from any given factory.
     *
     * @type string
     */
    modelName,

    /**
     * This is the class definition for the Entity.  Typically this is
     * retrieved for the ability to do instanceof checks.
     */
    classDef: Entity,

    /**
     * This returns an instance of Entity for the given arguments with the
     * indication this is a new non-persisted entity.  This means:
     *
     * - All field values are populated and any not provided will be
     *   populated with default values defined by the schema.
     * - Generates temporary unique ids for the primary key fields on the
     *   entity (using cuid).
     * - Sets the `isNew` flag to true for the entity so client code is able
     *   to discover which entities have never been persisted.
     * - This factory method expects fields and values to be "prepared".
     *   What that means is that for any fields that the schema described as
     *   having a `raw` property (i.e. { EVT_desc: { raw: 'something' } })
     *   the value should be of the correct type for that raw property and.
     *   This also means is that for any fields the schema describes as a
     *   date-time (format) or money (format) field, the value is expected
     *   to be the corresponding value object.
     *
     * @param {Object} fieldsAndValues
     * @return {Entity} an instance of Entity
     */
    createNew: fieldsAndValues => new Entity(modelName, fieldsAndValues, schema, fieldPrefixes, true),

    /**
     * This returns an instance of Entity for the given arguments with the
     * indication this represents the entity as is in the db.  This means:
     *
     * - All field values are NOT populated if missing values.  This is
     *   especially important for contexts like unauthorized views where
     *   only partial entities are returned in REST responses.
     * - isNew flag is set to false (and never changes for this entity)
     * - The incoming values are expected to be in the exact shape as
     *   described by the schema for the entity model.
     *
     * @param {Object} fieldsAndValues
     * @return {Entity} an instance of Entity
     */
    fromExisting: fieldsAndValues => new Entity(modelName, fieldsAndValues, schema, fieldPrefixes)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createEntityFactory);

/***/ }),

/***/ "./assets/src/data/model/entity-factory/booleans.js":
/*!**********************************************************!*\
  !*** ./assets/src/data/model/entity-factory/booleans.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasEnumProperty": function() { return /* binding */ hasEnumProperty; },
/* harmony export */   "hasFormatProperty": function() { return /* binding */ hasFormatProperty; },
/* harmony export */   "hasPrettyProperty": function() { return /* binding */ hasPrettyProperty; },
/* harmony export */   "hasRawProperty": function() { return /* binding */ hasRawProperty; },
/* harmony export */   "hasRenderedProperty": function() { return /* binding */ hasRenderedProperty; },
/* harmony export */   "isDateTimeField": function() { return /* binding */ isDateTimeField; },
/* harmony export */   "isEntityField": function() { return /* binding */ isEntityField; },
/* harmony export */   "isEnumField": function() { return /* binding */ isEnumField; },
/* harmony export */   "isMoneyField": function() { return /* binding */ isMoneyField; },
/* harmony export */   "isPrimaryKeyField": function() { return /* binding */ isPrimaryKeyField; },
/* harmony export */   "isReadOnly": function() { return /* binding */ isReadOnly; },
/* harmony export */   "isUTCDateTimeField": function() { return /* binding */ isUTCDateTimeField; },
/* harmony export */   "isValueObjectField": function() { return /* binding */ isValueObjectField; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

/**
 * Indicates whether the provided value has a "raw" property.
 *
 * @param {*} value
 * @return {boolean} True if the value is a plain object and has a `raw` property.
 */

const hasRawProperty = value => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(value) && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(value.raw);
/**
 * Indicates whether the provided value has a "pretty" property.
 *
 * @param {*} value
 * @return {*} True if the value is a plain object and has a `pretty` property.
 */

const hasPrettyProperty = value => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(value) && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(value.pretty);
/**
 * Indicates whether the provided value has a "rendered" property.
 *
 * @param {*} value
 * @return {boolean} True if the value is a plain object and has a `rendered` property.
 */

const hasRenderedProperty = value => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(value) && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(value.rendered);
/**
 * Indicates whether the provided value has a "format" property.
 *
 * @param {*} value
 * @return {boolean} True if the value is a plain object and has a `format` property.
 */

const hasFormatProperty = value => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(value) && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(value.format);
/**
 * Indicates whether the provided value has a "enum" property.
 *
 * @param {*} value
 * @return {boolean} True if the value is a plain object and has an enum
 * property.
 */

const hasEnumProperty = value => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(value) && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(value.enum);
/**
 * Indicates whether the provided value is a "value object" field.
 *
 * @param {string} field
 * @param {Object} schema
 * @return {boolean} True if the value is a value object field.
 */

const isValueObjectField = (field, schema) => {
  return isDateTimeField(field, schema) || isMoneyField(field, schema);
};
/**
 * Indicates whether the provided field is a date-time field according to the
 * provided schema.
 *
 * @param {string} field
 * @param {Object} schema
 * @return {boolean} True means it is a date-time field.
 */

const isDateTimeField = (field, schema) => !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(schema[field]) && hasFormatProperty(schema[field]) && schema[field].format === 'date-time';
/**
 * Indicates whether the provided field is a UTC date-time field.
 *
 * If schema is provided, this also considers whether this is a date-time field.
 *
 * @param {string} dateTimeFieldName
 * @param {Object} schema [optional]
 * @return {boolean} True means this is a UTC field.  If schema is provided it
 * means this is also a date-time field.
 */

const isUTCDateTimeField = function (dateTimeFieldName) {
  let schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return schema !== null ? isDateTimeField(dateTimeFieldName, schema) && dateTimeFieldName.indexOf('_gmt') > 0 : dateTimeFieldName.indexOf('_gmt') > 0;
};
/**
 * Returns whether the provided field represents a primary key field using the
 * provided schema.
 *
 * @param {string} fieldName
 * @param {Object} schema
 * @return {boolean}  True means it is a primary key field.
 */

const isPrimaryKeyField = (fieldName, schema) => !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(schema[fieldName]) && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(schema[fieldName].primary_key);
/**
 * Returns whether the provided field represents a readonly field using the
 * provided schema.
 *
 * @param {string} fieldName
 * @param {Object} schema
 * @return {boolean}  True means it is a readonly field.
 */

const isReadOnly = (fieldName, schema) => !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(schema[fieldName]) && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(schema[fieldName].readonly) && schema[fieldName].readonly;
/**
 * Indicates whether the provided field is a "entity" field using the provided
 * schema.
 *
 * An "entity" field is any field that satisfies the following conditions:
 *
 * - field exists in the schema
 * - it is not readonly or is a primary key field.
 * - it is not a utc field.
 *
 * @param {string} fieldName
 * @param {Object} schema
 * @return {boolean} True if this is an entity field
 */

const isEntityField = (fieldName, schema) => !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(schema[fieldName]) && (!isReadOnly(fieldName, schema) || isPrimaryKeyField(fieldName, schema)) && !isUTCDateTimeField(fieldName) && fieldName !== '_protected';
/**
 * Indicates whether the field represents a value of money from the provided
 * schema.
 *
 * A field is a money field if the following conditions are satisfied:
 *
 * - It exists in the schema
 * - It has a pretty property
 * - The pretty property value has a format property.
 * - The format property is equal to 'money'
 *
 * @param {string} fieldName
 * @param {Object} schema
 * @return {boolean} True if it is a money field.
 */

const isMoneyField = (fieldName, schema) => !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(schema[fieldName]) && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(schema[fieldName].properties) && hasPrettyProperty(schema[fieldName].properties) && hasFormatProperty(schema[fieldName].properties.pretty) && schema[fieldName].properties.pretty.format === 'money';
/**
 * Indicates whether the field is an enum type field as defined in the provided
 * schema.
 *
 * Note: this only evaluates the top-level for the field schema.  If the field
 * in the schema is of type 'object' and one of the object properties is of type
 * 'enum' this will not consider it an "enum" field.
 *
 * @param {string} fieldName
 * @param {Object} schema
 * @return {boolean}  True if the field is an enum type field.
 */

const isEnumField = (fieldName, schema) => !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(schema[fieldName]) && hasEnumProperty(schema[fieldName]) && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(schema[fieldName].enum.length) && schema[fieldName].enum.length > 0;

/***/ }),

/***/ "./assets/src/data/model/entity-factory/constants.js":
/*!***********************************************************!*\
  !*** ./assets/src/data/model/entity-factory/constants.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODEL_PREFIXES": function() { return /* binding */ MODEL_PREFIXES; },
/* harmony export */   "PRIVATE_PROPERTIES": function() { return /* binding */ PRIVATE_PROPERTIES; },
/* harmony export */   "SAVE_STATE": function() { return /* binding */ SAVE_STATE; },
/* harmony export */   "VALIDATE_TYPE": function() { return /* binding */ VALIDATE_TYPE; }
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External imports
 */


/**
 * Constants describing the current "save state" for an entity.
 *
 * @type {{CLEAN: symbol, NEW: symbol, DIRTY: symbol}}
 */

const SAVE_STATE = {
  CLEAN: Symbol('Entity is persisted.'),
  NEW: Symbol('Entity is new.'),
  DIRTY: Symbol('Existing entity has changes and needs persisted.')
};
/**
 * Validation types are for schema's that have value variations.
 *
 * @type {{RAW: string, RENDERED: string, PRETTY: string}}
 */

const VALIDATE_TYPE = {
  RAW: 'raw',
  RENDERED: 'rendered',
  PRETTY: 'pretty'
};
/**
 * Private properties used internally by the Base Entity Class
 *
 * @type {{saveState: boolean}}
 */

const PRIVATE_PROPERTIES = {
  SAVE_STATE: Symbol('baseEntityPrivatePropertiesSaveState'),
  VALIDATE_TYPES: Symbol('baseEntityPrivatePropertiesValidateTypes')
};
/**
 * Hardcoded list of model prefixes for fields on models.
 
 * A model prefix is something that "namespaces" a field on a model.  For
 * example, if the field is "EVT_ID", then the prefix is "EVT"; if the field is
 * "DTT_EVT_start", then the prefixes are "DTT", and "DTT_EVT".
 *
 * @param  {string} modelName
 * @return {Object} A filtered object indexed by model name and the values are
 * an array of model prefixes for that model.
 */

const MODEL_PREFIXES = modelName => {
  const prefixMap = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('FHEE__ENTITY_FACTORY__CONSTANTS__MODEL_PREFIXES', {
    answer: ['ANS'],
    attendee: ['ATT'],
    change_log: ['LOG'],
    checkin: ['CHK'],
    country: ['CNT'],
    currency: ['CUR'],
    currency_payment_method: ['CPM'],
    datetime: ['DTT', 'DTT_EVT'],
    datetime_ticket: ['DTK'],
    event: ['EVT'],
    event_message_template: ['EMT'],
    event_question_group: ['EQG'],
    event_venue: ['EVV'],
    extra_join: ['EXJ'],
    extra_meta: ['EXM'],
    line_item: ['LIN'],
    message: ['MSG'],
    message_template: ['MTP'],
    message_template_group: ['GRP', 'MTP'],
    payment: ['PAY'],
    payment_method: ['PMD'],
    post_meta: ['meta'],
    price: ['PRC'],
    price_type: ['PRT'],
    question: ['QST'],
    question_group: ['QSG'],
    question_group_question: ['QGQ'],
    question_option: ['QSO'],
    registration: ['REG'],
    registration_payment: ['RPY'],
    state: ['STA'],
    status: ['STS'],
    term: ['term'],
    term_relationship: [],
    term_taxonomy: ['term_taxonomy'],
    ticket: ['TKT'],
    ticket_price: ['TKP'],
    ticket_template: ['TTM'],
    transaction: ['TXN'],
    venue: ['VNU'],
    wp_user: ['user']
  });
  return !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(prefixMap[modelName]) ? prefixMap[modelName] : [];
};

/***/ }),

/***/ "./assets/src/data/model/entity-factory/create.js":
/*!********************************************************!*\
  !*** ./assets/src/data/model/entity-factory/create.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAliasGetter": function() { return /* binding */ createAliasGetter; },
/* harmony export */   "createAliasGetterAndSetter": function() { return /* binding */ createAliasGetterAndSetter; },
/* harmony export */   "createAliasGetterAndSetterForField": function() { return /* binding */ createAliasGetterAndSetterForField; },
/* harmony export */   "createAliasGetterForField": function() { return /* binding */ createAliasGetterForField; },
/* harmony export */   "createCallbackGetter": function() { return /* binding */ createCallbackGetter; },
/* harmony export */   "createEntityGettersAndSetters": function() { return /* binding */ createEntityGettersAndSetters; },
/* harmony export */   "createFluentSetter": function() { return /* binding */ createFluentSetter; },
/* harmony export */   "createGetter": function() { return /* binding */ createGetter; },
/* harmony export */   "createGetterAndSetter": function() { return /* binding */ createGetterAndSetter; },
/* harmony export */   "createPersistingGettersAndSetters": function() { return /* binding */ createPersistingGettersAndSetters; },
/* harmony export */   "createPrimaryKeyFieldGetters": function() { return /* binding */ createPrimaryKeyFieldGetters; },
/* harmony export */   "createRawEntityGettersSetters": function() { return /* binding */ createRawEntityGettersSetters; },
/* harmony export */   "createRenderedGetters": function() { return /* binding */ createRenderedGetters; },
/* harmony export */   "setCalculatedFieldAndValues": function() { return /* binding */ setCalculatedFieldAndValues; },
/* harmony export */   "setFieldToPersist": function() { return /* binding */ setFieldToPersist; },
/* harmony export */   "setRelationsResource": function() { return /* binding */ setRelationsResource; },
/* harmony export */   "setResources": function() { return /* binding */ setResources; },
/* harmony export */   "setSaveState": function() { return /* binding */ setSaveState; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cuid */ "cuid");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assertions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assertions */ "./assets/src/data/model/entity-factory/assertions.js");
/* harmony import */ var _extractors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extractors */ "./assets/src/data/model/entity-factory/extractors.js");
/* harmony import */ var _booleans__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booleans */ "./assets/src/data/model/entity-factory/booleans.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/entity-factory/constants.js");
/**
 * External imports
 */



/**
 * Internal imports
 */





/**(
 * A generic getter creator for a provided instance.
 *
 * @param {Object} instance
 * @param {string} fieldName  The name of the accessor.
 * @param {*} fieldValue
 * @param {Object} opts used to pass through additional options for the
 * Object.defineProperty call.
 */

const createGetter = function (instance, fieldName, fieldValue) {
  let opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  Object.defineProperty(instance, fieldName, {
    get() {
      return fieldValue;
    },

    ...opts
  });
};
/**
 * This creates a getter that calls the provided callback when invoked.
 *
 * The callback receives the `instance` argument passed through
 *
 * @param {Object} instance
 * @param {string} propertyName
 * @param {function(Object)} callBack
 * @param {Object} opts
 */

const createCallbackGetter = function (instance, propertyName, callBack) {
  let opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  Object.defineProperty(instance, propertyName, {
    get() {
      return callBack(instance);
    },

    ...opts
  });
};
/**
 * A generic getter and setter creator for a provided instance
 *
 * @param {Object} instance
 * @param {string} fieldName
 * @param {*}  initialFieldValue
 * @param {Object} opts Optional, pass through options used by
 * Object.defineProperty
 */

const createGetterAndSetter = function (instance, fieldName, initialFieldValue) {
  let opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  let propertyValue = initialFieldValue;
  Object.defineProperty(instance, fieldName, {
    get() {
      return propertyValue;
    },

    set(receivedValue) {
      const isPrimaryField = (0,_booleans__WEBPACK_IMPORTED_MODULE_5__.isPrimaryKeyField)(fieldName, instance.schema);

      if (!instance.isNew && isPrimaryField) {
        return;
      }

      (0,_assertions__WEBPACK_IMPORTED_MODULE_3__.assertValidValueForPreparedField)(fieldName, receivedValue, instance);

      if (!isPrimaryField) {
        setSaveState(instance, _constants__WEBPACK_IMPORTED_MODULE_6__.SAVE_STATE.DIRTY);
        setFieldToPersist(instance, fieldName);
      }

      propertyValue = receivedValue;
    },

    ...opts
  });
};
/**
 * A getter and setter creator for an field alias.
 *
 * @param {Object} instance
 * @param {string} originalFieldName
 * @param {string} aliasFieldName
 * @param {Object} opts
 */

const createAliasGetterAndSetter = function (instance, originalFieldName, aliasFieldName) {
  let opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (originalFieldName !== aliasFieldName) {
    Object.defineProperty(instance, aliasFieldName, {
      get() {
        return instance[originalFieldName];
      },

      set(receivedValue) {
        return instance[originalFieldName] = receivedValue;
      },

      ...opts
    });
  }
};
/**
 * A getter creator for a field alias.
 *
 * @param {Object} instance
 * @param {string} originalFieldName
 * @param {string} aliasFieldName
 * @param {Object} opts
 */

const createAliasGetter = function (instance, originalFieldName, aliasFieldName) {
  let opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (originalFieldName !== aliasFieldName) {
    Object.defineProperty(instance, aliasFieldName, {
      get() {
        return instance[originalFieldName];
      },

      ...opts
    });
  }
};
/**
 * Creates a fluent setter on the provided instance for the given field name.
 *
 * @param {Object} instance
 * @param {string} fieldName
 * @param {Object} opts  Options for Object.defineProperty
 */

const createFluentSetter = function (instance, fieldName) {
  let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object.defineProperty(instance, 'set' + (0,lodash__WEBPACK_IMPORTED_MODULE_0__.upperFirst)(fieldName), {
    get() {
      return receivedValue => {
        instance[fieldName] = receivedValue;
        return instance;
      };
    },

    ...opts
  });
};
/**
 * Creates initial getters and setters for entities on the provided entity
 * instance using the given data.
 *
 * @param {Object} instance
 * keys on instance.
 */

const createEntityGettersAndSetters = instance => {
  const primaryKeys = [];
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(instance.originalFieldsAndValues, (fieldValue, fieldName) => {
    const isPrimaryKey = (0,_booleans__WEBPACK_IMPORTED_MODULE_5__.isPrimaryKeyField)(fieldName, instance.schema);
    setValidateTypeForField(instance, fieldName, fieldValue);

    if ((0,_booleans__WEBPACK_IMPORTED_MODULE_5__.isEntityField)(fieldName, instance.schema)) {
      if (instance.isNew) {
        (0,_assertions__WEBPACK_IMPORTED_MODULE_3__.assertValidValueForPreparedField)(fieldName, fieldValue, instance);
      } else {
        (0,_assertions__WEBPACK_IMPORTED_MODULE_3__.assertValidFieldAndValueAgainstSchema)(instance.modelName, fieldName, fieldValue, instance);
      }

      setInitialEntityFieldsAndValues(instance, fieldName, fieldValue, isPrimaryKey);
    }

    if (fieldName === '_calculated_fields') {
      setCalculatedFieldAndValues(instance, fieldValue);
    }

    if (fieldName === '_protected') {
      populateProtectedFieldsProperty(instance, fieldValue);
    }

    if (fieldName === 'link') {
      createGetter(instance, 'link', fieldValue);
    }

    if (fieldName === '_links') {
      setResources(instance, fieldValue);
    }

    if (!instance.isNew && isPrimaryKey) {
      primaryKeys.push(fieldName);
    }
  });

  if (!instance.isNew && primaryKeys.length) {
    createPrimaryKeyFieldGetters(instance, primaryKeys);
  }

  populatePrimaryKeys(instance);
  populateMissingFields(instance);
};
/**
 * Populates the `protectedFields` property on the instance.
 *
 * @param {Object} instance
 * @param {Array} protectedFields
 */

const populateProtectedFieldsProperty = (instance, protectedFields) => {
  // get any calculated protected fields.
  const calculatedFields = instance.originalFieldsAndValues._calculated_fields || {};

  if (calculatedFields._protected && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(calculatedFields._protected)) {
    protectedFields = [...protectedFields, ...calculatedFields._protected];
  }

  createGetter(instance, 'protectedFields', protectedFields);
};
/**
 * This populates primary key fields.
 * Note that it also overrides any primary key values/properties that are
 * already set in the entity so is only processed when the instance is new.
 *
 * @param {Object} instance
 */


const populatePrimaryKeys = instance => {
  if (!instance.isNew) {
    return;
  }

  const primaryKeys = (0,_extractors__WEBPACK_IMPORTED_MODULE_4__.getPrimaryKeyFieldsFromSchema)(instance);
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(primaryKeys, (schemaProperties, schemaField) => {
    // always delete and override what is existing.
    if (instance[schemaField]) {
      delete instance[schemaField];
    }

    createGetterAndSetter(instance, schemaField, cuid__WEBPACK_IMPORTED_MODULE_1___default()(), {
      configurable: true,
      enumerable: true
    });
    createAliasGetterAndSetterForField(instance, schemaField);
  });
  createPrimaryKeyFieldGetters(instance, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.keys)(primaryKeys));
};
/**
 * Sets the validate type for a field property.
 *
 * @param {Object} instance
 * @param {string} fieldName
 * @param {*} fieldValue
 */


const setValidateTypeForField = (instance, fieldName, fieldValue) => {
  instance[_constants__WEBPACK_IMPORTED_MODULE_6__.PRIVATE_PROPERTIES.VALIDATE_TYPES][fieldName] = (0,_extractors__WEBPACK_IMPORTED_MODULE_4__.deriveValidateTypeForField)(fieldName, fieldValue, instance.schema);
};
/**
 *  Populates missing fields and values using defaults provided by schema.  If
 *  schema doesn't provide a default then this will populate the field with a
 *  default value that matches the type.
 *
 * @param {Object} instance
 */


const populateMissingFields = instance => {
  if (typeof instance.protectedFields === 'undefined') {
    populateProtectedFieldsProperty(instance, []);
  }

  if (!instance.isNew) {
    return;
  }

  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)((0,_extractors__WEBPACK_IMPORTED_MODULE_4__.getEntityFieldsFromSchema)(instance), (schemaProperties, fieldName) => {
    if (typeof instance[fieldName] === 'undefined' && !(0,_booleans__WEBPACK_IMPORTED_MODULE_5__.isPrimaryKeyField)(fieldName, instance.schema)) {
      setInitialEntityFieldsAndValues(instance, fieldName, undefined);
    }
  });
};
/**
 * Returns a plain object of entity fields and values from this entity instance
 * for use in cloning the entity.
 *
 * @param {BaseEntity} instance
 *
 * @return {Object} Plain object of all field:value pairs.
 */


const forClone = instance => {
  return (0,_extractors__WEBPACK_IMPORTED_MODULE_4__.getBaseFieldsAndValuesForCloning)(instance);
};
/**
 * Returns a plain object of the entity fields and values from this entity
 * instance prepared for use in an update request.
 *
 * @param {Object} instance
 * @return {Object} Plain object of field:value pairs.
 */


const forUpdate = instance => {
  return (0,_extractors__WEBPACK_IMPORTED_MODULE_4__.getBaseFieldsAndValuesForPersisting)(instance);
};
/**
 * Returns a plain object of the entity fields and values from this entity
 * instance prepared for use in an insert request.
 *
 * @param {Object} instance
 * @return {Object} Plain object of field:value pairs.
 */


const forInsert = instance => {
  const entityValues = (0,_extractors__WEBPACK_IMPORTED_MODULE_4__.getBaseFieldsAndValuesForPersisting)(instance, true);
  instance.primaryKeys.forEach(primaryKey => {
    entityValues[primaryKey] = instance[primaryKey];
  });
  return entityValues;
};
/**
 * Returns a plain object of the entity fields and values from this entity
 * instance prepared for use in either an insert or update request.  The type
 * is automatically derived from the determining whether the entity is "new" or
 * not.
 *
 * @param {Object} instance
 * @return {Object} Plain object of field:value pairs.
 */


const forPersist = instance => {
  if (instance.isNew) {
    return forInsert(instance);
  }

  return forUpdate(instance);
};
/**
 * Creates getters for retrieving the fields and values of the entity instance
 * for insert or update requests.
 *
 * @param {Object} instance
 */


const createPersistingGettersAndSetters = instance => {
  createCallbackGetter(instance, 'forUpdate', forUpdate);
  createCallbackGetter(instance, 'forInsert', forInsert);
  createCallbackGetter(instance, 'forPersist', forPersist);
  createCallbackGetter(instance, 'forClone', forClone);
};
/**
 * Creates initial entity field accessors.
 *
 * @param {Object} instance
 * @param {string} fieldName
 * @param {*} fieldValue
 * @param {boolean} isPrimaryKey
 */

const setInitialEntityFieldsAndValues = function (instance, fieldName, fieldValue) {
  let isPrimaryKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(fieldValue)) {
    fieldValue = (0,_extractors__WEBPACK_IMPORTED_MODULE_4__.getDefaultValueForField)(fieldName, instance.schema);
    setValidateTypeForField(instance, fieldName, fieldValue);
  }

  createRawEntityGettersSetters(instance, fieldName, (0,_extractors__WEBPACK_IMPORTED_MODULE_4__.derivePreparedValueForField)(fieldName, fieldValue, instance), isPrimaryKey);

  if (!isPrimaryKey) {
    createRenderedGetters(instance, fieldName, (0,_extractors__WEBPACK_IMPORTED_MODULE_4__.deriveRenderedValue)(fieldValue));
  }
};
/**
 * Creates raw entity getters and setters.  These are the properties of an
 * entity that have the values used for not only getting but also setting.
 *
 * @param {Object} instance
 * @param {string} fieldName
 * @param {*} fieldValue
 * @param {boolean} isPrimaryKey set to true if field is the model's primary key
 */


const createRawEntityGettersSetters = function (instance, fieldName, fieldValue) {
  let isPrimaryKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  const opts = {
    enumerable: true
  }; // primary key is immutable

  if (isPrimaryKey) {
    createGetter(instance, fieldName, fieldValue, opts);
    createAliasGetterForField(instance, fieldName);
  } else {
    createGetterAndSetter(instance, fieldName, fieldValue, opts);
    createFluentSetter(instance, fieldName);
    createAliasGetterAndSetterForField(instance, fieldName);
  }
};
/**
 * Creates "alias" getter for the given field name on the entity instance.
 *
 * @param {Object} instance
 * @param {string} fieldName
 */

const createAliasGetterForField = (instance, fieldName) => {
  createAliasesForMethod(instance, fieldName, createAliasGetter);
};
/**
 * Creates "alias" getters and setters for the given field on the entity
 * instance.
 *
 * Example: Datetime entities have a `DTT_EVT_start` field.  On the entity
 * instance, you will be able to access the value of that field via:
 * - datetime.DTT_EVT_start
 * - datetime.dttEvtStart
 * - datetime.evtStart
 * - datetime.start
 *
 * @param {Object} instance
 * @param {string} fieldName
 */

const createAliasGetterAndSetterForField = (instance, fieldName) => {
  createAliasesForMethod(instance, fieldName, createAliasGetterAndSetter);
};
/**
 * Creates Aliases using the provided method.
 *
 * @param {Object} instance
 * @param {string} fieldName
 * @param {Function} method
 */

const createAliasesForMethod = (instance, fieldName, method) => {
  // camelCase getter (or setter) for full field name (eg. EVT_desc => evtDesc)
  method(instance, fieldName, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.camelCase)(fieldName)); // strip field prefixes and camelCase (if there are field prefixes for the
  // entity. (eg. EVT_desc => desc);

  if (instance.fieldPrefixes) {
    let newFieldName = ''; // Yes, its intended that if there are multiple prefixes, this could
    // end up creating multiple aliased getters (or setters)
    // (eg Datetime: DTT_EVT_start would end up with `evtStart` and `start`
    // as getter accessors).

    instance.fieldPrefixes.forEach(fieldPrefix => {
      newFieldName = fieldName.replace(fieldPrefix + '_', '');

      if (newFieldName !== fieldName) {
        method(instance, fieldName, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.camelCase)(newFieldName));
      }
    });
  }
};
/**
 * Returns a callback that is used in the `getRendered` field getter.
 *
 * @param {Object} instance
 * @return {function(string): *}  A callback.
 */


const getRenderedCallback = instance => requestedFieldName => instance[requestedFieldName + 'Rendered'];
/**
 * Returns a fieldName stripped of all possible prefixes.
 *
 * @param {Object} instance
 * @param {string} fieldName
 * @return {string} The prefix free fieldName.
 */


const removePrefixesFromField = (instance, fieldName) => {
  const prefixesToRemove = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.sortBy)(instance.fieldPrefixes, prefix => prefix.length * -1);
  let newFieldName = fieldName;
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(prefixesToRemove, prefix => {
    newFieldName = fieldName.replace(prefix, '');

    if (newFieldName !== fieldName) {
      return false;
    }
  });
  return newFieldName;
};
/**
 * This creates the getters for the rendered property of model fields.
 *
 * @param {Object} instance
 * @param {string} fieldName
 * @param {*}  fieldValue
 */


const createRenderedGetters = (instance, fieldName, fieldValue) => {
  createGetter(instance, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.camelCase)(removePrefixesFromField(instance, fieldName)) + 'Rendered', fieldValue);

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(instance.getRendered)) {
    createCallbackGetter(instance, 'getRendered', getRenderedCallback);
  }
};
/**
 * Callback for the `hasMultiplePrimaryKeys` getter.
 *
 * @param {Object} instance
 * @return {function(): boolean} The callback for hasMultiplePrimaryKeys getter
 */

const hasMultiplePrimaryKeysCallback = instance => instance.primaryKeys.length > 1;
/**
 * Creates getters for primary key related data.
 *
 * @param {Object} instance
 * @param {Array} primaryKeys
 */


const createPrimaryKeyFieldGetters = (instance, primaryKeys) => {
  const opts = {
    configurable: true
  };

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(primaryKeys)) {
    createGetter(instance, 'primaryKey', primaryKeys[0], opts);
    createGetterAndSetter(instance, 'primaryKeys', primaryKeys, opts);
    createCallbackGetter(instance, 'hasMultiplePrimaryKeys', hasMultiplePrimaryKeysCallback, opts);
  }
};
/**
 * @param {Object} instance
 * @return {function(string): boolean} Returns a callback for the
 * hasCalculatedField getter
 */

const hasCalculatedFieldCallback = instance => fieldNameToCheck => !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(instance[fieldNameToCheck]);
/**
 * Creates the getters for all the calculated fields and value on the entity.
 *
 * @param {Object} instance
 * @param {Object.<string,*>}fieldsAndValues
 */


const setCalculatedFieldAndValues = (instance, fieldsAndValues) => {
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(fieldsAndValues, (calculatedFieldValue, calculatedFieldName) => {
    if (calculatedFieldName !== '_protected') {
      createGetter(instance, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.camelCase)(calculatedFieldName), calculatedFieldValue);
    }
  });
  createCallbackGetter(instance, 'hasCalculatedField', hasCalculatedFieldCallback);
};
/**
 * Create getters for the various resource links on the entity.
 *
 * @param {Object} instance
 * @param {Object.<string,*>}fieldsAndValues
 */

const setResources = (instance, fieldsAndValues) => {
  const relations = [];
  let relationName;
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(fieldsAndValues, (resourceValue, resourceName) => {
    if (resourceName === 'self') {
      createGetter(instance, 'resourceLink', resourceValue[0].href);
    } else if (resourceName === 'collection') {
      createGetter(instance, 'collectionResourceLink', resourceValue[0].href);
    } else {
      relationName = (0,_extractors__WEBPACK_IMPORTED_MODULE_4__.getRelationNameFromLink)(resourceName);
      relations.push(relationName);
      setRelationsResource(instance, relationName + 'Resource', resourceValue);
    }
  }); //set relations getter

  createGetter(instance, 'getRelations', relations);
};
/**
 * @param {Object} instance
 * @return {function(string): Object} Returns the callback for getting a
 * relation resource
 */

const getRelationResourceCallback = instance => relationName => instance[relationName.replace('Resource', '')];
/**
 * Creates getters for the relations resource object.
 *
 * @param {Object} instance
 * @param {string} relationName
 * @param {Object.<string, string>} resourceInfo
 */


const setRelationsResource = (instance, relationName, resourceInfo) => {
  createGetter(instance, relationName, {
    resourceLink: resourceInfo[0].href,
    single: resourceInfo[0].single
  });

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(instance.getRelationResource)) {
    createCallbackGetter(instance, 'getRelationResource', getRelationResourceCallback);
  }
};
/**
 * Sets the internal save state to the given value when current state is
 * SAVE_STATE.clean otherwise current save state is retained.
 *
 * @param {Object} instance
 * @param {string} saveState Expected to be one of SAVE_STATE constant values.
 * @param {boolean} override Set to true when overriding the default logic for
 * setting state.  When true, the saveState is set to whatever the incoming
 * saveState value is.
 */

const setSaveState = function (instance, saveState) {
  let override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const currentState = instance[_constants__WEBPACK_IMPORTED_MODULE_6__.PRIVATE_PROPERTIES.SAVE_STATE];

  switch (saveState) {
    case _constants__WEBPACK_IMPORTED_MODULE_6__.SAVE_STATE.DIRTY:
    case _constants__WEBPACK_IMPORTED_MODULE_6__.SAVE_STATE.NEW:
    case _constants__WEBPACK_IMPORTED_MODULE_6__.SAVE_STATE.CLEAN:
      if (override) {
        instance[_constants__WEBPACK_IMPORTED_MODULE_6__.PRIVATE_PROPERTIES.SAVE_STATE] = saveState;
        break;
      }

      instance[_constants__WEBPACK_IMPORTED_MODULE_6__.PRIVATE_PROPERTIES.SAVE_STATE] = currentState === _constants__WEBPACK_IMPORTED_MODULE_6__.SAVE_STATE.CLEAN ? saveState : currentState;
      break;

    default:
      throw new _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_2__.InvalidArgument('Save state for entity can only be set to either ' + 'SAVE_STATE.DIRTY, SAVE_STATE.NEW or SAVE_STATE.CLEAN');
  }
};
/**
 * Add the field name to the fieldToPersistOnInsert property on the instance
 * if it exists.
 *
 * @param {Object} instance
 * @param {string} fieldName
 */

const setFieldToPersist = (instance, fieldName) => {
  if (instance.fieldsToPersistOnInsert) {
    instance.fieldsToPersistOnInsert.add(fieldName);
  }
};

/***/ }),

/***/ "./assets/src/data/model/entity-factory/extractors.js":
/*!************************************************************!*\
  !*** ./assets/src/data/model/entity-factory/extractors.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deriveDefaultValueForType": function() { return /* binding */ deriveDefaultValueForType; },
/* harmony export */   "derivePreparedValueForField": function() { return /* binding */ derivePreparedValueForField; },
/* harmony export */   "deriveRenderedValue": function() { return /* binding */ deriveRenderedValue; },
/* harmony export */   "deriveTypeForField": function() { return /* binding */ deriveTypeForField; },
/* harmony export */   "deriveValidateTypeForField": function() { return /* binding */ deriveValidateTypeForField; },
/* harmony export */   "getBaseFieldsAndValuesForCloning": function() { return /* binding */ getBaseFieldsAndValuesForCloning; },
/* harmony export */   "getBaseFieldsAndValuesForPersisting": function() { return /* binding */ getBaseFieldsAndValuesForPersisting; },
/* harmony export */   "getDefaultValueForField": function() { return /* binding */ getDefaultValueForField; },
/* harmony export */   "getEntityFieldsFromSchema": function() { return /* binding */ getEntityFieldsFromSchema; },
/* harmony export */   "getPrimaryKeyFieldsFromSchema": function() { return /* binding */ getPrimaryKeyFieldsFromSchema; },
/* harmony export */   "getPrimaryKeyValues": function() { return /* binding */ getPrimaryKeyValues; },
/* harmony export */   "getRelationNameFromLink": function() { return /* binding */ getRelationNameFromLink; },
/* harmony export */   "maybeConvertFromValueObject": function() { return /* binding */ maybeConvertFromValueObject; },
/* harmony export */   "maybeConvertFromValueObjectWithAssertions": function() { return /* binding */ maybeConvertFromValueObjectWithAssertions; },
/* harmony export */   "maybeConvertToValueObject": function() { return /* binding */ maybeConvertToValueObject; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model-names */ "./assets/src/data/model/model-names.js");
/* harmony import */ var _booleans__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booleans */ "./assets/src/data/model/entity-factory/booleans.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validators */ "./assets/src/data/model/entity-factory/validators.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/entity-factory/constants.js");
/**
 * External imports
 */


/**
 * Internal imports
 */






/**
 * This receives a field name, it's value and the schema and converts it to the
 * related value object IF the schema indicates it is of a type that there is a
 * known value object for.
 *
 * @param {string} fieldName
 * @param {*} fieldValue
 * @param {Object} schema
 * @return {DateTime|Money|*}  If this is not a value object, the original field
 * value is returned.
 */

const maybeConvertToValueObject = (fieldName, fieldValue, schema) => {
  if ((0,_booleans__WEBPACK_IMPORTED_MODULE_4__.isDateTimeField)(fieldName, schema) && !_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__.ServerDateTime.validateIsDateTime(fieldValue)) {
    return _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__.ServerDateTime.fromISO(fieldValue);
  }

  if ((0,_booleans__WEBPACK_IMPORTED_MODULE_4__.isMoneyField)(fieldName, schema) && !(0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__.instanceOf)(fieldValue, 'Money')) {
    return new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__.Money(fieldValue, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__.SiteCurrency);
  } // if more VOs get added, then instead of adding more if else blocks
  // to this function and the ones below, all VO logic should be extracted
  // into some kind of  ValueObjectExtractor object that would hold all of
  // the necessary callbacks for managing the detection of VO fields and
  // conversion of data to and from the various VOs
  // plz see:
  // https://github.com/eventespresso/event-espresso-core/pull/637/files#r228690789


  return fieldValue;
};
/**
 * This converts the incoming value for a field to its equivalent "raw" value
 * from a value object if it is a value object.  Otherwise it just returns the
 * original incoming value.  This also asserts that if the provided field is
 * expected to be a value object that the incoming value IS a valid value object
 * and it is the expected instance of a value object.
 *
 * @param {string} fieldName
 * @param {*|Money|DateTime} fieldValue
 * @param {Object} schema
 * @return {string|number|*}  If the value is not a value object, returns the
 * original value
 */

const maybeConvertFromValueObjectWithAssertions = (fieldName, fieldValue, schema) => {
  if ((0,_booleans__WEBPACK_IMPORTED_MODULE_4__.isDateTimeField)(fieldName, schema)) {
    _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__.ServerDateTime.assertIsDateTime(fieldValue);
    fieldValue = fieldValue.toISO();
  } else if ((0,_booleans__WEBPACK_IMPORTED_MODULE_4__.isMoneyField)(fieldName, schema)) {
    _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__.Money.assertMoney(fieldValue);
    fieldValue = fieldValue.toNumber();
  }

  return fieldValue;
};
/**
 * This converts the incoming value for a field to its equivalent "raw" value
 * if the incoming value  is a value object.  Otherwise it just returns the
 * original incoming value.
 *
 * @param {*|DateTime|Money}fieldValue
 * @return {*} The raw value for the value object or the original value.
 */

const maybeConvertFromValueObject = fieldValue => {
  if (_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__.ServerDateTime.validateIsDateTime(fieldValue)) {
    fieldValue = fieldValue.toISO();
  } else if ((0,_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__.instanceOf)(fieldValue, 'Money')) {
    fieldValue = fieldValue.toNumber();
  }

  return fieldValue;
};
/**
 * This derives the "prepared" value for the given field and value.
 *
 * "Prepared" means:
 *
 * - converting to a value object if this is a field that there are defined
 *   value objects for.
 * - retrieving the "raw" value from field values that have `raw` and `rendered`
 *   or `pretty` properties.
 *
 * @param {string} fieldName
 * @param {*}  fieldValue
 * @param {Object} instance
 * @return {DateTime|Money|*}  Returns the original incoming value if it does
 * not have a raw equivalent or is not a value object.
 */

const derivePreparedValueForField = (fieldName, fieldValue, instance) => {
  const validationType = (0,_validators__WEBPACK_IMPORTED_MODULE_5__.validateTypeForField)(fieldName, instance);
  fieldValue = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(fieldValue) ? fieldValue[validationType] : fieldValue;
  return maybeConvertToValueObject(fieldName, fieldValue, instance.schema);
};
/**
 * This returns the "rendered" or "pretty" equivalent from a value if it exists
 * as a property on it.
 *
 * @param {*} value
 * @return {*}  The original value is returned if its not a plain object or if
 * it has no `rendered` or `pretty` property.  However, if it is a plain object
 * and has no pretty/rendered properties but DOES have a raw property, then that
 * is returned.
 */

const deriveRenderedValue = value => {
  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(value)) {
    return value;
  }

  value = (0,_booleans__WEBPACK_IMPORTED_MODULE_4__.hasPrettyProperty)(value) ? value.pretty : value;
  value = (0,_booleans__WEBPACK_IMPORTED_MODULE_4__.hasRenderedProperty)(value) ? value.rendered : value;
  return (0,_booleans__WEBPACK_IMPORTED_MODULE_4__.hasRawProperty)(value) ? value.raw : value;
};
/**
 * Returns the name of a resource from the given `resourceLink`.
 *
 * eg. "https://api.eventespresso.com/registration" will return 'registration';
 
 * @param {string} resourceLink
 * @return {string} Returns the name of the resource from a provided resource
 * link.
 */

const getRelationNameFromLink = resourceLink => {
  return (0,_model_names__WEBPACK_IMPORTED_MODULE_3__.pluralModelName)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.camelCase)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(resourceLink.split('/'))));
};
/**
 * Returns a plain object containing the entity field names and values from the
 * provided entity instance.  The values are not prepared and match exactly what
 * is currently set on this entity.
 *
 * @param {BaseEntity} entityInstance
 *
 * @return {Object} A plain object
 */

const getBaseFieldsAndValuesForCloning = entityInstance => {
  return Object.keys(entityInstance).reduce((fieldsAndValues, fieldName) => {
    if ((0,_booleans__WEBPACK_IMPORTED_MODULE_4__.isEntityField)(fieldName, entityInstance.schema) && !(0,_booleans__WEBPACK_IMPORTED_MODULE_4__.isPrimaryKeyField)(fieldName, entityInstance.schema)) {
      fieldsAndValues[fieldName] = entityInstance[fieldName];
      return fieldsAndValues;
    }

    return fieldsAndValues;
  }, {});
};
/**
 * Returns a plain object containing the entity field name and values from the
 * provided entity instance
 *
 * @param {Object} entityInstance
 * @param {boolean} forInsert  Whether to return the fields and values for
 * insert or for update.
 * @return {Object} A plain object
 */

const getBaseFieldsAndValuesForPersisting = function (entityInstance) {
  let forInsert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const iterator = forInsert ? Array.from(entityInstance.fieldsToPersistOnInsert.values()) : Object.keys(entityInstance);
  return iterator.reduce((fieldsAndValues, fieldName) => {
    if ((0,_booleans__WEBPACK_IMPORTED_MODULE_4__.isEntityField)(fieldName, entityInstance.schema) && !(0,_booleans__WEBPACK_IMPORTED_MODULE_4__.isPrimaryKeyField)(fieldName, entityInstance.schema)) {
      fieldsAndValues[fieldName] = maybeConvertFromValueObject(entityInstance[fieldName]);
      return fieldsAndValues;
    }

    return fieldsAndValues;
  }, {});
};
/**
 * Returns the primary key(s) and values for the given entityInstance
 *
 * @param {Object} entityInstance
 * @return {Object} an array of values for the primary keys.
 */

const getPrimaryKeyValues = entityInstance => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(entityInstance, entityInstance.primaryKeys);
/**
 * This returns a plain object of entity fields from the schema for the entity
 * instance (schema for fields are extracted as well).
 *
 * @param {Object} entityInstance
 * @return {Object} A plain object with fields and schema properties that are
 * entity properties.
 */

const getEntityFieldsFromSchema = entityInstance => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pickBy)(entityInstance.schema, (fieldValue, fieldName) => (0,_booleans__WEBPACK_IMPORTED_MODULE_4__.isEntityField)(fieldName, entityInstance.schema));
/**
 * This returns a plain object of extracted primaryKey fields from the schema
 * for the entity instance.
 *
 * @param {Object} entityInstance
 * @return {Object} A plain object with fields and schema properties that
 * 					represent primary key fields.
 */

const getPrimaryKeyFieldsFromSchema = entityInstance => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pickBy)(entityInstance.schema, (fieldValue, fieldName) => (0,_booleans__WEBPACK_IMPORTED_MODULE_4__.isPrimaryKeyField)(fieldName, entityInstance.schema));
/**
 * Derives the default value to use for a given type.
 *
 * @param {string} type
 * @return {*}  A value to use for the given type.
 */

const deriveDefaultValueForType = type => {
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(type)) {
    return type.indexOf('null') > -1 ? null : deriveDefaultValueForType(type[0]);
  }

  switch (type) {
    case 'string':
      return '';

    case 'number':
    case 'integer':
      return 0;

    case 'null':
    case 'object':
      return null;

    case 'boolean':
    case 'bool':
      return false;

    case 'date-time':
      return new Date().toISOString();
  }

  return null;
};
/**
 * Derives what `type` a field is from the schema.
 * It accounts for cases where the "type" of a field might be `date-time` or
 * where the type is an object and thus the `type` for the purposes of model
 * entities is defined by the `raw` property for the field.
 *
 * @param {string} fieldName
 * @param {Object} schema
 * @return {*}  What type the filed is.
 */

const deriveTypeForField = (fieldName, schema) => {
  if ((0,_booleans__WEBPACK_IMPORTED_MODULE_4__.isDateTimeField)(fieldName, schema)) {
    return 'date-time';
  }

  if (schema[fieldName] && schema[fieldName].type) {
    if (schema[fieldName].type === 'object') {
      if (schema[fieldName].properties && (0,_booleans__WEBPACK_IMPORTED_MODULE_4__.hasRawProperty)(schema[fieldName].properties)) {
        return schema[fieldName].properties.raw.type ? schema[fieldName].properties.raw.type : null;
      }

      return null;
    }

    return schema[fieldName].type;
  }

  return null;
};
/**
 * This derives the validate type from the incoming field and value according
 * to the schema and incoming value.
 *
 * This accounts for the fact that entities may be constructed from the
 * following contexts:
 *
 * 1. Authed REST response (which could have both raw, rendered or pretty
 *    values in the field value).
 * 2. Non-authed REST response (which will not have a raw value, but could have
 *    a pretty or rendered value).  This is potentially problematic if the
 *    rendered or pretty value is of a different data type than the raw value.
 * 3. New entities built client side, which will be assumed to be prepared
 *    against the "raw" validate type.
 *
 * @param {string} fieldName
 * @param {*} fieldValue
 * @param {Object} schema
 * @return {symbol}  The validate type for the field.
 */

const deriveValidateTypeForField = (fieldName, fieldValue, schema) => {
  if ((0,_booleans__WEBPACK_IMPORTED_MODULE_4__.hasRawProperty)(fieldValue)) {
    return _constants__WEBPACK_IMPORTED_MODULE_6__.VALIDATE_TYPE.RAW;
  }

  if (schema[fieldName] && schema[fieldName].type) {
    if (schema[fieldName].type === 'object' && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(fieldValue)) {
      return (0,_booleans__WEBPACK_IMPORTED_MODULE_4__.hasRenderedProperty)(fieldValue) ? _constants__WEBPACK_IMPORTED_MODULE_6__.VALIDATE_TYPE.RENDERED : _constants__WEBPACK_IMPORTED_MODULE_6__.VALIDATE_TYPE.PRETTY;
    }
  }

  return _constants__WEBPACK_IMPORTED_MODULE_6__.VALIDATE_TYPE.RAW;
};
/**
 * This gets the default value for a field from the provided schema.
 *
 * @param {string} fieldName
 * @param {Object} schema
 * @return {*} The default value for the field from the schema or if not
 * present in the schema, a derived default value from the schema type.
 */

const getDefaultValueForField = (fieldName, schema) => {
  if (schema[fieldName]) {
    return schema[fieldName].default ? schema[fieldName].default : deriveDefaultValueForType(schema[fieldName].type);
  }

  return null;
};

/***/ }),

/***/ "./assets/src/data/model/entity-factory/index.js":
/*!*******************************************************!*\
  !*** ./assets/src/data/model/entity-factory/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODEL_PREFIXES": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.MODEL_PREFIXES; },
/* harmony export */   "SAVE_STATE": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.SAVE_STATE; },
/* harmony export */   "createEntityFactory": function() { return /* reexport safe */ _base_entity__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-entity */ "./assets/src/data/model/entity-factory/base-entity.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/entity-factory/constants.js");



/***/ }),

/***/ "./assets/src/data/model/entity-factory/validators.js":
/*!************************************************************!*\
  !*** ./assets/src/data/model/entity-factory/validators.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isShallowValidValueForField": function() { return /* binding */ isShallowValidValueForField; },
/* harmony export */   "validateEnumType": function() { return /* binding */ validateEnumType; },
/* harmony export */   "validateType": function() { return /* binding */ validateType; },
/* harmony export */   "validateTypeForField": function() { return /* binding */ validateTypeForField; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _booleans__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booleans */ "./assets/src/data/model/entity-factory/booleans.js");
/* harmony import */ var _extractors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extractors */ "./assets/src/data/model/entity-factory/extractors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/entity-factory/constants.js");
/**
 * External imports
 */


/**
 * Internal Imports
 */




/**
 * Validates the incoming value for given type.  Types allowed are:
 *
 * - integer: checks if value is an integer.
 * - number: checks if value is classified as a Number primitive or object (this
 *   means `Infinity`, `-Infinity`, and `NaN` are considered valid for this type
 * - string
 * - object - this validates as a "plainObject", that is an object created by
 *   the Object constructor or one with a [[Prototype]] of null.
 * - boolean
 * - bool: (same as boolean check)
 * - null: value must explicitly be `null`
 *
 * Note: if the passed in type does not exist, then the value is considered
 * invalid.
 *
 * @param {string|Array} type  The type or types to check
 * @param {*} value  The value being validated
 * @return {boolean}  True means the value is valid for the given type.
 */

const validateType = (type, value) => {
  let valid = false; // account for type definitions that are an array of allowed types.

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(type)) {
    for (const singleType of type) {
      valid = validateType(singleType, value);

      if (valid) {
        break;
      }
    } // return right away because we've determined the validity of the type.


    return valid;
  }

  switch (type) {
    case 'integer':
      valid = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isInteger)(value);
      break;

    case 'number':
      valid = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value);
      break;

    case 'string':
      valid = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(value);
      break;

    case 'object':
      valid = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(value);
      break;

    case 'boolean':
    case 'bool':
      valid = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(value);
      break;

    case 'null':
      valid = value === null;
      break;
  }

  return valid;
};
/**
 * This validates enum type of values.
 *
 * This means that the value must be one of the provided array of enumValues as
 * well as being of the expected type.
 *
 * @param {string} type
 * @param {Array} enumValues
 * @param {*} value
 * @return {boolean}  True means this value is valid.
 */

const validateEnumType = (type, enumValues, value) => {
  return validateType(type, value) && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(enumValues) && enumValues.indexOf(value) > -1;
};
/**
 * This method does a shallow validation for the given value and field.
 *
 * "Shallow" here means that if the field schema is of type 'object', then the
 * validation only verifies that the value is an object.  The object contents
 * are not validated.
 *
 * @param {string} fieldName
 * @param {*} fieldValue
 * @param {Object} schema
 * @param {boolean} expectValueObjects  If true, then this flags the validator
 * to assume the value might be a value object and attempt to retrieve the raw
 * value from that value object for validation against the expected type in the
 * schema for that field.
 * @return {boolean}  True means the value is valid.
 * @throws TypeError
 * @throws InvalidDateTime
 */

const isShallowValidValueForField = function (fieldName, fieldValue, schema) {
  let expectValueObjects = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  // if field is a primary Key field then we override the validation so it can
  // be either string or number
  if ((0,_booleans__WEBPACK_IMPORTED_MODULE_2__.isPrimaryKeyField)(fieldName, schema)) {
    return validateType('string', fieldValue) || validateType('number', fieldValue);
  }

  const isEnum = (0,_booleans__WEBPACK_IMPORTED_MODULE_2__.isEnumField)(fieldName, schema);
  const isValueObject = (0,_booleans__WEBPACK_IMPORTED_MODULE_2__.isValueObjectField)(fieldName, schema);
  fieldValue = expectValueObjects && isValueObject ? (0,_extractors__WEBPACK_IMPORTED_MODULE_3__.maybeConvertFromValueObjectWithAssertions)(fieldName, fieldValue, schema) : fieldValue;
  fieldValue = expectValueObjects && schema[fieldName].type === 'object' && isValueObject ? {
    raw: fieldValue
  } : fieldValue;
  const isValid = isEnum ? validateEnumType(schema[fieldName].type, schema[fieldName].enum, fieldValue) : validateType(schema[fieldName].type, fieldValue); // if isEnum and not valid, then lets bail with error

  if (isEnum && !isValid) {
    throw new TypeError((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)('The given "%s" fieldName is not valid for the defined schema.  It must be a "%s" and it must be one of "%s". The fieldValue given was "%s"', fieldName, schema[fieldName].enum.join(), fieldValue));
  }

  return isValid;
};
/**
 * Returns what is set as the validateType for the given field and instance.
 *
 * @param {string} fieldName
 * @param {Object} instance
 * @return {string} The validation type for the given field and instance.
 */

const validateTypeForField = (fieldName, instance) => {
  return instance[_constants__WEBPACK_IMPORTED_MODULE_4__.PRIVATE_PROPERTIES.VALIDATE_TYPES][fieldName] ? instance[_constants__WEBPACK_IMPORTED_MODULE_4__.PRIVATE_PROPERTIES.VALIDATE_TYPES][fieldName] : _constants__WEBPACK_IMPORTED_MODULE_4__.VALIDATE_TYPE.RAW;
};

/***/ }),

/***/ "./assets/src/data/model/event/constants.js":
/*!**************************************************!*\
  !*** ./assets/src/data/model/event/constants.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EVENT_STATUS_ID": function() { return /* binding */ EVENT_STATUS_ID; },
/* harmony export */   "EVENT_STATUS_IDS": function() { return /* binding */ EVENT_STATUS_IDS; },
/* harmony export */   "MODEL_NAME": function() { return /* binding */ MODEL_NAME; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

const MODEL_NAME = 'event';
const EVENT_STATUS_ID = {
  SOLD_OUT: 'sold_out',
  POSTPONED: 'postponed',
  CANCELLED: 'cancelled'
};
const EVENT_STATUS_IDS = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.values)(EVENT_STATUS_ID);

/***/ }),

/***/ "./assets/src/data/model/event/index.js":
/*!**********************************************!*\
  !*** ./assets/src/data/model/event/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EVENT_STATUS_ID": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_STATUS_ID; },
/* harmony export */   "EVENT_STATUS_IDS": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_STATUS_IDS; },
/* harmony export */   "MODEL_NAME": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MODEL_NAME; },
/* harmony export */   "defaultQueryData": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.defaultQueryData; },
/* harmony export */   "getQueryString": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.getQueryString; },
/* harmony export */   "mapOrderBy": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.mapOrderBy; },
/* harmony export */   "nowDateAndTime": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.nowDateAndTime; },
/* harmony export */   "queryDataTypes": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.queryDataTypes; },
/* harmony export */   "whereConditions": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.whereConditions; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/event/constants.js");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query */ "./assets/src/data/model/event/query.js");



/***/ }),

/***/ "./assets/src/data/model/event/query.js":
/*!**********************************************!*\
  !*** ./assets/src/data/model/event/query.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultQueryData": function() { return /* binding */ defaultQueryData; },
/* harmony export */   "getQueryString": function() { return /* binding */ getQueryString; },
/* harmony export */   "mapOrderBy": function() { return /* binding */ mapOrderBy; },
/* harmony export */   "nowDateAndTime": function() { return /* binding */ nowDateAndTime; },
/* harmony export */   "queryDataTypes": function() { return /* binding */ queryDataTypes; },
/* harmony export */   "whereConditions": function() { return /* binding */ whereConditions; }
/* harmony export */ });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "moment-timezone");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base */ "./assets/src/data/model/base.js");
/**
 * External dependencies
 */



/**
 * Internal imports
 */


const nowDateAndTime = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()();
/**
 * Described attributes for this model
 *
 * @type {{attributes: *}}
 */

const queryDataTypes = {
  queryData: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    limit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    orderBy: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['EVT_name', 'EVT_ID', 'start_date', 'end_date', 'ticket_start', 'ticket_end']),
    order: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(_base__WEBPACK_IMPORTED_MODULE_2__.ALLOWED_ORDER_VALUES),
    showExpired: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    categorySlug: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    month: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().month)
  })
};
/**
 * Default attributes for this model
 *
 * @type {
 * 	{
 * 		attributes: {
 * 			limit: number,
 * 			orderBy: string,
 * 			order: string,
 *   		showExpired: boolean
 *   	}
 *   }
 * }
 */

const defaultQueryData = {
  queryData: {
    limit: 100,
    orderBy: 'start_date',
    order: _base__WEBPACK_IMPORTED_MODULE_2__.QUERY_ORDER_DESC,
    showExpired: false
  }
};
/**
 * Used to map an orderBy string to the actual value used in a REST query from
 * the context of an event.
 *
 * @param {string} orderBy
 *
 * @return { string } Returns an actual orderBy string for the REST query for
 *                      the provided alias
 */

const mapOrderBy = orderBy => {
  const orderByMap = {
    start_date: 'Datetime.DTT_EVT_start',
    end_date: 'Datetime.DTT_EVT_end',
    ticket_start: 'Datetime.Ticket.TKT_start_date',
    ticket_end: 'Datetime.Ticket.TKT_end_date'
  };
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(orderByMap[orderBy]) ? orderBy : orderByMap[orderBy];
};
/**
 * Builds where conditions for an events endpoint request using provided
 * information.
 *
 * @param {boolean} showExpired  Whether or not to include expired events.
 * @param {string} categorySlug  Return events for the given categorySlug
 * @param {string} month         Return events for the given month.
 * 								 Can be any month format recognized by moment.
 * @return {string}              The assembled where conditions.
 */

const whereConditions = _ref => {
  let {
    showExpired = false,
    categorySlug,
    month = 'none'
  } = _ref;
  const where = [];

  if (!showExpired) {
    where.push('where[Datetime.DTT_EVT_end**expired][]=' + _base__WEBPACK_IMPORTED_MODULE_2__.GREATER_THAN + '&where[Datetime.DTT_EVT_end**expired][]=' + nowDateAndTime.local().format());
  }

  if (categorySlug) {
    where.push('where[Term_Relationship.Term_Taxonomy.Term.slug]=' + categorySlug);
  }

  if (month && month !== 'none') {
    where.push('where[Datetime.DTT_EVT_start][]=' + _base__WEBPACK_IMPORTED_MODULE_2__.GREATER_THAN_AND_EQUAL + '&where[Datetime.DTT_EVT_start][]=' + moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()().month(month).startOf('month').local().format());
    where.push('where[Datetime.DTT_EVT_end][]=' + _base__WEBPACK_IMPORTED_MODULE_2__.LESS_THAN_AND_EQUAL + '&where[Datetime.DTT_EVT_end][]=' + moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()().month(month).endOf('month').local().format());
  }

  return where.join('&');
};
/**
 * Return a query string for use by a REST request given a set of queryData.
 *
 * @param { Object } queryData
 * @return { string }  Returns the query string.
 */

const getQueryString = function () {
  let queryData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  queryData = { ...defaultQueryData.queryData,
    ...queryData
  };
  return (0,_base__WEBPACK_IMPORTED_MODULE_2__.getQueryString)(queryData, whereConditions, mapOrderBy);
};

/***/ }),

/***/ "./assets/src/data/model/index.js":
/*!****************************************!*\
  !*** ./assets/src/data/model/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALLOWED_ORDER_VALUES": function() { return /* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_5__.ALLOWED_ORDER_VALUES; },
/* harmony export */   "DEFAULT_CORE_STATE": function() { return /* reexport safe */ _default_model_state__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CORE_STATE; },
/* harmony export */   "DEFAULT_LISTS_STATE": function() { return /* reexport safe */ _default_model_state__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_LISTS_STATE; },
/* harmony export */   "DEFAULT_SCHEMA_STATE": function() { return /* reexport safe */ _default_model_state__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_SCHEMA_STATE; },
/* harmony export */   "GREATER_THAN": function() { return /* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_5__.GREATER_THAN; },
/* harmony export */   "GREATER_THAN_AND_EQUAL": function() { return /* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_5__.GREATER_THAN_AND_EQUAL; },
/* harmony export */   "LESS_THAN": function() { return /* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_5__.LESS_THAN; },
/* harmony export */   "LESS_THAN_AND_EQUAL": function() { return /* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_5__.LESS_THAN_AND_EQUAL; },
/* harmony export */   "MODEL_NAMES": function() { return /* reexport safe */ _model_names__WEBPACK_IMPORTED_MODULE_4__.MODEL_NAMES; },
/* harmony export */   "MODEL_PREFIXES": function() { return /* reexport safe */ _entity_factory__WEBPACK_IMPORTED_MODULE_7__.MODEL_PREFIXES; },
/* harmony export */   "QUERY_ORDER_ASC": function() { return /* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_5__.QUERY_ORDER_ASC; },
/* harmony export */   "QUERY_ORDER_DESC": function() { return /* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_5__.QUERY_ORDER_DESC; },
/* harmony export */   "SAVE_STATE": function() { return /* reexport safe */ _entity_factory__WEBPACK_IMPORTED_MODULE_7__.SAVE_STATE; },
/* harmony export */   "applyQueryString": function() { return /* reexport safe */ _endpoints__WEBPACK_IMPORTED_MODULE_1__.applyQueryString; },
/* harmony export */   "assertEntityHasKey": function() { return /* reexport safe */ _assertions__WEBPACK_IMPORTED_MODULE_3__.assertEntityHasKey; },
/* harmony export */   "assertImmutableObjectHasPath": function() { return /* reexport safe */ _assertions__WEBPACK_IMPORTED_MODULE_3__.assertImmutableObjectHasPath; },
/* harmony export */   "assertIsArray": function() { return /* reexport safe */ _assertions__WEBPACK_IMPORTED_MODULE_3__.assertIsArray; },
/* harmony export */   "assertIsMap": function() { return /* reexport safe */ _assertions__WEBPACK_IMPORTED_MODULE_3__.assertIsMap; },
/* harmony export */   "assertIsNotEmpty": function() { return /* reexport safe */ _assertions__WEBPACK_IMPORTED_MODULE_3__.assertIsNotEmpty; },
/* harmony export */   "attendeeModel": function() { return /* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_6__.attendeeModel; },
/* harmony export */   "baseRestRoute": function() { return /* reexport safe */ _endpoints__WEBPACK_IMPORTED_MODULE_1__.baseRestRoute; },
/* harmony export */   "checkInModel": function() { return /* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_6__.checkInModel; },
/* harmony export */   "createAndKeyEntitiesByPrimaryKeyValue": function() { return /* reexport safe */ _primary_keys__WEBPACK_IMPORTED_MODULE_2__.createAndKeyEntitiesByPrimaryKeyValue; },
/* harmony export */   "createEntityFactory": function() { return /* reexport safe */ _entity_factory__WEBPACK_IMPORTED_MODULE_7__.createEntityFactory; },
/* harmony export */   "dateTimeModel": function() { return /* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_6__.dateTimeModel; },
/* harmony export */   "endpoints": function() { return /* reexport safe */ _endpoints__WEBPACK_IMPORTED_MODULE_1__.endpoints; },
/* harmony export */   "eventModel": function() { return /* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_6__.eventModel; },
/* harmony export */   "getEndpoint": function() { return /* reexport safe */ _endpoints__WEBPACK_IMPORTED_MODULE_1__.getEndpoint; },
/* harmony export */   "getEntityPrimaryKeyValues": function() { return /* reexport safe */ _primary_keys__WEBPACK_IMPORTED_MODULE_2__.getEntityPrimaryKeyValues; },
/* harmony export */   "getPrimaryKey": function() { return /* reexport safe */ _primary_keys__WEBPACK_IMPORTED_MODULE_2__.getPrimaryKey; },
/* harmony export */   "getPrimaryKeyQueryString": function() { return /* reexport safe */ _primary_keys__WEBPACK_IMPORTED_MODULE_2__.getPrimaryKeyQueryString; },
/* harmony export */   "getQueryString": function() { return /* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_5__.getQueryString; },
/* harmony export */   "keyEntitiesByPrimaryKeyValue": function() { return /* reexport safe */ _primary_keys__WEBPACK_IMPORTED_MODULE_2__.keyEntitiesByPrimaryKeyValue; },
/* harmony export */   "modelNameForQueryString": function() { return /* reexport safe */ _model_names__WEBPACK_IMPORTED_MODULE_4__.modelNameForQueryString; },
/* harmony export */   "pluralModelName": function() { return /* reexport safe */ _model_names__WEBPACK_IMPORTED_MODULE_4__.pluralModelName; },
/* harmony export */   "primaryKeys": function() { return /* reexport safe */ _primary_keys__WEBPACK_IMPORTED_MODULE_2__.primaryKeys; },
/* harmony export */   "registrationModel": function() { return /* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_6__.registrationModel; },
/* harmony export */   "singularModelName": function() { return /* reexport safe */ _model_names__WEBPACK_IMPORTED_MODULE_4__.singularModelName; },
/* harmony export */   "statusModel": function() { return /* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_6__.statusModel; },
/* harmony export */   "stripBaseRouteFromUrl": function() { return /* reexport safe */ _endpoints__WEBPACK_IMPORTED_MODULE_1__.stripBaseRouteFromUrl; },
/* harmony export */   "ticketModel": function() { return /* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_6__.ticketModel; },
/* harmony export */   "valueForPrimaryKey": function() { return /* reexport safe */ _primary_keys__WEBPACK_IMPORTED_MODULE_2__.valueForPrimaryKey; },
/* harmony export */   "valuesForCombinedPrimaryKeys": function() { return /* reexport safe */ _primary_keys__WEBPACK_IMPORTED_MODULE_2__.valuesForCombinedPrimaryKeys; }
/* harmony export */ });
/* harmony import */ var _default_model_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-model-state */ "./assets/src/data/model/default-model-state.js");
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpoints */ "./assets/src/data/model/endpoints.js");
/* harmony import */ var _primary_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./primary-keys */ "./assets/src/data/model/primary-keys.js");
/* harmony import */ var _assertions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assertions */ "./assets/src/data/model/assertions.js");
/* harmony import */ var _model_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model-names */ "./assets/src/data/model/model-names.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base */ "./assets/src/data/model/base.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models */ "./assets/src/data/model/models.js");
/* harmony import */ var _entity_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entity-factory */ "./assets/src/data/model/entity-factory/index.js");









/***/ }),

/***/ "./assets/src/data/model/model-names.js":
/*!**********************************************!*\
  !*** ./assets/src/data/model/model-names.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODEL_NAMES": function() { return /* binding */ MODEL_NAMES; },
/* harmony export */   "modelNameForQueryString": function() { return /* binding */ modelNameForQueryString; },
/* harmony export */   "pluralModelName": function() { return /* binding */ pluralModelName; },
/* harmony export */   "singularModelName": function() { return /* binding */ singularModelName; }
/* harmony export */ });
/* harmony import */ var _primary_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primary-keys.js */ "./assets/src/data/model/primary-keys.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! memize */ "./node_modules/memize/index.js");
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Internal imports
 */

/**
 * External imports
 */




/**
 * Returns an array of model names currently exposed for REST API request.
 */

const MODEL_NAMES = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.keys)(_primary_keys_js__WEBPACK_IMPORTED_MODULE_0__.primaryKeys);
/**
 * Used to normalize the plural form of a given model name.
 *
 * @param {string} modelName
 * @return {string}  Ensures the given modelName is its plural form.
 */

const pluralModelName = memize__WEBPACK_IMPORTED_MODULE_3___default()(modelName => pluralize__WEBPACK_IMPORTED_MODULE_2___default()(modelName));
/**
 * Used to normalize the singular form of a given model name.
 *
 * @param {string} modelName
 * @return {string} Ensures the given modelName is in its singular form.
 */

const singularModelName = memize__WEBPACK_IMPORTED_MODULE_3___default()(modelName => pluralize__WEBPACK_IMPORTED_MODULE_2___default().singular(modelName));
/**
 * Provides the capitalized snakecase format for the given model name typically
 * used in query strings.
 *
 * Example:
 *
 * modelNameForQueryString( 'message_template_group' );
 * // Message_Template_Group
 *
 * @param {string} modelName
 * @return {string} the formatted string.
 */

const modelNameForQueryString = memize__WEBPACK_IMPORTED_MODULE_3___default()(modelName => {
  modelName = singularModelName(modelName);
  modelName = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.startCase)(modelName);
  return modelName.replace(/\s/g, '_');
});

/***/ }),

/***/ "./assets/src/data/model/models.js":
/*!*****************************************!*\
  !*** ./assets/src/data/model/models.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attendeeModel": function() { return /* reexport module object */ _attendee__WEBPACK_IMPORTED_MODULE_6__; },
/* harmony export */   "checkInModel": function() { return /* reexport module object */ _checkin__WEBPACK_IMPORTED_MODULE_5__; },
/* harmony export */   "dateTimeModel": function() { return /* reexport module object */ _datetime__WEBPACK_IMPORTED_MODULE_0__; },
/* harmony export */   "eventModel": function() { return /* reexport module object */ _event__WEBPACK_IMPORTED_MODULE_1__; },
/* harmony export */   "registrationModel": function() { return /* reexport module object */ _registration__WEBPACK_IMPORTED_MODULE_2__; },
/* harmony export */   "statusModel": function() { return /* reexport module object */ _status__WEBPACK_IMPORTED_MODULE_3__; },
/* harmony export */   "ticketModel": function() { return /* reexport module object */ _ticket__WEBPACK_IMPORTED_MODULE_4__; }
/* harmony export */ });
/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetime */ "./assets/src/data/model/datetime/index.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./assets/src/data/model/event/index.js");
/* harmony import */ var _registration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration */ "./assets/src/data/model/registration/index.js");
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status */ "./assets/src/data/model/status/index.js");
/* harmony import */ var _ticket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ticket */ "./assets/src/data/model/ticket/index.js");
/* harmony import */ var _checkin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkin */ "./assets/src/data/model/checkin/index.js");
/* harmony import */ var _attendee__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attendee */ "./assets/src/data/model/attendee/index.js");









/***/ }),

/***/ "./assets/src/data/model/primary-keys.js":
/*!***********************************************!*\
  !*** ./assets/src/data/model/primary-keys.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAndKeyEntitiesByPrimaryKeyValue": function() { return /* binding */ createAndKeyEntitiesByPrimaryKeyValue; },
/* harmony export */   "getEntityPrimaryKeyValues": function() { return /* binding */ getEntityPrimaryKeyValues; },
/* harmony export */   "getPrimaryKey": function() { return /* binding */ getPrimaryKey; },
/* harmony export */   "getPrimaryKeyQueryString": function() { return /* binding */ getPrimaryKeyQueryString; },
/* harmony export */   "keyEntitiesByPrimaryKeyValue": function() { return /* binding */ keyEntitiesByPrimaryKeyValue; },
/* harmony export */   "primaryKeys": function() { return /* binding */ primaryKeys; },
/* harmony export */   "valueForPrimaryKey": function() { return /* binding */ valueForPrimaryKey; },
/* harmony export */   "valuesForCombinedPrimaryKeys": function() { return /* binding */ valuesForCombinedPrimaryKeys; }
/* harmony export */ });
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! memize */ "./node_modules/memize/index.js");
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assertions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assertions */ "./assets/src/data/model/assertions.js");
/**
 * External imports
 */




/**
 * Internal imports
 */


/**
 * Exposes a map of modelname to primary key exposed by the eejs.data global
 * via the server.
 *
 * @type {{}}
 */

const {
  primary_keys: primaryKeys = {}
} = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_0__.data.paths;
/**
 * Returns the values for the given keys from the provided entity.
 * This function would be used for models that have combined primary keys
 * (delivered as an array).
 *
 * @type { memoized }
 * @return { string } The string representation for the values.
 * @throws { Exception }
 */

const valuesForCombinedPrimaryKeys = memize__WEBPACK_IMPORTED_MODULE_3___default()((keys, entity) => {
  (0,_assertions__WEBPACK_IMPORTED_MODULE_4__.assertIsArray)(keys);
  const primaryKey = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.reduce)(keys, function (result, key) {
    (0,_assertions__WEBPACK_IMPORTED_MODULE_4__.assertEntityHasKey)(key, entity);
    return entity[result] + ':' + entity[key];
  });
  return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.trimEnd)(primaryKey, ':');
});
/**
 * Returns the value for the given key from the provided entity.
 * This function would be used for models that have only one primary key.
 *
 * @type {memoized}
 * @return {Function} The value for the key in the provided entity.
 * @throws { Exception }
 */

const valueForPrimaryKey = memize__WEBPACK_IMPORTED_MODULE_3___default()((key, entity) => {
  (0,_assertions__WEBPACK_IMPORTED_MODULE_4__.assertEntityHasKey)(key, entity);
  return entity[key];
});
/**
 * Returns the primary key (or combined primary keys) from the available data.
 *
 * @type {memoized}
 * @return { function(string) }
 * @throws { Exception }
 */

const getPrimaryKey = memize__WEBPACK_IMPORTED_MODULE_3___default()(modelName => {
  (0,_assertions__WEBPACK_IMPORTED_MODULE_4__.assertEntityHasKey)(modelName, primaryKeys);
  return primaryKeys[modelName];
});
/**
 * Returns a query string for getting the entities belonging to a model for the
 * given primary key values
 *
 * @type {memoized}
 */

const getPrimaryKeyQueryString = memize__WEBPACK_IMPORTED_MODULE_3___default()(function (modelName) {
  let keyValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const primaryKey = getPrimaryKey(modelName);
  return `[${primaryKey}][IN]=` + keyValues.join();
});
/**
 * Returns the values for the primary keys from the provided entity.
 *
 * @type {memoized}
 * @return {Function}  If the model has only one primary key then the value will
 * be a simple string.  If the model has combined primary keys, then the value
 * will be as string in the format `%s.%s` for the primary key values.
 * @throws { Exception }
 */

const getEntityPrimaryKeyValues = memize__WEBPACK_IMPORTED_MODULE_3___default()((modelName, entity) => {
  const keys = getPrimaryKey(modelName);
  return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isArray)(keys) ? valuesForCombinedPrimaryKeys(keys, entity) : valueForPrimaryKey(keys, entity);
});
/**
 * This receives an array of entities and returns a collection of those same
 * entities indexed by the primary key value for each entity.
 *
 * @param {string} modelName
 * @param {Array} entities
 * @return {Map}  A collection indexed by the primary key values for each entity.
 * @throws {Exception}
 */

const keyEntitiesByPrimaryKeyValue = function (modelName) {
  let entities = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  (0,_assertions__WEBPACK_IMPORTED_MODULE_4__.assertIsNotEmpty)(entities, (0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The provided array of entities must not be empty', 'event_espresso'));
  (0,_assertions__WEBPACK_IMPORTED_MODULE_4__.assertIsArray)(entities);
  const mappedEntities = new Map();
  entities.forEach(entity => {
    mappedEntities.set(getEntityPrimaryKeyValues(modelName, entity), entity);
  });
  return mappedEntities;
};
/**
 * Creates an array of entity instances using the given factory and array
 * of entity values.
 *
 * @param {Object} factory
 * @param {Map} entities
 * @return {Map}  An array of entity instances indexed by
 * their primary key value
 */

const createAndKeyEntitiesByPrimaryKeyValue = (factory, entities) => {
  (0,_assertions__WEBPACK_IMPORTED_MODULE_4__.assertIsMap)(entities, (0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The provided object of entities must be a Map object', 'event_espresso'));
  entities.forEach((entity, entityId) => {
    entities.set(entityId, factory.fromExisting(entity));
  });
  return entities;
};

/***/ }),

/***/ "./assets/src/data/model/registration/constants.js":
/*!*********************************************************!*\
  !*** ./assets/src/data/model/registration/constants.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODEL_NAME": function() { return /* binding */ MODEL_NAME; },
/* harmony export */   "REGISTRATION_STATUS_IDS": function() { return /* binding */ REGISTRATION_STATUS_IDS; }
/* harmony export */ });
/* harmony import */ var _status_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../status/constants */ "./assets/src/data/model/status/constants.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Internal Imports
 */

/**
 * External imports
 */


const MODEL_NAME = 'registration';
const REGISTRATION_STATUS_IDS = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.values)(_status_constants__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_STATUS_ID);

/***/ }),

/***/ "./assets/src/data/model/registration/index.js":
/*!*****************************************************!*\
  !*** ./assets/src/data/model/registration/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODEL_NAME": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MODEL_NAME; },
/* harmony export */   "REGISTRATION_STATUS_IDS": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_STATUS_IDS; },
/* harmony export */   "defaultQueryData": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.defaultQueryData; },
/* harmony export */   "getQueryString": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.getQueryString; },
/* harmony export */   "mapOrderBy": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.mapOrderBy; },
/* harmony export */   "optionsEntityMap": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.optionsEntityMap; },
/* harmony export */   "queryDataTypes": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.queryDataTypes; },
/* harmony export */   "whereConditions": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.whereConditions; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/registration/constants.js");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query */ "./assets/src/data/model/registration/query.js");



/***/ }),

/***/ "./assets/src/data/model/registration/query.js":
/*!*****************************************************!*\
  !*** ./assets/src/data/model/registration/query.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultQueryData": function() { return /* binding */ defaultQueryData; },
/* harmony export */   "getQueryString": function() { return /* binding */ getQueryString; },
/* harmony export */   "mapOrderBy": function() { return /* binding */ mapOrderBy; },
/* harmony export */   "optionsEntityMap": function() { return /* binding */ optionsEntityMap; },
/* harmony export */   "queryDataTypes": function() { return /* binding */ queryDataTypes; },
/* harmony export */   "whereConditions": function() { return /* binding */ whereConditions; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base */ "./assets/src/data/model/base.js");
/* harmony import */ var _status_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../status/constants */ "./assets/src/data/model/status/constants.js");
/**
 * External imports
 */


/**
 * Internal imports
 */



/**
 * Described attributes for this model
 *
 * @type {{attributes: *}}
 */

const queryDataTypes = {
  forEventId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  forAttendeeId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  forTransactionId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  forTicketId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  forStatusId: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_0__.values)(_status_constants__WEBPACK_IMPORTED_MODULE_2__.REGISTRATION_STATUS_ID)),
  queryData: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    limit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    orderBy: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['REG_ID', 'REG_date']),
    order: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(_base__WEBPACK_IMPORTED_MODULE_1__.ALLOWED_ORDER_VALUES)
  })
};
const optionsEntityMap = {
  default: {
    value: 'REG_ID',
    label: 'REG_code'
  }
};
/**
 * Default attributes for this model
 *
 * @type {
 * 	{
 * 		attributes: {
 * 			limit: number,
 * 			orderBy: string,
 * 			order: string,
 *   	}
 *   }
 * }
 */

const defaultQueryData = {
  queryData: {
    limit: 100,
    orderBy: 'reg_date',
    order: _base__WEBPACK_IMPORTED_MODULE_1__.QUERY_ORDER_DESC
  }
};
/**
 * Used to map an orderBy string to the actual value used in a REST query from
 * the context of a registration.
 *
 * @param {string} orderBy
 *
 * @return { string } Returns an actual orderBy string for the REST query for
 *                      the provided alias
 */

const mapOrderBy = orderBy => {
  const orderByMap = {
    reg_id: 'REG_ID',
    reg_date: 'REG_date'
  };
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(orderByMap[orderBy]) ? orderBy : orderByMap[orderBy];
};
/**
 * Builds where conditions for an registrations endpoint request
 *
 * @param {number} forEventId    	ID of Event to retrieve registrations for
 * @param {number} forAttendeeId    ID of Attendee to retrieve registrations for
 * @param {number} forTransactionId ID of Transaction to retrieve registrations for
 * @param {number} forTicketId 		ID of Ticket to retrieve registrations for
 * @param {string} forStatusId 		ID of Status to retrieve registrations for
 * @return {string}                	The assembled where conditions.
 */

const whereConditions = _ref => {
  let {
    forEventId = 0,
    forAttendeeId = 0,
    forTransactionId = 0,
    forTicketId = 0,
    forStatusId = ''
  } = _ref;
  const where = [];
  forEventId = parseInt(forEventId, 10);

  if (forEventId !== 0 && !isNaN(forEventId)) {
    where.push('where[EVT_ID]=' + forEventId);
  }

  forAttendeeId = parseInt(forAttendeeId, 10);

  if (forAttendeeId !== 0 && !isNaN(forAttendeeId)) {
    where.push('where[ATT_ID]=' + forAttendeeId);
  }

  forTransactionId = parseInt(forTransactionId, 10);

  if (forTransactionId !== 0 && !isNaN(forTransactionId)) {
    where.push('where[TXN_ID]=' + forTransactionId);
  }

  forTicketId = parseInt(forTicketId, 10);

  if (forTicketId !== 0 && !isNaN(forTicketId)) {
    where.push('where[TKT_ID]=' + forTicketId);
  }

  if (forStatusId !== '' && forStatusId !== null) {
    where.push('where[STS_ID]=' + forStatusId);
  }

  return where.join('&');
};
/**
 * Return a query string for use by a REST request given a set of queryData.
 *
 * @param { Object } queryData
 * @return { string }  Returns the query string.
 */

const getQueryString = function () {
  let queryData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  queryData = { ...defaultQueryData.queryData,
    ...queryData
  };
  return (0,_base__WEBPACK_IMPORTED_MODULE_1__.getQueryString)(queryData, whereConditions, mapOrderBy);
};

/***/ }),

/***/ "./assets/src/data/model/status/constants.js":
/*!***************************************************!*\
  !*** ./assets/src/data/model/status/constants.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_STATUS_IDS": function() { return /* binding */ ALL_STATUS_IDS; },
/* harmony export */   "CPT_STATUS_ID": function() { return /* binding */ CPT_STATUS_ID; },
/* harmony export */   "EMAIL_STATUS_ID": function() { return /* binding */ EMAIL_STATUS_ID; },
/* harmony export */   "EVENT_STATUS_ID": function() { return /* binding */ EVENT_STATUS_ID; },
/* harmony export */   "MESSAGE_STATUS_ID": function() { return /* binding */ MESSAGE_STATUS_ID; },
/* harmony export */   "MODEL_NAME": function() { return /* binding */ MODEL_NAME; },
/* harmony export */   "PAYMENT_STATUS_ID": function() { return /* binding */ PAYMENT_STATUS_ID; },
/* harmony export */   "REGISTRATION_STATUS_ID": function() { return /* binding */ REGISTRATION_STATUS_ID; },
/* harmony export */   "STATUS_TYPE_EMAIL": function() { return /* binding */ STATUS_TYPE_EMAIL; },
/* harmony export */   "STATUS_TYPE_EVENT": function() { return /* binding */ STATUS_TYPE_EVENT; },
/* harmony export */   "STATUS_TYPE_MESSAGE": function() { return /* binding */ STATUS_TYPE_MESSAGE; },
/* harmony export */   "STATUS_TYPE_PAYMENT": function() { return /* binding */ STATUS_TYPE_PAYMENT; },
/* harmony export */   "STATUS_TYPE_REGISTRATION": function() { return /* binding */ STATUS_TYPE_REGISTRATION; },
/* harmony export */   "STATUS_TYPE_TRANSACTION": function() { return /* binding */ STATUS_TYPE_TRANSACTION; },
/* harmony export */   "TRANSACTION_STATUS_ID": function() { return /* binding */ TRANSACTION_STATUS_ID; },
/* harmony export */   "UNKNOWN_STATUS_ID": function() { return /* binding */ UNKNOWN_STATUS_ID; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

const MODEL_NAME = 'status'; // types

const STATUS_TYPE_EMAIL = 'email';
const STATUS_TYPE_EVENT = 'event';
const STATUS_TYPE_MESSAGE = 'message';
const STATUS_TYPE_PAYMENT = 'payment';
const STATUS_TYPE_REGISTRATION = 'registration';
const STATUS_TYPE_TRANSACTION = 'transaction'; // email

const EMAIL_STATUS_ID = {
  DRAFT: 'EDR',
  SENT: 'ESN',
  EXPIRED: 'EXP'
}; // event

const EVENT_STATUS_ID = {
  ACTIVE: 'ACT',
  REGISTRATION_CLOSED: 'CLS',
  DELETED: 'DEL',
  DENIED: 'DEN',
  DRAFT: 'DRF',
  NOT_ACTIVE: 'NAC',
  NOT_OPEN: 'NOP',
  ONGOING: 'ONG',
  REGISTRATION_OPEN: 'OPN',
  PENDING: 'PND',
  SECONDARY: 'SEC'
}; // message

const MESSAGE_STATUS_ID = {
  DEBUG: 'MDO',
  EXECUTING: 'MEX',
  FAIL: 'MFL',
  INCOMPLETE: 'MIC',
  IDLE: 'MID',
  RESEND: 'MRS',
  RETRY: 'MRT',
  SENT: 'MSN'
}; // payment

const PAYMENT_STATUS_ID = {
  APPROVED: 'PAP',
  CANCELLED: 'PCN',
  DECLINED: 'PDC',
  FAILED: 'PFL',
  PENDING: 'PPN'
}; // registration

const REGISTRATION_STATUS_ID = {
  APPROVED: 'RAP',
  CANCELLED: 'RCN',
  DECLINED: 'RDC',
  INCOMPLETE: 'RIC',
  NOT_APPROVED: 'RNA',
  PENDING_PAYMENT: 'RPP',
  WAIT_LIST: 'RWL'
}; // transaction

const TRANSACTION_STATUS_ID = {
  ABANDONED: 'TAB',
  COMPLETE: 'TCM',
  FAILED: 'TFL',
  INCOMPLETE: 'TIN',
  OVERPAID: 'TOP'
}; // the following are not in the status database but are kept here for
// convenience
// custom post types

const CPT_STATUS_ID = {
  PUBLISH: 'publish',
  FUTURE: 'future',
  DRAFT: 'draft',
  PENDING: 'pending',
  PRIVATE: 'private',
  TRASHED: 'trash'
};
const UNKNOWN_STATUS_ID = 'unknown';
const ALL_STATUS_IDS = [...(0,lodash__WEBPACK_IMPORTED_MODULE_0__.values)(EMAIL_STATUS_ID), ...(0,lodash__WEBPACK_IMPORTED_MODULE_0__.values)(EVENT_STATUS_ID), ...(0,lodash__WEBPACK_IMPORTED_MODULE_0__.values)(MESSAGE_STATUS_ID), ...(0,lodash__WEBPACK_IMPORTED_MODULE_0__.values)(PAYMENT_STATUS_ID), ...(0,lodash__WEBPACK_IMPORTED_MODULE_0__.values)(REGISTRATION_STATUS_ID), ...(0,lodash__WEBPACK_IMPORTED_MODULE_0__.values)(TRANSACTION_STATUS_ID), ...(0,lodash__WEBPACK_IMPORTED_MODULE_0__.values)(CPT_STATUS_ID), UNKNOWN_STATUS_ID];

/***/ }),

/***/ "./assets/src/data/model/status/helpers.js":
/*!*************************************************!*\
  !*** ./assets/src/data/model/status/helpers.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prettyStatus": function() { return /* binding */ prettyStatus; },
/* harmony export */   "prettyStatuses": function() { return /* binding */ prettyStatuses; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/status/constants.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event */ "./assets/src/data/model/event/index.js");
/* harmony import */ var _ticket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ticket */ "./assets/src/data/model/ticket/index.js");
/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datetime */ "./assets/src/data/model/datetime/index.js");
/* harmony import */ var _checkin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../checkin */ "./assets/src/data/model/checkin/index.js");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/**
 * Internal imports
 */





/**
 * External imports
 */




/**
 * Translation map for Registration statuses
 *
 * @type {{}}
 */

const STATUS_TRANSLATION_MAP_REGISTRATION = {
  [_constants__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_STATUS_ID.PENDING_PAYMENT]: new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('pending payment', 'event_espresso'), (0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('pending payments', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_STATUS_ID.APPROVED]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('approved', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_STATUS_ID.NOT_APPROVED]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('not approved', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_STATUS_ID.CANCELLED]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('cancelled', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_STATUS_ID.INCOMPLETE]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('incomplete', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_STATUS_ID.DECLINED]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('declined', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_STATUS_ID.WAIT_LIST]: new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('wait list', 'event_espresso'), (0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('wait lists', 'event_espresso'))
};
/**
 * Translation map for Transaction statuses
 *
 * @type {{}}
 *
 */

const STATUS_TRANSLATION_MAP_TRANSACTION = {
  [_constants__WEBPACK_IMPORTED_MODULE_0__.TRANSACTION_STATUS_ID.OVERPAID]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('overpaid', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.TRANSACTION_STATUS_ID.COMPLETE]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('complete', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.TRANSACTION_STATUS_ID.INCOMPLETE]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('incomplete', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.TRANSACTION_STATUS_ID.FAILED]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('failed', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.TRANSACTION_STATUS_ID.ABANDONED]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('abandoned', 'event_espresso'))
};
/**
 * Translation map for payment statuses
 *
 * @type {{}}
 */

const STATUS_TRANSLATION_MAP_PAYMENT = {
  [_constants__WEBPACK_IMPORTED_MODULE_0__.PAYMENT_STATUS_ID.APPROVED]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('accepted', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.PAYMENT_STATUS_ID.PENDING]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('pending', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.PAYMENT_STATUS_ID.CANCELLED]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('cancelled', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.PAYMENT_STATUS_ID.DECLINED]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('declined', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.PAYMENT_STATUS_ID.FAILED]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('failed', 'event_espresso'))
};
/**
 * Translation map for Message statuses
 *
 * @type {{}}
 */

const STATUS_TRANSLATION_MAP_MESSAGE = {
  [_constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS_ID.SENT]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('sent', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS_ID.IDLE]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('queued for sending', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS_ID.FAIL]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('failed', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS_ID.DEBUG]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('debug only', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS_ID.EXECUTING]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('messenger is executing', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS_ID.RESEND]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('queued for resending', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS_ID.INCOMPLETE]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('queued for generating', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS_ID.RETRY]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('failed sending, can be retried', 'event_espresso'))
};
/**
 * Translation map for CPT statuses
 *
 * @type {{}}
 */

const STATUS_TRANSLATION_MAP_CPT = {
  [_constants__WEBPACK_IMPORTED_MODULE_0__.CPT_STATUS_ID.PUBLISH]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('published', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.CPT_STATUS_ID.FUTURE]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('scheduled', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.CPT_STATUS_ID.DRAFT]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('draft', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.CPT_STATUS_ID.PENDING]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('pending', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.CPT_STATUS_ID.PRIVATE]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('private', 'event_espresso')),
  [_constants__WEBPACK_IMPORTED_MODULE_0__.CPT_STATUS_ID.TRASHED]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('trashed', 'event_espresso'))
}; // the following status maps are for model statuses that are not saved in the
// status table but for convenience have their labels retrievable via here.

/**
 * Translation map for Event Statuses
 *
 * @type {{}}
 */

const STATUS_TRANSLATION_MAP_EVENT = {
  [_event__WEBPACK_IMPORTED_MODULE_1__.EVENT_STATUS_ID.SOLD_OUT]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('sold out', 'event_espresso')),
  [_event__WEBPACK_IMPORTED_MODULE_1__.EVENT_STATUS_ID.POSTPONED]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('postponed', 'event_espresso')),
  [_event__WEBPACK_IMPORTED_MODULE_1__.EVENT_STATUS_ID.CANCELLED]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('cancelled', 'event_espresso'))
};
/**
 * Translation map for Ticket statuses
 *
 * @type {{}}
 */

const STATUS_TRANSLATION_MAP_TICKET = {
  [_ticket__WEBPACK_IMPORTED_MODULE_2__.TICKET_STATUS_ID.ARCHIVED]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('archived', 'event_espresso')),
  [_ticket__WEBPACK_IMPORTED_MODULE_2__.TICKET_STATUS_ID.EXPIRED]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('expired', 'event_espresso')),
  [_ticket__WEBPACK_IMPORTED_MODULE_2__.TICKET_STATUS_ID.SOLD_OUT]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('sold out', 'event_espresso')),
  [_ticket__WEBPACK_IMPORTED_MODULE_2__.TICKET_STATUS_ID.PENDING]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('upcoming', 'event_espresso')),
  [_ticket__WEBPACK_IMPORTED_MODULE_2__.TICKET_STATUS_ID.ONSALE]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('on sale', 'event_espresso'))
};
/**
 * Translation map for datetime statuses
 *
 * @type {{}}
 */

const STATUS_TRANSLATION_MAP_DATETIME = {
  [_datetime__WEBPACK_IMPORTED_MODULE_3__.DATETIME_STATUS_ID.CANCELLED]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('cancelled', 'event_espresso')),
  [_datetime__WEBPACK_IMPORTED_MODULE_3__.DATETIME_STATUS_ID.SOLD_OUT]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('sold out', 'event_espresso')),
  [_datetime__WEBPACK_IMPORTED_MODULE_3__.DATETIME_STATUS_ID.EXPIRED]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('expired', 'event_espresso')),
  [_datetime__WEBPACK_IMPORTED_MODULE_3__.DATETIME_STATUS_ID.INACTIVE]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('inactive', 'event_espresso')),
  [_datetime__WEBPACK_IMPORTED_MODULE_3__.DATETIME_STATUS_ID.UPCOMING]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('upcoming', 'event_espresso')),
  [_datetime__WEBPACK_IMPORTED_MODULE_3__.DATETIME_STATUS_ID.ACTIVE]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('active', 'event_espresso')),
  [_datetime__WEBPACK_IMPORTED_MODULE_3__.DATETIME_STATUS_ID.POSTPONED]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('postponed', 'event_espresso'))
};
/**
 * Translation map for checkin statuses
 *
 * @type {{}}
 */

const STATUS_TRANSLATION_MAP_CHECKIN = {
  [_checkin__WEBPACK_IMPORTED_MODULE_4__.CHECKIN_STATUS_ID.STATUS_CHECKED_IN]: new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('check-in', 'event_espresso'), (0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('check-ins', 'event_espresso')),
  [_checkin__WEBPACK_IMPORTED_MODULE_4__.CHECKIN_STATUS_ID.STATUS_CHECKED_OUT]: new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('check-out', 'event_espresso'), (0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('check-outs', 'event_espresso')),
  [_checkin__WEBPACK_IMPORTED_MODULE_4__.CHECKIN_STATUS_ID.STATUS_CHECKED_NEVER]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('never checked in', 'event_espresso'))
};
/**
 * Combined translation map for all statuses.
 *
 * @type {{}}
 */

const STATUS_TRANSLATION_MAP_ALL = { ...STATUS_TRANSLATION_MAP_REGISTRATION,
  ...STATUS_TRANSLATION_MAP_TRANSACTION,
  ...STATUS_TRANSLATION_MAP_PAYMENT,
  ...STATUS_TRANSLATION_MAP_MESSAGE,
  ...STATUS_TRANSLATION_MAP_CPT,
  ...STATUS_TRANSLATION_MAP_EVENT,
  ...STATUS_TRANSLATION_MAP_TICKET,
  ...STATUS_TRANSLATION_MAP_DATETIME,
  ...STATUS_TRANSLATION_MAP_CHECKIN,
  [_constants__WEBPACK_IMPORTED_MODULE_0__.UNKNOWN_STATUS_ID]: _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.fromSameSingleAndPlural((0,_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('unknown', 'event_espresso'))
};
/**
 * Returns the pretty status label string for the given arguments.
 *
 * @param {string} statusCode
 * @param {boolean} singular  Whether to return the singular or plural label
 * value
 * @param {(sentence|lower|upper)} schema
 * @return {string} Returns the mapped pretty label for the given status code or
 * a formatted 'unkown' string if there is no mapped value for the given code.
 */

const prettyStatus = function (statusCode) {
  let singular = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  let schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.FORMAT_SENTENCE_CASE;
  return STATUS_TRANSLATION_MAP_ALL[statusCode] ? STATUS_TRANSLATION_MAP_ALL[statusCode].asFormatted(singular, schema) : STATUS_TRANSLATION_MAP_ALL[_constants__WEBPACK_IMPORTED_MODULE_0__.UNKNOWN_STATUS_ID].asFormatted(singular, schema);
};
/**
 * Expects an array of status codes and returns an object indexed by codes with
 * values being the formatted pretty labels for each code according to the
 * provided arguments
 *
 * @param {Array} statusCodes
 * @param {boolean} singular
 * @param {(sentence|lower|upper)} schema
 * @return {Object} An object mapping status code to pretty label.
 */

const prettyStatuses = function (statusCodes) {
  let singular = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  let schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__.Label.FORMAT_SENTENCE_CASE;

  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_7__.isArray)(statusCodes)) {
    throw new TypeError('Expect incoming statusCodes argument' + ' to be an array');
  }

  const mappedStatuses = {};
  statusCodes.forEach(statusCode => {
    mappedStatuses[statusCode] = prettyStatus(statusCode, singular, schema);
  });
  return mappedStatuses;
};

/***/ }),

/***/ "./assets/src/data/model/status/index.js":
/*!***********************************************!*\
  !*** ./assets/src/data/model/status/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_STATUS_IDS": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ALL_STATUS_IDS; },
/* harmony export */   "CPT_STATUS_ID": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CPT_STATUS_ID; },
/* harmony export */   "EMAIL_STATUS_ID": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.EMAIL_STATUS_ID; },
/* harmony export */   "EVENT_STATUS_ID": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_STATUS_ID; },
/* harmony export */   "MESSAGE_STATUS_ID": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_STATUS_ID; },
/* harmony export */   "MODEL_NAME": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MODEL_NAME; },
/* harmony export */   "PAYMENT_STATUS_ID": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PAYMENT_STATUS_ID; },
/* harmony export */   "REGISTRATION_STATUS_ID": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_STATUS_ID; },
/* harmony export */   "STATUS_TYPE_EMAIL": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.STATUS_TYPE_EMAIL; },
/* harmony export */   "STATUS_TYPE_EVENT": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.STATUS_TYPE_EVENT; },
/* harmony export */   "STATUS_TYPE_MESSAGE": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.STATUS_TYPE_MESSAGE; },
/* harmony export */   "STATUS_TYPE_PAYMENT": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.STATUS_TYPE_PAYMENT; },
/* harmony export */   "STATUS_TYPE_REGISTRATION": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.STATUS_TYPE_REGISTRATION; },
/* harmony export */   "STATUS_TYPE_TRANSACTION": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.STATUS_TYPE_TRANSACTION; },
/* harmony export */   "TRANSACTION_STATUS_ID": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.TRANSACTION_STATUS_ID; },
/* harmony export */   "UNKNOWN_STATUS_ID": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.UNKNOWN_STATUS_ID; },
/* harmony export */   "defaultQueryData": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.defaultQueryData; },
/* harmony export */   "getQueryString": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.getQueryString; },
/* harmony export */   "mapOrderBy": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.mapOrderBy; },
/* harmony export */   "prettyStatus": function() { return /* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_2__.prettyStatus; },
/* harmony export */   "prettyStatuses": function() { return /* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_2__.prettyStatuses; },
/* harmony export */   "queryDataTypes": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.queryDataTypes; },
/* harmony export */   "whereConditions": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.whereConditions; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/status/constants.js");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query */ "./assets/src/data/model/status/query.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./assets/src/data/model/status/helpers.js");




/***/ }),

/***/ "./assets/src/data/model/status/query.js":
/*!***********************************************!*\
  !*** ./assets/src/data/model/status/query.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultQueryData": function() { return /* binding */ defaultQueryData; },
/* harmony export */   "getQueryString": function() { return /* binding */ getQueryString; },
/* harmony export */   "mapOrderBy": function() { return /* binding */ mapOrderBy; },
/* harmony export */   "queryDataTypes": function() { return /* binding */ queryDataTypes; },
/* harmony export */   "whereConditions": function() { return /* binding */ whereConditions; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base */ "./assets/src/data/model/base.js");
/**
 * External imports
 */


/**
 * Internal dependencies
 */


/**
 * Described attributes for this model
 *
 * @type {{attributes: *}}
 */

const queryDataTypes = {
  queryData: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    limit: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    orderBy: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    order: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(_base__WEBPACK_IMPORTED_MODULE_1__.ALLOWED_ORDER_VALUES)
  })
};
/**
 * Default attributes for this model
 *
 * @type {
 * 	{
 * 		attributes: {
 * 			limit: number,
 * 			orderBy: string,
 * 			order: string,
 *   	}
 *   }
 * }
 */

const defaultQueryData = {
  queryData: {
    limit: 25,
    orderBy: 'statusCode',
    order: _base__WEBPACK_IMPORTED_MODULE_1__.QUERY_ORDER_ASC
  }
};
/**
 * Used to map an orderBy string to the actual value used in a REST query from
 * the context of an event.
 *
 * @param {string} orderBy
 *
 * @return { string } Returns an actual orderBy string for the REST query for
 *                      the provided alias
 */

const mapOrderBy = orderBy => {
  const orderByMap = {
    statusCode: 'STS_code'
  };
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(orderByMap[orderBy]) ? orderBy : orderByMap[orderBy];
};
/**
 * Builds where conditions for an events endpoint request using provided
 * information.
 *
 * @param {number} statusType 	ID for type of Status to retrieve
 * @return {string}             The assembled where conditions.
 */

const whereConditions = _ref => {
  let {
    statusType
  } = _ref;
  const where = [];

  if (statusType) {
    where.push('where[STS_type]=' + statusType);
  }

  return where.join('&');
};
/**
 * Return a query string for use by a REST request given a set of queryData.
 *
 * @param { Object } queryData
 * @return { string }  Returns the query string.
 */

const getQueryString = function () {
  let queryData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  queryData = { ...defaultQueryData.queryData,
    ...queryData
  };
  return (0,_base__WEBPACK_IMPORTED_MODULE_1__.getQueryString)(queryData, whereConditions, mapOrderBy);
};

/***/ }),

/***/ "./assets/src/data/model/ticket/constants.js":
/*!***************************************************!*\
  !*** ./assets/src/data/model/ticket/constants.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODEL_NAME": function() { return /* binding */ MODEL_NAME; },
/* harmony export */   "TICKET_STATUS_ID": function() { return /* binding */ TICKET_STATUS_ID; },
/* harmony export */   "TICKET_STATUS_IDS": function() { return /* binding */ TICKET_STATUS_IDS; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

const MODEL_NAME = 'ticket';
const TICKET_STATUS_ID = {
  SOLD_OUT: 'TKS',
  EXPIRED: 'TKE',
  ARCHIVED: 'TKA',
  PENDING: 'TKP',
  ONSALE: 'TKO'
};
const TICKET_STATUS_IDS = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.values)(TICKET_STATUS_ID);

/***/ }),

/***/ "./assets/src/data/model/ticket/index.js":
/*!***********************************************!*\
  !*** ./assets/src/data/model/ticket/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODEL_NAME": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MODEL_NAME; },
/* harmony export */   "TICKET_STATUS_ID": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.TICKET_STATUS_ID; },
/* harmony export */   "TICKET_STATUS_IDS": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.TICKET_STATUS_IDS; },
/* harmony export */   "defaultQueryData": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.defaultQueryData; },
/* harmony export */   "getQueryString": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.getQueryString; },
/* harmony export */   "mapOrderBy": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.mapOrderBy; },
/* harmony export */   "nowDateAndTime": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.nowDateAndTime; },
/* harmony export */   "queryDataTypes": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.queryDataTypes; },
/* harmony export */   "whereConditions": function() { return /* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.whereConditions; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/src/data/model/ticket/constants.js");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query */ "./assets/src/data/model/ticket/query.js");



/***/ }),

/***/ "./assets/src/data/model/ticket/query.js":
/*!***********************************************!*\
  !*** ./assets/src/data/model/ticket/query.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultQueryData": function() { return /* binding */ defaultQueryData; },
/* harmony export */   "getQueryString": function() { return /* binding */ getQueryString; },
/* harmony export */   "mapOrderBy": function() { return /* binding */ mapOrderBy; },
/* harmony export */   "nowDateAndTime": function() { return /* binding */ nowDateAndTime; },
/* harmony export */   "queryDataTypes": function() { return /* binding */ queryDataTypes; },
/* harmony export */   "whereConditions": function() { return /* binding */ whereConditions; }
/* harmony export */ });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "moment-timezone");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base */ "./assets/src/data/model/base.js");
/**
 * External imports
 */




const nowDateAndTime = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()();
/**
 * Described attributes for this model
 *
 * @type {{attributes: *}}
 */

const queryDataTypes = {
  queryData: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    limit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    orderBy: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['TKT_name', 'TKT_ID', 'start_date', 'end_date']),
    order: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(_base__WEBPACK_IMPORTED_MODULE_2__.ALLOWED_ORDER_VALUES),
    showExpired: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    month: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().month)
  })
};
/**
 * Default attributes for this model
 *
 * @type {
 * 	{
 * 		attributes: {
 * 			limit: number,
 * 			orderBy: string,
 * 			order: string,
 *   		showExpired: boolean
 *   	}
 *   }
 * }
 */

const defaultQueryData = {
  queryData: {
    limit: 100,
    orderBy: 'start_date',
    order: _base__WEBPACK_IMPORTED_MODULE_2__.QUERY_ORDER_DESC,
    showExpired: false
  }
};
/**
 * Used to map an orderBy string to the actual value used in a REST query from
 * the context of a ticket.
 *
 * @param {string} orderBy
 *
 * @return { string } Returns an actual orderBy string for the REST query for
 *                      the provided alias
 */

const mapOrderBy = orderBy => {
  const orderByMap = {
    start_date: 'TKT_start_date',
    end_date: 'TKT_end_date'
  };
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(orderByMap[orderBy]) ? orderBy : orderByMap[orderBy];
};
/**
 * Builds where conditions for an tickets endpoint request using provided
 * information.
 *
 * @param {boolean} showExpired 	Whether or not to include expired tickets.
 * @param {string} month            Return tickets for the given month. Can be
 *                                	in any month format recognized by moment
 * @param {number} forEventId    	ID of Event to retrieve tickets for
 * @param {number} forDatetimeId    ID of Datetime to retrieve tickets for
 * @return {string}                	The assembled where conditions.
 */

const whereConditions = _ref => {
  let {
    forEventId = 0,
    forDatetimeId = 0,
    showExpired = false,
    month = 'none'
  } = _ref;
  const where = [];

  if (!showExpired) {
    where.push('where[TKT_end_date**expired][]=' + _base__WEBPACK_IMPORTED_MODULE_2__.GREATER_THAN + '&where[TKT_end_date**expired][]=' + nowDateAndTime.local().format());
  }

  if (month && month !== 'none') {
    where.push('where[TKT_start_date][]=' + _base__WEBPACK_IMPORTED_MODULE_2__.GREATER_THAN_AND_EQUAL + '&where[TKT_start_date][]=' + moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()().month(month).startOf('month').local().format());
    where.push('where[TKT_end_date][]=' + _base__WEBPACK_IMPORTED_MODULE_2__.LESS_THAN_AND_EQUAL + '&where[TKT_end_date][]=' + moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()().month(month).endOf('month').local().format());
  }

  forEventId = parseInt(forEventId, 10);

  if (forEventId !== 0 && !isNaN(forEventId)) {
    where.push('where[Datetime.Event.EVT_ID]=' + forEventId);
  }

  forDatetimeId = parseInt(forDatetimeId, 10);

  if (forDatetimeId !== 0 && !isNaN(forDatetimeId)) {
    where.push('where[Datetime.DTT_ID]=' + forDatetimeId);
  }

  return where.join('&');
};
/**
 * Return a query string for use by a REST request given a set of queryData.
 *
 * @param { Object } queryData
 * @return { string }  Returns the query string.
 */

const getQueryString = function () {
  let queryData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  queryData = { ...defaultQueryData.queryData,
    ...queryData
  };
  return (0,_base__WEBPACK_IMPORTED_MODULE_2__.getQueryString)(queryData, whereConditions, mapOrderBy);
};

/***/ }),

/***/ "./node_modules/immutable/dist/immutable.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/immutable/dist/immutable.es.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Collection": function() { return /* binding */ Collection; },
/* harmony export */   "Iterable": function() { return /* binding */ Iterable; },
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "Map": function() { return /* binding */ Map; },
/* harmony export */   "OrderedMap": function() { return /* binding */ OrderedMap; },
/* harmony export */   "OrderedSet": function() { return /* binding */ OrderedSet; },
/* harmony export */   "Range": function() { return /* binding */ Range; },
/* harmony export */   "Record": function() { return /* binding */ Record; },
/* harmony export */   "Repeat": function() { return /* binding */ Repeat; },
/* harmony export */   "Seq": function() { return /* binding */ Seq; },
/* harmony export */   "Set": function() { return /* binding */ Set; },
/* harmony export */   "Stack": function() { return /* binding */ Stack; },
/* harmony export */   "fromJS": function() { return /* binding */ fromJS; },
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "getIn": function() { return /* binding */ getIn$1; },
/* harmony export */   "has": function() { return /* binding */ has; },
/* harmony export */   "hasIn": function() { return /* binding */ hasIn$1; },
/* harmony export */   "hash": function() { return /* binding */ hash; },
/* harmony export */   "is": function() { return /* binding */ is; },
/* harmony export */   "isAssociative": function() { return /* binding */ isAssociative; },
/* harmony export */   "isCollection": function() { return /* binding */ isCollection; },
/* harmony export */   "isImmutable": function() { return /* binding */ isImmutable; },
/* harmony export */   "isIndexed": function() { return /* binding */ isIndexed; },
/* harmony export */   "isKeyed": function() { return /* binding */ isKeyed; },
/* harmony export */   "isList": function() { return /* binding */ isList; },
/* harmony export */   "isMap": function() { return /* binding */ isMap; },
/* harmony export */   "isOrdered": function() { return /* binding */ isOrdered; },
/* harmony export */   "isOrderedMap": function() { return /* binding */ isOrderedMap; },
/* harmony export */   "isOrderedSet": function() { return /* binding */ isOrderedSet; },
/* harmony export */   "isPlainObject": function() { return /* binding */ isPlainObject; },
/* harmony export */   "isRecord": function() { return /* binding */ isRecord; },
/* harmony export */   "isSeq": function() { return /* binding */ isSeq; },
/* harmony export */   "isSet": function() { return /* binding */ isSet; },
/* harmony export */   "isStack": function() { return /* binding */ isStack; },
/* harmony export */   "isValueObject": function() { return /* binding */ isValueObject; },
/* harmony export */   "merge": function() { return /* binding */ merge; },
/* harmony export */   "mergeDeep": function() { return /* binding */ mergeDeep$1; },
/* harmony export */   "mergeDeepWith": function() { return /* binding */ mergeDeepWith$1; },
/* harmony export */   "mergeWith": function() { return /* binding */ mergeWith; },
/* harmony export */   "remove": function() { return /* binding */ remove; },
/* harmony export */   "removeIn": function() { return /* binding */ removeIn; },
/* harmony export */   "set": function() { return /* binding */ set; },
/* harmony export */   "setIn": function() { return /* binding */ setIn$1; },
/* harmony export */   "update": function() { return /* binding */ update$1; },
/* harmony export */   "updateIn": function() { return /* binding */ updateIn$1; },
/* harmony export */   "version": function() { return /* binding */ version; }
/* harmony export */ });
/**
 * MIT License
 * 
 * Copyright (c) 2014-present, Lee Byron and other contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var DELETE = 'delete';

// Constants describing the size of trie nodes.
var SHIFT = 5; // Resulted in best performance after ______?
var SIZE = 1 << SHIFT;
var MASK = SIZE - 1;

// A consistent shared value representing "not set" which equals nothing other
// than itself, and nothing that could be provided externally.
var NOT_SET = {};

// Boolean references, Rough equivalent of `bool &`.
function MakeRef() {
  return { value: false };
}

function SetRef(ref) {
  if (ref) {
    ref.value = true;
  }
}

// A function which returns a value representing an "owner" for transient writes
// to tries. The return value will only ever equal itself, and will not equal
// the return of any subsequent call of this function.
function OwnerID() {}

function ensureSize(iter) {
  if (iter.size === undefined) {
    iter.size = iter.__iterate(returnTrue);
  }
  return iter.size;
}

function wrapIndex(iter, index) {
  // This implements "is array index" which the ECMAString spec defines as:
  //
  //     A String property name P is an array index if and only if
  //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
  //     to 2^32−1.
  //
  // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
  if (typeof index !== 'number') {
    var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
    if ('' + uint32Index !== index || uint32Index === 4294967295) {
      return NaN;
    }
    index = uint32Index;
  }
  return index < 0 ? ensureSize(iter) + index : index;
}

function returnTrue() {
  return true;
}

function wholeSlice(begin, end, size) {
  return (
    ((begin === 0 && !isNeg(begin)) ||
      (size !== undefined && begin <= -size)) &&
    (end === undefined || (size !== undefined && end >= size))
  );
}

function resolveBegin(begin, size) {
  return resolveIndex(begin, size, 0);
}

function resolveEnd(end, size) {
  return resolveIndex(end, size, size);
}

function resolveIndex(index, size, defaultIndex) {
  // Sanitize indices using this shorthand for ToInt32(argument)
  // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
  return index === undefined
    ? defaultIndex
    : isNeg(index)
    ? size === Infinity
      ? size
      : Math.max(0, size + index) | 0
    : size === undefined || size === index
    ? index
    : Math.min(size, index) | 0;
}

function isNeg(value) {
  // Account for -0 which is negative, but not less than 0.
  return value < 0 || (value === 0 && 1 / value === -Infinity);
}

var IS_COLLECTION_SYMBOL = '@@__IMMUTABLE_ITERABLE__@@';

function isCollection(maybeCollection) {
  return Boolean(maybeCollection && maybeCollection[IS_COLLECTION_SYMBOL]);
}

var IS_KEYED_SYMBOL = '@@__IMMUTABLE_KEYED__@@';

function isKeyed(maybeKeyed) {
  return Boolean(maybeKeyed && maybeKeyed[IS_KEYED_SYMBOL]);
}

var IS_INDEXED_SYMBOL = '@@__IMMUTABLE_INDEXED__@@';

function isIndexed(maybeIndexed) {
  return Boolean(maybeIndexed && maybeIndexed[IS_INDEXED_SYMBOL]);
}

function isAssociative(maybeAssociative) {
  return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
}

var Collection = function Collection(value) {
  return isCollection(value) ? value : Seq(value);
};

var KeyedCollection = /*@__PURE__*/(function (Collection) {
  function KeyedCollection(value) {
    return isKeyed(value) ? value : KeyedSeq(value);
  }

  if ( Collection ) KeyedCollection.__proto__ = Collection;
  KeyedCollection.prototype = Object.create( Collection && Collection.prototype );
  KeyedCollection.prototype.constructor = KeyedCollection;

  return KeyedCollection;
}(Collection));

var IndexedCollection = /*@__PURE__*/(function (Collection) {
  function IndexedCollection(value) {
    return isIndexed(value) ? value : IndexedSeq(value);
  }

  if ( Collection ) IndexedCollection.__proto__ = Collection;
  IndexedCollection.prototype = Object.create( Collection && Collection.prototype );
  IndexedCollection.prototype.constructor = IndexedCollection;

  return IndexedCollection;
}(Collection));

var SetCollection = /*@__PURE__*/(function (Collection) {
  function SetCollection(value) {
    return isCollection(value) && !isAssociative(value) ? value : SetSeq(value);
  }

  if ( Collection ) SetCollection.__proto__ = Collection;
  SetCollection.prototype = Object.create( Collection && Collection.prototype );
  SetCollection.prototype.constructor = SetCollection;

  return SetCollection;
}(Collection));

Collection.Keyed = KeyedCollection;
Collection.Indexed = IndexedCollection;
Collection.Set = SetCollection;

var IS_SEQ_SYMBOL = '@@__IMMUTABLE_SEQ__@@';

function isSeq(maybeSeq) {
  return Boolean(maybeSeq && maybeSeq[IS_SEQ_SYMBOL]);
}

var IS_RECORD_SYMBOL = '@@__IMMUTABLE_RECORD__@@';

function isRecord(maybeRecord) {
  return Boolean(maybeRecord && maybeRecord[IS_RECORD_SYMBOL]);
}

function isImmutable(maybeImmutable) {
  return isCollection(maybeImmutable) || isRecord(maybeImmutable);
}

var IS_ORDERED_SYMBOL = '@@__IMMUTABLE_ORDERED__@@';

function isOrdered(maybeOrdered) {
  return Boolean(maybeOrdered && maybeOrdered[IS_ORDERED_SYMBOL]);
}

var ITERATE_KEYS = 0;
var ITERATE_VALUES = 1;
var ITERATE_ENTRIES = 2;

var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;

var Iterator = function Iterator(next) {
  this.next = next;
};

Iterator.prototype.toString = function toString () {
  return '[Iterator]';
};

Iterator.KEYS = ITERATE_KEYS;
Iterator.VALUES = ITERATE_VALUES;
Iterator.ENTRIES = ITERATE_ENTRIES;

Iterator.prototype.inspect = Iterator.prototype.toSource = function () {
  return this.toString();
};
Iterator.prototype[ITERATOR_SYMBOL] = function () {
  return this;
};

function iteratorValue(type, k, v, iteratorResult) {
  var value = type === 0 ? k : type === 1 ? v : [k, v];
  iteratorResult
    ? (iteratorResult.value = value)
    : (iteratorResult = {
        value: value,
        done: false,
      });
  return iteratorResult;
}

function iteratorDone() {
  return { value: undefined, done: true };
}

function hasIterator(maybeIterable) {
  if (Array.isArray(maybeIterable)) {
    // IE11 trick as it does not support `Symbol.iterator`
    return true;
  }

  return !!getIteratorFn(maybeIterable);
}

function isIterator(maybeIterator) {
  return maybeIterator && typeof maybeIterator.next === 'function';
}

function getIterator(iterable) {
  var iteratorFn = getIteratorFn(iterable);
  return iteratorFn && iteratorFn.call(iterable);
}

function getIteratorFn(iterable) {
  var iteratorFn =
    iterable &&
    ((REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

function isEntriesIterable(maybeIterable) {
  var iteratorFn = getIteratorFn(maybeIterable);
  return iteratorFn && iteratorFn === maybeIterable.entries;
}

function isKeysIterable(maybeIterable) {
  var iteratorFn = getIteratorFn(maybeIterable);
  return iteratorFn && iteratorFn === maybeIterable.keys;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

function isArrayLike(value) {
  if (Array.isArray(value) || typeof value === 'string') {
    return true;
  }

  return (
    value &&
    typeof value === 'object' &&
    Number.isInteger(value.length) &&
    value.length >= 0 &&
    (value.length === 0
      ? // Only {length: 0} is considered Array-like.
        Object.keys(value).length === 1
      : // An object is only Array-like if it has a property where the last value
        // in the array-like may be found (which could be undefined).
        value.hasOwnProperty(value.length - 1))
  );
}

var Seq = /*@__PURE__*/(function (Collection) {
  function Seq(value) {
    return value === null || value === undefined
      ? emptySequence()
      : isImmutable(value)
      ? value.toSeq()
      : seqFromValue(value);
  }

  if ( Collection ) Seq.__proto__ = Collection;
  Seq.prototype = Object.create( Collection && Collection.prototype );
  Seq.prototype.constructor = Seq;

  Seq.prototype.toSeq = function toSeq () {
    return this;
  };

  Seq.prototype.toString = function toString () {
    return this.__toString('Seq {', '}');
  };

  Seq.prototype.cacheResult = function cacheResult () {
    if (!this._cache && this.__iterateUncached) {
      this._cache = this.entrySeq().toArray();
      this.size = this._cache.length;
    }
    return this;
  };

  // abstract __iterateUncached(fn, reverse)

  Seq.prototype.__iterate = function __iterate (fn, reverse) {
    var cache = this._cache;
    if (cache) {
      var size = cache.length;
      var i = 0;
      while (i !== size) {
        var entry = cache[reverse ? size - ++i : i++];
        if (fn(entry[1], entry[0], this) === false) {
          break;
        }
      }
      return i;
    }
    return this.__iterateUncached(fn, reverse);
  };

  // abstract __iteratorUncached(type, reverse)

  Seq.prototype.__iterator = function __iterator (type, reverse) {
    var cache = this._cache;
    if (cache) {
      var size = cache.length;
      var i = 0;
      return new Iterator(function () {
        if (i === size) {
          return iteratorDone();
        }
        var entry = cache[reverse ? size - ++i : i++];
        return iteratorValue(type, entry[0], entry[1]);
      });
    }
    return this.__iteratorUncached(type, reverse);
  };

  return Seq;
}(Collection));

var KeyedSeq = /*@__PURE__*/(function (Seq) {
  function KeyedSeq(value) {
    return value === null || value === undefined
      ? emptySequence().toKeyedSeq()
      : isCollection(value)
      ? isKeyed(value)
        ? value.toSeq()
        : value.fromEntrySeq()
      : isRecord(value)
      ? value.toSeq()
      : keyedSeqFromValue(value);
  }

  if ( Seq ) KeyedSeq.__proto__ = Seq;
  KeyedSeq.prototype = Object.create( Seq && Seq.prototype );
  KeyedSeq.prototype.constructor = KeyedSeq;

  KeyedSeq.prototype.toKeyedSeq = function toKeyedSeq () {
    return this;
  };

  return KeyedSeq;
}(Seq));

var IndexedSeq = /*@__PURE__*/(function (Seq) {
  function IndexedSeq(value) {
    return value === null || value === undefined
      ? emptySequence()
      : isCollection(value)
      ? isKeyed(value)
        ? value.entrySeq()
        : value.toIndexedSeq()
      : isRecord(value)
      ? value.toSeq().entrySeq()
      : indexedSeqFromValue(value);
  }

  if ( Seq ) IndexedSeq.__proto__ = Seq;
  IndexedSeq.prototype = Object.create( Seq && Seq.prototype );
  IndexedSeq.prototype.constructor = IndexedSeq;

  IndexedSeq.of = function of (/*...values*/) {
    return IndexedSeq(arguments);
  };

  IndexedSeq.prototype.toIndexedSeq = function toIndexedSeq () {
    return this;
  };

  IndexedSeq.prototype.toString = function toString () {
    return this.__toString('Seq [', ']');
  };

  return IndexedSeq;
}(Seq));

var SetSeq = /*@__PURE__*/(function (Seq) {
  function SetSeq(value) {
    return (
      isCollection(value) && !isAssociative(value) ? value : IndexedSeq(value)
    ).toSetSeq();
  }

  if ( Seq ) SetSeq.__proto__ = Seq;
  SetSeq.prototype = Object.create( Seq && Seq.prototype );
  SetSeq.prototype.constructor = SetSeq;

  SetSeq.of = function of (/*...values*/) {
    return SetSeq(arguments);
  };

  SetSeq.prototype.toSetSeq = function toSetSeq () {
    return this;
  };

  return SetSeq;
}(Seq));

Seq.isSeq = isSeq;
Seq.Keyed = KeyedSeq;
Seq.Set = SetSeq;
Seq.Indexed = IndexedSeq;

Seq.prototype[IS_SEQ_SYMBOL] = true;

// #pragma Root Sequences

var ArraySeq = /*@__PURE__*/(function (IndexedSeq) {
  function ArraySeq(array) {
    this._array = array;
    this.size = array.length;
  }

  if ( IndexedSeq ) ArraySeq.__proto__ = IndexedSeq;
  ArraySeq.prototype = Object.create( IndexedSeq && IndexedSeq.prototype );
  ArraySeq.prototype.constructor = ArraySeq;

  ArraySeq.prototype.get = function get (index, notSetValue) {
    return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
  };

  ArraySeq.prototype.__iterate = function __iterate (fn, reverse) {
    var array = this._array;
    var size = array.length;
    var i = 0;
    while (i !== size) {
      var ii = reverse ? size - ++i : i++;
      if (fn(array[ii], ii, this) === false) {
        break;
      }
    }
    return i;
  };

  ArraySeq.prototype.__iterator = function __iterator (type, reverse) {
    var array = this._array;
    var size = array.length;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }
      var ii = reverse ? size - ++i : i++;
      return iteratorValue(type, ii, array[ii]);
    });
  };

  return ArraySeq;
}(IndexedSeq));

var ObjectSeq = /*@__PURE__*/(function (KeyedSeq) {
  function ObjectSeq(object) {
    var keys = Object.keys(object);
    this._object = object;
    this._keys = keys;
    this.size = keys.length;
  }

  if ( KeyedSeq ) ObjectSeq.__proto__ = KeyedSeq;
  ObjectSeq.prototype = Object.create( KeyedSeq && KeyedSeq.prototype );
  ObjectSeq.prototype.constructor = ObjectSeq;

  ObjectSeq.prototype.get = function get (key, notSetValue) {
    if (notSetValue !== undefined && !this.has(key)) {
      return notSetValue;
    }
    return this._object[key];
  };

  ObjectSeq.prototype.has = function has (key) {
    return hasOwnProperty.call(this._object, key);
  };

  ObjectSeq.prototype.__iterate = function __iterate (fn, reverse) {
    var object = this._object;
    var keys = this._keys;
    var size = keys.length;
    var i = 0;
    while (i !== size) {
      var key = keys[reverse ? size - ++i : i++];
      if (fn(object[key], key, this) === false) {
        break;
      }
    }
    return i;
  };

  ObjectSeq.prototype.__iterator = function __iterator (type, reverse) {
    var object = this._object;
    var keys = this._keys;
    var size = keys.length;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }
      var key = keys[reverse ? size - ++i : i++];
      return iteratorValue(type, key, object[key]);
    });
  };

  return ObjectSeq;
}(KeyedSeq));
ObjectSeq.prototype[IS_ORDERED_SYMBOL] = true;

var CollectionSeq = /*@__PURE__*/(function (IndexedSeq) {
  function CollectionSeq(collection) {
    this._collection = collection;
    this.size = collection.length || collection.size;
  }

  if ( IndexedSeq ) CollectionSeq.__proto__ = IndexedSeq;
  CollectionSeq.prototype = Object.create( IndexedSeq && IndexedSeq.prototype );
  CollectionSeq.prototype.constructor = CollectionSeq;

  CollectionSeq.prototype.__iterateUncached = function __iterateUncached (fn, reverse) {
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var collection = this._collection;
    var iterator = getIterator(collection);
    var iterations = 0;
    if (isIterator(iterator)) {
      var step;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
    }
    return iterations;
  };

  CollectionSeq.prototype.__iteratorUncached = function __iteratorUncached (type, reverse) {
    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var collection = this._collection;
    var iterator = getIterator(collection);
    if (!isIterator(iterator)) {
      return new Iterator(iteratorDone);
    }
    var iterations = 0;
    return new Iterator(function () {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, iterations++, step.value);
    });
  };

  return CollectionSeq;
}(IndexedSeq));

// # pragma Helper functions

var EMPTY_SEQ;

function emptySequence() {
  return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
}

function keyedSeqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);
  if (seq) {
    return seq.fromEntrySeq();
  }
  if (typeof value === 'object') {
    return new ObjectSeq(value);
  }
  throw new TypeError(
    'Expected Array or collection object of [k, v] entries, or keyed object: ' +
      value
  );
}

function indexedSeqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);
  if (seq) {
    return seq;
  }
  throw new TypeError(
    'Expected Array or collection object of values: ' + value
  );
}

function seqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);
  if (seq) {
    return isEntriesIterable(value)
      ? seq.fromEntrySeq()
      : isKeysIterable(value)
      ? seq.toSetSeq()
      : seq;
  }
  if (typeof value === 'object') {
    return new ObjectSeq(value);
  }
  throw new TypeError(
    'Expected Array or collection object of values, or keyed object: ' + value
  );
}

function maybeIndexedSeqFromValue(value) {
  return isArrayLike(value)
    ? new ArraySeq(value)
    : hasIterator(value)
    ? new CollectionSeq(value)
    : undefined;
}

var IS_MAP_SYMBOL = '@@__IMMUTABLE_MAP__@@';

function isMap(maybeMap) {
  return Boolean(maybeMap && maybeMap[IS_MAP_SYMBOL]);
}

function isOrderedMap(maybeOrderedMap) {
  return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
}

function isValueObject(maybeValue) {
  return Boolean(
    maybeValue &&
      typeof maybeValue.equals === 'function' &&
      typeof maybeValue.hashCode === 'function'
  );
}

/**
 * An extension of the "same-value" algorithm as [described for use by ES6 Map
 * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
 *
 * NaN is considered the same as NaN, however -0 and 0 are considered the same
 * value, which is different from the algorithm described by
 * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
 *
 * This is extended further to allow Objects to describe the values they
 * represent, by way of `valueOf` or `equals` (and `hashCode`).
 *
 * Note: because of this extension, the key equality of Immutable.Map and the
 * value equality of Immutable.Set will differ from ES6 Map and Set.
 *
 * ### Defining custom values
 *
 * The easiest way to describe the value an object represents is by implementing
 * `valueOf`. For example, `Date` represents a value by returning a unix
 * timestamp for `valueOf`:
 *
 *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
 *     var date2 = new Date(1234567890000);
 *     date1.valueOf(); // 1234567890000
 *     assert( date1 !== date2 );
 *     assert( Immutable.is( date1, date2 ) );
 *
 * Note: overriding `valueOf` may have other implications if you use this object
 * where JavaScript expects a primitive, such as implicit string coercion.
 *
 * For more complex types, especially collections, implementing `valueOf` may
 * not be performant. An alternative is to implement `equals` and `hashCode`.
 *
 * `equals` takes another object, presumably of similar type, and returns true
 * if it is equal. Equality is symmetrical, so the same result should be
 * returned if this and the argument are flipped.
 *
 *     assert( a.equals(b) === b.equals(a) );
 *
 * `hashCode` returns a 32bit integer number representing the object which will
 * be used to determine how to store the value object in a Map or Set. You must
 * provide both or neither methods, one must not exist without the other.
 *
 * Also, an important relationship between these methods must be upheld: if two
 * values are equal, they *must* return the same hashCode. If the values are not
 * equal, they might have the same hashCode; this is called a hash collision,
 * and while undesirable for performance reasons, it is acceptable.
 *
 *     if (a.equals(b)) {
 *       assert( a.hashCode() === b.hashCode() );
 *     }
 *
 * All Immutable collections are Value Objects: they implement `equals()`
 * and `hashCode()`.
 */
function is(valueA, valueB) {
  if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
    return true;
  }
  if (!valueA || !valueB) {
    return false;
  }
  if (
    typeof valueA.valueOf === 'function' &&
    typeof valueB.valueOf === 'function'
  ) {
    valueA = valueA.valueOf();
    valueB = valueB.valueOf();
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
  }
  return !!(
    isValueObject(valueA) &&
    isValueObject(valueB) &&
    valueA.equals(valueB)
  );
}

var imul =
  typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2
    ? Math.imul
    : function imul(a, b) {
        a |= 0; // int
        b |= 0; // int
        var c = a & 0xffff;
        var d = b & 0xffff;
        // Shift by 0 fixes the sign on the high part.
        return (c * d + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0)) | 0; // int
      };

// v8 has an optimization for storing 31-bit signed numbers.
// Values which have either 00 or 11 as the high order bits qualify.
// This function drops the highest order bit in a signed number, maintaining
// the sign bit.
function smi(i32) {
  return ((i32 >>> 1) & 0x40000000) | (i32 & 0xbfffffff);
}

var defaultValueOf = Object.prototype.valueOf;

function hash(o) {
  if (o == null) {
    return hashNullish(o);
  }

  if (typeof o.hashCode === 'function') {
    // Drop any high bits from accidentally long hash codes.
    return smi(o.hashCode(o));
  }

  var v = valueOf(o);

  if (v == null) {
    return hashNullish(v);
  }

  switch (typeof v) {
    case 'boolean':
      // The hash values for built-in constants are a 1 value for each 5-byte
      // shift region expect for the first, which encodes the value. This
      // reduces the odds of a hash collision for these common values.
      return v ? 0x42108421 : 0x42108420;
    case 'number':
      return hashNumber(v);
    case 'string':
      return v.length > STRING_HASH_CACHE_MIN_STRLEN
        ? cachedHashString(v)
        : hashString(v);
    case 'object':
    case 'function':
      return hashJSObj(v);
    case 'symbol':
      return hashSymbol(v);
    default:
      if (typeof v.toString === 'function') {
        return hashString(v.toString());
      }
      throw new Error('Value type ' + typeof v + ' cannot be hashed.');
  }
}

function hashNullish(nullish) {
  return nullish === null ? 0x42108422 : /* undefined */ 0x42108423;
}

// Compress arbitrarily large numbers into smi hashes.
function hashNumber(n) {
  if (n !== n || n === Infinity) {
    return 0;
  }
  var hash = n | 0;
  if (hash !== n) {
    hash ^= n * 0xffffffff;
  }
  while (n > 0xffffffff) {
    n /= 0xffffffff;
    hash ^= n;
  }
  return smi(hash);
}

function cachedHashString(string) {
  var hashed = stringHashCache[string];
  if (hashed === undefined) {
    hashed = hashString(string);
    if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
      STRING_HASH_CACHE_SIZE = 0;
      stringHashCache = {};
    }
    STRING_HASH_CACHE_SIZE++;
    stringHashCache[string] = hashed;
  }
  return hashed;
}

// http://jsperf.com/hashing-strings
function hashString(string) {
  // This is the hash from JVM
  // The hash code for a string is computed as
  // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
  // where s[i] is the ith character of the string and n is the length of
  // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
  // (exclusive) by dropping high bits.
  var hashed = 0;
  for (var ii = 0; ii < string.length; ii++) {
    hashed = (31 * hashed + string.charCodeAt(ii)) | 0;
  }
  return smi(hashed);
}

function hashSymbol(sym) {
  var hashed = symbolMap[sym];
  if (hashed !== undefined) {
    return hashed;
  }

  hashed = nextHash();

  symbolMap[sym] = hashed;

  return hashed;
}

function hashJSObj(obj) {
  var hashed;
  if (usingWeakMap) {
    hashed = weakMap.get(obj);
    if (hashed !== undefined) {
      return hashed;
    }
  }

  hashed = obj[UID_HASH_KEY];
  if (hashed !== undefined) {
    return hashed;
  }

  if (!canDefineProperty) {
    hashed = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
    if (hashed !== undefined) {
      return hashed;
    }

    hashed = getIENodeHash(obj);
    if (hashed !== undefined) {
      return hashed;
    }
  }

  hashed = nextHash();

  if (usingWeakMap) {
    weakMap.set(obj, hashed);
  } else if (isExtensible !== undefined && isExtensible(obj) === false) {
    throw new Error('Non-extensible objects are not allowed as keys.');
  } else if (canDefineProperty) {
    Object.defineProperty(obj, UID_HASH_KEY, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: hashed,
    });
  } else if (
    obj.propertyIsEnumerable !== undefined &&
    obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable
  ) {
    // Since we can't define a non-enumerable property on the object
    // we'll hijack one of the less-used non-enumerable properties to
    // save our hash on it. Since this is a function it will not show up in
    // `JSON.stringify` which is what we want.
    obj.propertyIsEnumerable = function () {
      return this.constructor.prototype.propertyIsEnumerable.apply(
        this,
        arguments
      );
    };
    obj.propertyIsEnumerable[UID_HASH_KEY] = hashed;
  } else if (obj.nodeType !== undefined) {
    // At this point we couldn't get the IE `uniqueID` to use as a hash
    // and we couldn't use a non-enumerable property to exploit the
    // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
    // itself.
    obj[UID_HASH_KEY] = hashed;
  } else {
    throw new Error('Unable to set a non-enumerable property on object.');
  }

  return hashed;
}

// Get references to ES5 object methods.
var isExtensible = Object.isExtensible;

// True if Object.defineProperty works as expected. IE8 fails this test.
var canDefineProperty = (function () {
  try {
    Object.defineProperty({}, '@', {});
    return true;
  } catch (e) {
    return false;
  }
})();

// IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
// and avoid memory leaks from the IE cloneNode bug.
function getIENodeHash(node) {
  if (node && node.nodeType > 0) {
    switch (node.nodeType) {
      case 1: // Element
        return node.uniqueID;
      case 9: // Document
        return node.documentElement && node.documentElement.uniqueID;
    }
  }
}

function valueOf(obj) {
  return obj.valueOf !== defaultValueOf && typeof obj.valueOf === 'function'
    ? obj.valueOf(obj)
    : obj;
}

function nextHash() {
  var nextHash = ++_objHashUID;
  if (_objHashUID & 0x40000000) {
    _objHashUID = 0;
  }
  return nextHash;
}

// If possible, use a WeakMap.
var usingWeakMap = typeof WeakMap === 'function';
var weakMap;
if (usingWeakMap) {
  weakMap = new WeakMap();
}

var symbolMap = Object.create(null);

var _objHashUID = 0;

var UID_HASH_KEY = '__immutablehash__';
if (typeof Symbol === 'function') {
  UID_HASH_KEY = Symbol(UID_HASH_KEY);
}

var STRING_HASH_CACHE_MIN_STRLEN = 16;
var STRING_HASH_CACHE_MAX_SIZE = 255;
var STRING_HASH_CACHE_SIZE = 0;
var stringHashCache = {};

var ToKeyedSequence = /*@__PURE__*/(function (KeyedSeq) {
  function ToKeyedSequence(indexed, useKeys) {
    this._iter = indexed;
    this._useKeys = useKeys;
    this.size = indexed.size;
  }

  if ( KeyedSeq ) ToKeyedSequence.__proto__ = KeyedSeq;
  ToKeyedSequence.prototype = Object.create( KeyedSeq && KeyedSeq.prototype );
  ToKeyedSequence.prototype.constructor = ToKeyedSequence;

  ToKeyedSequence.prototype.get = function get (key, notSetValue) {
    return this._iter.get(key, notSetValue);
  };

  ToKeyedSequence.prototype.has = function has (key) {
    return this._iter.has(key);
  };

  ToKeyedSequence.prototype.valueSeq = function valueSeq () {
    return this._iter.valueSeq();
  };

  ToKeyedSequence.prototype.reverse = function reverse () {
    var this$1$1 = this;

    var reversedSequence = reverseFactory(this, true);
    if (!this._useKeys) {
      reversedSequence.valueSeq = function () { return this$1$1._iter.toSeq().reverse(); };
    }
    return reversedSequence;
  };

  ToKeyedSequence.prototype.map = function map (mapper, context) {
    var this$1$1 = this;

    var mappedSequence = mapFactory(this, mapper, context);
    if (!this._useKeys) {
      mappedSequence.valueSeq = function () { return this$1$1._iter.toSeq().map(mapper, context); };
    }
    return mappedSequence;
  };

  ToKeyedSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1$1 = this;

    return this._iter.__iterate(function (v, k) { return fn(v, k, this$1$1); }, reverse);
  };

  ToKeyedSequence.prototype.__iterator = function __iterator (type, reverse) {
    return this._iter.__iterator(type, reverse);
  };

  return ToKeyedSequence;
}(KeyedSeq));
ToKeyedSequence.prototype[IS_ORDERED_SYMBOL] = true;

var ToIndexedSequence = /*@__PURE__*/(function (IndexedSeq) {
  function ToIndexedSequence(iter) {
    this._iter = iter;
    this.size = iter.size;
  }

  if ( IndexedSeq ) ToIndexedSequence.__proto__ = IndexedSeq;
  ToIndexedSequence.prototype = Object.create( IndexedSeq && IndexedSeq.prototype );
  ToIndexedSequence.prototype.constructor = ToIndexedSequence;

  ToIndexedSequence.prototype.includes = function includes (value) {
    return this._iter.includes(value);
  };

  ToIndexedSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1$1 = this;

    var i = 0;
    reverse && ensureSize(this);
    return this._iter.__iterate(
      function (v) { return fn(v, reverse ? this$1$1.size - ++i : i++, this$1$1); },
      reverse
    );
  };

  ToIndexedSequence.prototype.__iterator = function __iterator (type, reverse) {
    var this$1$1 = this;

    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
    var i = 0;
    reverse && ensureSize(this);
    return new Iterator(function () {
      var step = iterator.next();
      return step.done
        ? step
        : iteratorValue(
            type,
            reverse ? this$1$1.size - ++i : i++,
            step.value,
            step
          );
    });
  };

  return ToIndexedSequence;
}(IndexedSeq));

var ToSetSequence = /*@__PURE__*/(function (SetSeq) {
  function ToSetSequence(iter) {
    this._iter = iter;
    this.size = iter.size;
  }

  if ( SetSeq ) ToSetSequence.__proto__ = SetSeq;
  ToSetSequence.prototype = Object.create( SetSeq && SetSeq.prototype );
  ToSetSequence.prototype.constructor = ToSetSequence;

  ToSetSequence.prototype.has = function has (key) {
    return this._iter.includes(key);
  };

  ToSetSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1$1 = this;

    return this._iter.__iterate(function (v) { return fn(v, v, this$1$1); }, reverse);
  };

  ToSetSequence.prototype.__iterator = function __iterator (type, reverse) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
    return new Iterator(function () {
      var step = iterator.next();
      return step.done
        ? step
        : iteratorValue(type, step.value, step.value, step);
    });
  };

  return ToSetSequence;
}(SetSeq));

var FromEntriesSequence = /*@__PURE__*/(function (KeyedSeq) {
  function FromEntriesSequence(entries) {
    this._iter = entries;
    this.size = entries.size;
  }

  if ( KeyedSeq ) FromEntriesSequence.__proto__ = KeyedSeq;
  FromEntriesSequence.prototype = Object.create( KeyedSeq && KeyedSeq.prototype );
  FromEntriesSequence.prototype.constructor = FromEntriesSequence;

  FromEntriesSequence.prototype.entrySeq = function entrySeq () {
    return this._iter.toSeq();
  };

  FromEntriesSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1$1 = this;

    return this._iter.__iterate(function (entry) {
      // Check if entry exists first so array access doesn't throw for holes
      // in the parent iteration.
      if (entry) {
        validateEntry(entry);
        var indexedCollection = isCollection(entry);
        return fn(
          indexedCollection ? entry.get(1) : entry[1],
          indexedCollection ? entry.get(0) : entry[0],
          this$1$1
        );
      }
    }, reverse);
  };

  FromEntriesSequence.prototype.__iterator = function __iterator (type, reverse) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
    return new Iterator(function () {
      while (true) {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedCollection = isCollection(entry);
          return iteratorValue(
            type,
            indexedCollection ? entry.get(0) : entry[0],
            indexedCollection ? entry.get(1) : entry[1],
            step
          );
        }
      }
    });
  };

  return FromEntriesSequence;
}(KeyedSeq));

ToIndexedSequence.prototype.cacheResult =
  ToKeyedSequence.prototype.cacheResult =
  ToSetSequence.prototype.cacheResult =
  FromEntriesSequence.prototype.cacheResult =
    cacheResultThrough;

function flipFactory(collection) {
  var flipSequence = makeSequence(collection);
  flipSequence._iter = collection;
  flipSequence.size = collection.size;
  flipSequence.flip = function () { return collection; };
  flipSequence.reverse = function () {
    var reversedSequence = collection.reverse.apply(this); // super.reverse()
    reversedSequence.flip = function () { return collection.reverse(); };
    return reversedSequence;
  };
  flipSequence.has = function (key) { return collection.includes(key); };
  flipSequence.includes = function (key) { return collection.has(key); };
  flipSequence.cacheResult = cacheResultThrough;
  flipSequence.__iterateUncached = function (fn, reverse) {
    var this$1$1 = this;

    return collection.__iterate(function (v, k) { return fn(k, v, this$1$1) !== false; }, reverse);
  };
  flipSequence.__iteratorUncached = function (type, reverse) {
    if (type === ITERATE_ENTRIES) {
      var iterator = collection.__iterator(type, reverse);
      return new Iterator(function () {
        var step = iterator.next();
        if (!step.done) {
          var k = step.value[0];
          step.value[0] = step.value[1];
          step.value[1] = k;
        }
        return step;
      });
    }
    return collection.__iterator(
      type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
      reverse
    );
  };
  return flipSequence;
}

function mapFactory(collection, mapper, context) {
  var mappedSequence = makeSequence(collection);
  mappedSequence.size = collection.size;
  mappedSequence.has = function (key) { return collection.has(key); };
  mappedSequence.get = function (key, notSetValue) {
    var v = collection.get(key, NOT_SET);
    return v === NOT_SET
      ? notSetValue
      : mapper.call(context, v, key, collection);
  };
  mappedSequence.__iterateUncached = function (fn, reverse) {
    var this$1$1 = this;

    return collection.__iterate(
      function (v, k, c) { return fn(mapper.call(context, v, k, c), k, this$1$1) !== false; },
      reverse
    );
  };
  mappedSequence.__iteratorUncached = function (type, reverse) {
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    return new Iterator(function () {
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      var key = entry[0];
      return iteratorValue(
        type,
        key,
        mapper.call(context, entry[1], key, collection),
        step
      );
    });
  };
  return mappedSequence;
}

function reverseFactory(collection, useKeys) {
  var this$1$1 = this;

  var reversedSequence = makeSequence(collection);
  reversedSequence._iter = collection;
  reversedSequence.size = collection.size;
  reversedSequence.reverse = function () { return collection; };
  if (collection.flip) {
    reversedSequence.flip = function () {
      var flipSequence = flipFactory(collection);
      flipSequence.reverse = function () { return collection.flip(); };
      return flipSequence;
    };
  }
  reversedSequence.get = function (key, notSetValue) { return collection.get(useKeys ? key : -1 - key, notSetValue); };
  reversedSequence.has = function (key) { return collection.has(useKeys ? key : -1 - key); };
  reversedSequence.includes = function (value) { return collection.includes(value); };
  reversedSequence.cacheResult = cacheResultThrough;
  reversedSequence.__iterate = function (fn, reverse) {
    var this$1$1 = this;

    var i = 0;
    reverse && ensureSize(collection);
    return collection.__iterate(
      function (v, k) { return fn(v, useKeys ? k : reverse ? this$1$1.size - ++i : i++, this$1$1); },
      !reverse
    );
  };
  reversedSequence.__iterator = function (type, reverse) {
    var i = 0;
    reverse && ensureSize(collection);
    var iterator = collection.__iterator(ITERATE_ENTRIES, !reverse);
    return new Iterator(function () {
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      return iteratorValue(
        type,
        useKeys ? entry[0] : reverse ? this$1$1.size - ++i : i++,
        entry[1],
        step
      );
    });
  };
  return reversedSequence;
}

function filterFactory(collection, predicate, context, useKeys) {
  var filterSequence = makeSequence(collection);
  if (useKeys) {
    filterSequence.has = function (key) {
      var v = collection.get(key, NOT_SET);
      return v !== NOT_SET && !!predicate.call(context, v, key, collection);
    };
    filterSequence.get = function (key, notSetValue) {
      var v = collection.get(key, NOT_SET);
      return v !== NOT_SET && predicate.call(context, v, key, collection)
        ? v
        : notSetValue;
    };
  }
  filterSequence.__iterateUncached = function (fn, reverse) {
    var this$1$1 = this;

    var iterations = 0;
    collection.__iterate(function (v, k, c) {
      if (predicate.call(context, v, k, c)) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1$1);
      }
    }, reverse);
    return iterations;
  };
  filterSequence.__iteratorUncached = function (type, reverse) {
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    var iterations = 0;
    return new Iterator(function () {
      while (true) {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        var value = entry[1];
        if (predicate.call(context, value, key, collection)) {
          return iteratorValue(type, useKeys ? key : iterations++, value, step);
        }
      }
    });
  };
  return filterSequence;
}

function countByFactory(collection, grouper, context) {
  var groups = Map().asMutable();
  collection.__iterate(function (v, k) {
    groups.update(grouper.call(context, v, k, collection), 0, function (a) { return a + 1; });
  });
  return groups.asImmutable();
}

function groupByFactory(collection, grouper, context) {
  var isKeyedIter = isKeyed(collection);
  var groups = (isOrdered(collection) ? OrderedMap() : Map()).asMutable();
  collection.__iterate(function (v, k) {
    groups.update(
      grouper.call(context, v, k, collection),
      function (a) { return ((a = a || []), a.push(isKeyedIter ? [k, v] : v), a); }
    );
  });
  var coerce = collectionClass(collection);
  return groups.map(function (arr) { return reify(collection, coerce(arr)); }).asImmutable();
}

function sliceFactory(collection, begin, end, useKeys) {
  var originalSize = collection.size;

  if (wholeSlice(begin, end, originalSize)) {
    return collection;
  }

  var resolvedBegin = resolveBegin(begin, originalSize);
  var resolvedEnd = resolveEnd(end, originalSize);

  // begin or end will be NaN if they were provided as negative numbers and
  // this collection's size is unknown. In that case, cache first so there is
  // a known size and these do not resolve to NaN.
  if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
    return sliceFactory(collection.toSeq().cacheResult(), begin, end, useKeys);
  }

  // Note: resolvedEnd is undefined when the original sequence's length is
  // unknown and this slice did not supply an end and should contain all
  // elements after resolvedBegin.
  // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
  var resolvedSize = resolvedEnd - resolvedBegin;
  var sliceSize;
  if (resolvedSize === resolvedSize) {
    sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
  }

  var sliceSeq = makeSequence(collection);

  // If collection.size is undefined, the size of the realized sliceSeq is
  // unknown at this point unless the number of items to slice is 0
  sliceSeq.size =
    sliceSize === 0 ? sliceSize : (collection.size && sliceSize) || undefined;

  if (!useKeys && isSeq(collection) && sliceSize >= 0) {
    sliceSeq.get = function (index, notSetValue) {
      index = wrapIndex(this, index);
      return index >= 0 && index < sliceSize
        ? collection.get(index + resolvedBegin, notSetValue)
        : notSetValue;
    };
  }

  sliceSeq.__iterateUncached = function (fn, reverse) {
    var this$1$1 = this;

    if (sliceSize === 0) {
      return 0;
    }
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var skipped = 0;
    var isSkipping = true;
    var iterations = 0;
    collection.__iterate(function (v, k) {
      if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
        iterations++;
        return (
          fn(v, useKeys ? k : iterations - 1, this$1$1) !== false &&
          iterations !== sliceSize
        );
      }
    });
    return iterations;
  };

  sliceSeq.__iteratorUncached = function (type, reverse) {
    if (sliceSize !== 0 && reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    // Don't bother instantiating parent iterator if taking 0.
    if (sliceSize === 0) {
      return new Iterator(iteratorDone);
    }
    var iterator = collection.__iterator(type, reverse);
    var skipped = 0;
    var iterations = 0;
    return new Iterator(function () {
      while (skipped++ < resolvedBegin) {
        iterator.next();
      }
      if (++iterations > sliceSize) {
        return iteratorDone();
      }
      var step = iterator.next();
      if (useKeys || type === ITERATE_VALUES || step.done) {
        return step;
      }
      if (type === ITERATE_KEYS) {
        return iteratorValue(type, iterations - 1, undefined, step);
      }
      return iteratorValue(type, iterations - 1, step.value[1], step);
    });
  };

  return sliceSeq;
}

function takeWhileFactory(collection, predicate, context) {
  var takeSequence = makeSequence(collection);
  takeSequence.__iterateUncached = function (fn, reverse) {
    var this$1$1 = this;

    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var iterations = 0;
    collection.__iterate(
      function (v, k, c) { return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$1$1); }
    );
    return iterations;
  };
  takeSequence.__iteratorUncached = function (type, reverse) {
    var this$1$1 = this;

    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    var iterating = true;
    return new Iterator(function () {
      if (!iterating) {
        return iteratorDone();
      }
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      var k = entry[0];
      var v = entry[1];
      if (!predicate.call(context, v, k, this$1$1)) {
        iterating = false;
        return iteratorDone();
      }
      return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
    });
  };
  return takeSequence;
}

function skipWhileFactory(collection, predicate, context, useKeys) {
  var skipSequence = makeSequence(collection);
  skipSequence.__iterateUncached = function (fn, reverse) {
    var this$1$1 = this;

    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var isSkipping = true;
    var iterations = 0;
    collection.__iterate(function (v, k, c) {
      if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1$1);
      }
    });
    return iterations;
  };
  skipSequence.__iteratorUncached = function (type, reverse) {
    var this$1$1 = this;

    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    var skipping = true;
    var iterations = 0;
    return new Iterator(function () {
      var step;
      var k;
      var v;
      do {
        step = iterator.next();
        if (step.done) {
          if (useKeys || type === ITERATE_VALUES) {
            return step;
          }
          if (type === ITERATE_KEYS) {
            return iteratorValue(type, iterations++, undefined, step);
          }
          return iteratorValue(type, iterations++, step.value[1], step);
        }
        var entry = step.value;
        k = entry[0];
        v = entry[1];
        skipping && (skipping = predicate.call(context, v, k, this$1$1));
      } while (skipping);
      return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
    });
  };
  return skipSequence;
}

function concatFactory(collection, values) {
  var isKeyedCollection = isKeyed(collection);
  var iters = [collection]
    .concat(values)
    .map(function (v) {
      if (!isCollection(v)) {
        v = isKeyedCollection
          ? keyedSeqFromValue(v)
          : indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedCollection) {
        v = KeyedCollection(v);
      }
      return v;
    })
    .filter(function (v) { return v.size !== 0; });

  if (iters.length === 0) {
    return collection;
  }

  if (iters.length === 1) {
    var singleton = iters[0];
    if (
      singleton === collection ||
      (isKeyedCollection && isKeyed(singleton)) ||
      (isIndexed(collection) && isIndexed(singleton))
    ) {
      return singleton;
    }
  }

  var concatSeq = new ArraySeq(iters);
  if (isKeyedCollection) {
    concatSeq = concatSeq.toKeyedSeq();
  } else if (!isIndexed(collection)) {
    concatSeq = concatSeq.toSetSeq();
  }
  concatSeq = concatSeq.flatten(true);
  concatSeq.size = iters.reduce(function (sum, seq) {
    if (sum !== undefined) {
      var size = seq.size;
      if (size !== undefined) {
        return sum + size;
      }
    }
  }, 0);
  return concatSeq;
}

function flattenFactory(collection, depth, useKeys) {
  var flatSequence = makeSequence(collection);
  flatSequence.__iterateUncached = function (fn, reverse) {
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var iterations = 0;
    var stopped = false;
    function flatDeep(iter, currentDepth) {
      iter.__iterate(function (v, k) {
        if ((!depth || currentDepth < depth) && isCollection(v)) {
          flatDeep(v, currentDepth + 1);
        } else {
          iterations++;
          if (fn(v, useKeys ? k : iterations - 1, flatSequence) === false) {
            stopped = true;
          }
        }
        return !stopped;
      }, reverse);
    }
    flatDeep(collection, 0);
    return iterations;
  };
  flatSequence.__iteratorUncached = function (type, reverse) {
    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var iterator = collection.__iterator(type, reverse);
    var stack = [];
    var iterations = 0;
    return new Iterator(function () {
      while (iterator) {
        var step = iterator.next();
        if (step.done !== false) {
          iterator = stack.pop();
          continue;
        }
        var v = step.value;
        if (type === ITERATE_ENTRIES) {
          v = v[1];
        }
        if ((!depth || stack.length < depth) && isCollection(v)) {
          stack.push(iterator);
          iterator = v.__iterator(type, reverse);
        } else {
          return useKeys ? step : iteratorValue(type, iterations++, v, step);
        }
      }
      return iteratorDone();
    });
  };
  return flatSequence;
}

function flatMapFactory(collection, mapper, context) {
  var coerce = collectionClass(collection);
  return collection
    .toSeq()
    .map(function (v, k) { return coerce(mapper.call(context, v, k, collection)); })
    .flatten(true);
}

function interposeFactory(collection, separator) {
  var interposedSequence = makeSequence(collection);
  interposedSequence.size = collection.size && collection.size * 2 - 1;
  interposedSequence.__iterateUncached = function (fn, reverse) {
    var this$1$1 = this;

    var iterations = 0;
    collection.__iterate(
      function (v) { return (!iterations || fn(separator, iterations++, this$1$1) !== false) &&
        fn(v, iterations++, this$1$1) !== false; },
      reverse
    );
    return iterations;
  };
  interposedSequence.__iteratorUncached = function (type, reverse) {
    var iterator = collection.__iterator(ITERATE_VALUES, reverse);
    var iterations = 0;
    var step;
    return new Iterator(function () {
      if (!step || iterations % 2) {
        step = iterator.next();
        if (step.done) {
          return step;
        }
      }
      return iterations % 2
        ? iteratorValue(type, iterations++, separator)
        : iteratorValue(type, iterations++, step.value, step);
    });
  };
  return interposedSequence;
}

function sortFactory(collection, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator;
  }
  var isKeyedCollection = isKeyed(collection);
  var index = 0;
  var entries = collection
    .toSeq()
    .map(function (v, k) { return [k, v, index++, mapper ? mapper(v, k, collection) : v]; })
    .valueSeq()
    .toArray();
  entries
    .sort(function (a, b) { return comparator(a[3], b[3]) || a[2] - b[2]; })
    .forEach(
      isKeyedCollection
        ? function (v, i) {
            entries[i].length = 2;
          }
        : function (v, i) {
            entries[i] = v[1];
          }
    );
  return isKeyedCollection
    ? KeyedSeq(entries)
    : isIndexed(collection)
    ? IndexedSeq(entries)
    : SetSeq(entries);
}

function maxFactory(collection, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator;
  }
  if (mapper) {
    var entry = collection
      .toSeq()
      .map(function (v, k) { return [v, mapper(v, k, collection)]; })
      .reduce(function (a, b) { return (maxCompare(comparator, a[1], b[1]) ? b : a); });
    return entry && entry[0];
  }
  return collection.reduce(function (a, b) { return (maxCompare(comparator, a, b) ? b : a); });
}

function maxCompare(comparator, a, b) {
  var comp = comparator(b, a);
  // b is considered the new max if the comparator declares them equal, but
  // they are not equal and b is in fact a nullish value.
  return (
    (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) ||
    comp > 0
  );
}

function zipWithFactory(keyIter, zipper, iters, zipAll) {
  var zipSequence = makeSequence(keyIter);
  var sizes = new ArraySeq(iters).map(function (i) { return i.size; });
  zipSequence.size = zipAll ? sizes.max() : sizes.min();
  // Note: this a generic base implementation of __iterate in terms of
  // __iterator which may be more generically useful in the future.
  zipSequence.__iterate = function (fn, reverse) {
    /* generic:
    var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
    var step;
    var iterations = 0;
    while (!(step = iterator.next()).done) {
      iterations++;
      if (fn(step.value[1], step.value[0], this) === false) {
        break;
      }
    }
    return iterations;
    */
    // indexed:
    var iterator = this.__iterator(ITERATE_VALUES, reverse);
    var step;
    var iterations = 0;
    while (!(step = iterator.next()).done) {
      if (fn(step.value, iterations++, this) === false) {
        break;
      }
    }
    return iterations;
  };
  zipSequence.__iteratorUncached = function (type, reverse) {
    var iterators = iters.map(
      function (i) { return ((i = Collection(i)), getIterator(reverse ? i.reverse() : i)); }
    );
    var iterations = 0;
    var isDone = false;
    return new Iterator(function () {
      var steps;
      if (!isDone) {
        steps = iterators.map(function (i) { return i.next(); });
        isDone = zipAll ? steps.every(function (s) { return s.done; }) : steps.some(function (s) { return s.done; });
      }
      if (isDone) {
        return iteratorDone();
      }
      return iteratorValue(
        type,
        iterations++,
        zipper.apply(
          null,
          steps.map(function (s) { return s.value; })
        )
      );
    });
  };
  return zipSequence;
}

// #pragma Helper Functions

function reify(iter, seq) {
  return iter === seq ? iter : isSeq(iter) ? seq : iter.constructor(seq);
}

function validateEntry(entry) {
  if (entry !== Object(entry)) {
    throw new TypeError('Expected [K, V] tuple: ' + entry);
  }
}

function collectionClass(collection) {
  return isKeyed(collection)
    ? KeyedCollection
    : isIndexed(collection)
    ? IndexedCollection
    : SetCollection;
}

function makeSequence(collection) {
  return Object.create(
    (isKeyed(collection)
      ? KeyedSeq
      : isIndexed(collection)
      ? IndexedSeq
      : SetSeq
    ).prototype
  );
}

function cacheResultThrough() {
  if (this._iter.cacheResult) {
    this._iter.cacheResult();
    this.size = this._iter.size;
    return this;
  }
  return Seq.prototype.cacheResult.call(this);
}

function defaultComparator(a, b) {
  if (a === undefined && b === undefined) {
    return 0;
  }

  if (a === undefined) {
    return 1;
  }

  if (b === undefined) {
    return -1;
  }

  return a > b ? 1 : a < b ? -1 : 0;
}

function arrCopy(arr, offset) {
  offset = offset || 0;
  var len = Math.max(0, arr.length - offset);
  var newArr = new Array(len);
  for (var ii = 0; ii < len; ii++) {
    newArr[ii] = arr[ii + offset];
  }
  return newArr;
}

function invariant(condition, error) {
  if (!condition) { throw new Error(error); }
}

function assertNotInfinite(size) {
  invariant(
    size !== Infinity,
    'Cannot perform this action with an infinite size.'
  );
}

function coerceKeyPath(keyPath) {
  if (isArrayLike(keyPath) && typeof keyPath !== 'string') {
    return keyPath;
  }
  if (isOrdered(keyPath)) {
    return keyPath.toArray();
  }
  throw new TypeError(
    'Invalid keyPath: expected Ordered Collection or Array: ' + keyPath
  );
}

var toString = Object.prototype.toString;

function isPlainObject(value) {
  // The base prototype's toString deals with Argument objects and native namespaces like Math
  if (
    !value ||
    typeof value !== 'object' ||
    toString.call(value) !== '[object Object]'
  ) {
    return false;
  }

  var proto = Object.getPrototypeOf(value);
  if (proto === null) {
    return true;
  }

  // Iteratively going up the prototype chain is needed for cross-realm environments (differing contexts, iframes, etc)
  var parentProto = proto;
  var nextProto = Object.getPrototypeOf(proto);
  while (nextProto !== null) {
    parentProto = nextProto;
    nextProto = Object.getPrototypeOf(parentProto);
  }
  return parentProto === proto;
}

/**
 * Returns true if the value is a potentially-persistent data structure, either
 * provided by Immutable.js or a plain Array or Object.
 */
function isDataStructure(value) {
  return (
    typeof value === 'object' &&
    (isImmutable(value) || Array.isArray(value) || isPlainObject(value))
  );
}

function quoteString(value) {
  try {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  } catch (_ignoreError) {
    return JSON.stringify(value);
  }
}

function has(collection, key) {
  return isImmutable(collection)
    ? collection.has(key)
    : isDataStructure(collection) && hasOwnProperty.call(collection, key);
}

function get(collection, key, notSetValue) {
  return isImmutable(collection)
    ? collection.get(key, notSetValue)
    : !has(collection, key)
    ? notSetValue
    : typeof collection.get === 'function'
    ? collection.get(key)
    : collection[key];
}

function shallowCopy(from) {
  if (Array.isArray(from)) {
    return arrCopy(from);
  }
  var to = {};
  for (var key in from) {
    if (hasOwnProperty.call(from, key)) {
      to[key] = from[key];
    }
  }
  return to;
}

function remove(collection, key) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      'Cannot update non-data-structure value: ' + collection
    );
  }
  if (isImmutable(collection)) {
    if (!collection.remove) {
      throw new TypeError(
        'Cannot update immutable value without .remove() method: ' + collection
      );
    }
    return collection.remove(key);
  }
  if (!hasOwnProperty.call(collection, key)) {
    return collection;
  }
  var collectionCopy = shallowCopy(collection);
  if (Array.isArray(collectionCopy)) {
    collectionCopy.splice(key, 1);
  } else {
    delete collectionCopy[key];
  }
  return collectionCopy;
}

function set(collection, key, value) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      'Cannot update non-data-structure value: ' + collection
    );
  }
  if (isImmutable(collection)) {
    if (!collection.set) {
      throw new TypeError(
        'Cannot update immutable value without .set() method: ' + collection
      );
    }
    return collection.set(key, value);
  }
  if (hasOwnProperty.call(collection, key) && value === collection[key]) {
    return collection;
  }
  var collectionCopy = shallowCopy(collection);
  collectionCopy[key] = value;
  return collectionCopy;
}

function updateIn$1(collection, keyPath, notSetValue, updater) {
  if (!updater) {
    updater = notSetValue;
    notSetValue = undefined;
  }
  var updatedValue = updateInDeeply(
    isImmutable(collection),
    collection,
    coerceKeyPath(keyPath),
    0,
    notSetValue,
    updater
  );
  return updatedValue === NOT_SET ? notSetValue : updatedValue;
}

function updateInDeeply(
  inImmutable,
  existing,
  keyPath,
  i,
  notSetValue,
  updater
) {
  var wasNotSet = existing === NOT_SET;
  if (i === keyPath.length) {
    var existingValue = wasNotSet ? notSetValue : existing;
    var newValue = updater(existingValue);
    return newValue === existingValue ? existing : newValue;
  }
  if (!wasNotSet && !isDataStructure(existing)) {
    throw new TypeError(
      'Cannot update within non-data-structure value in path [' +
        keyPath.slice(0, i).map(quoteString) +
        ']: ' +
        existing
    );
  }
  var key = keyPath[i];
  var nextExisting = wasNotSet ? NOT_SET : get(existing, key, NOT_SET);
  var nextUpdated = updateInDeeply(
    nextExisting === NOT_SET ? inImmutable : isImmutable(nextExisting),
    nextExisting,
    keyPath,
    i + 1,
    notSetValue,
    updater
  );
  return nextUpdated === nextExisting
    ? existing
    : nextUpdated === NOT_SET
    ? remove(existing, key)
    : set(
        wasNotSet ? (inImmutable ? emptyMap() : {}) : existing,
        key,
        nextUpdated
      );
}

function setIn$1(collection, keyPath, value) {
  return updateIn$1(collection, keyPath, NOT_SET, function () { return value; });
}

function setIn(keyPath, v) {
  return setIn$1(this, keyPath, v);
}

function removeIn(collection, keyPath) {
  return updateIn$1(collection, keyPath, function () { return NOT_SET; });
}

function deleteIn(keyPath) {
  return removeIn(this, keyPath);
}

function update$1(collection, key, notSetValue, updater) {
  return updateIn$1(collection, [key], notSetValue, updater);
}

function update(key, notSetValue, updater) {
  return arguments.length === 1
    ? key(this)
    : update$1(this, key, notSetValue, updater);
}

function updateIn(keyPath, notSetValue, updater) {
  return updateIn$1(this, keyPath, notSetValue, updater);
}

function merge$1() {
  var iters = [], len = arguments.length;
  while ( len-- ) iters[ len ] = arguments[ len ];

  return mergeIntoKeyedWith(this, iters);
}

function mergeWith$1(merger) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  if (typeof merger !== 'function') {
    throw new TypeError('Invalid merger function: ' + merger);
  }
  return mergeIntoKeyedWith(this, iters, merger);
}

function mergeIntoKeyedWith(collection, collections, merger) {
  var iters = [];
  for (var ii = 0; ii < collections.length; ii++) {
    var collection$1 = KeyedCollection(collections[ii]);
    if (collection$1.size !== 0) {
      iters.push(collection$1);
    }
  }
  if (iters.length === 0) {
    return collection;
  }
  if (
    collection.toSeq().size === 0 &&
    !collection.__ownerID &&
    iters.length === 1
  ) {
    return collection.constructor(iters[0]);
  }
  return collection.withMutations(function (collection) {
    var mergeIntoCollection = merger
      ? function (value, key) {
          update$1(collection, key, NOT_SET, function (oldVal) { return oldVal === NOT_SET ? value : merger(oldVal, value, key); }
          );
        }
      : function (value, key) {
          collection.set(key, value);
        };
    for (var ii = 0; ii < iters.length; ii++) {
      iters[ii].forEach(mergeIntoCollection);
    }
  });
}

function merge(collection) {
  var sources = [], len = arguments.length - 1;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

  return mergeWithSources(collection, sources);
}

function mergeWith(merger, collection) {
  var sources = [], len = arguments.length - 2;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 2 ];

  return mergeWithSources(collection, sources, merger);
}

function mergeDeep$1(collection) {
  var sources = [], len = arguments.length - 1;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

  return mergeDeepWithSources(collection, sources);
}

function mergeDeepWith$1(merger, collection) {
  var sources = [], len = arguments.length - 2;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 2 ];

  return mergeDeepWithSources(collection, sources, merger);
}

function mergeDeepWithSources(collection, sources, merger) {
  return mergeWithSources(collection, sources, deepMergerWith(merger));
}

function mergeWithSources(collection, sources, merger) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      'Cannot merge into non-data-structure value: ' + collection
    );
  }
  if (isImmutable(collection)) {
    return typeof merger === 'function' && collection.mergeWith
      ? collection.mergeWith.apply(collection, [ merger ].concat( sources ))
      : collection.merge
      ? collection.merge.apply(collection, sources)
      : collection.concat.apply(collection, sources);
  }
  var isArray = Array.isArray(collection);
  var merged = collection;
  var Collection = isArray ? IndexedCollection : KeyedCollection;
  var mergeItem = isArray
    ? function (value) {
        // Copy on write
        if (merged === collection) {
          merged = shallowCopy(merged);
        }
        merged.push(value);
      }
    : function (value, key) {
        var hasVal = hasOwnProperty.call(merged, key);
        var nextVal =
          hasVal && merger ? merger(merged[key], value, key) : value;
        if (!hasVal || nextVal !== merged[key]) {
          // Copy on write
          if (merged === collection) {
            merged = shallowCopy(merged);
          }
          merged[key] = nextVal;
        }
      };
  for (var i = 0; i < sources.length; i++) {
    Collection(sources[i]).forEach(mergeItem);
  }
  return merged;
}

function deepMergerWith(merger) {
  function deepMerger(oldValue, newValue, key) {
    return isDataStructure(oldValue) &&
      isDataStructure(newValue) &&
      areMergeable(oldValue, newValue)
      ? mergeWithSources(oldValue, [newValue], deepMerger)
      : merger
      ? merger(oldValue, newValue, key)
      : newValue;
  }
  return deepMerger;
}

/**
 * It's unclear what the desired behavior is for merging two collections that
 * fall into separate categories between keyed, indexed, or set-like, so we only
 * consider them mergeable if they fall into the same category.
 */
function areMergeable(oldDataStructure, newDataStructure) {
  var oldSeq = Seq(oldDataStructure);
  var newSeq = Seq(newDataStructure);
  // This logic assumes that a sequence can only fall into one of the three
  // categories mentioned above (since there's no `isSetLike()` method).
  return (
    isIndexed(oldSeq) === isIndexed(newSeq) &&
    isKeyed(oldSeq) === isKeyed(newSeq)
  );
}

function mergeDeep() {
  var iters = [], len = arguments.length;
  while ( len-- ) iters[ len ] = arguments[ len ];

  return mergeDeepWithSources(this, iters);
}

function mergeDeepWith(merger) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  return mergeDeepWithSources(this, iters, merger);
}

function mergeIn(keyPath) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  return updateIn$1(this, keyPath, emptyMap(), function (m) { return mergeWithSources(m, iters); });
}

function mergeDeepIn(keyPath) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  return updateIn$1(this, keyPath, emptyMap(), function (m) { return mergeDeepWithSources(m, iters); }
  );
}

function withMutations(fn) {
  var mutable = this.asMutable();
  fn(mutable);
  return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
}

function asMutable() {
  return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
}

function asImmutable() {
  return this.__ensureOwner();
}

function wasAltered() {
  return this.__altered;
}

var Map = /*@__PURE__*/(function (KeyedCollection) {
  function Map(value) {
    return value === null || value === undefined
      ? emptyMap()
      : isMap(value) && !isOrdered(value)
      ? value
      : emptyMap().withMutations(function (map) {
          var iter = KeyedCollection(value);
          assertNotInfinite(iter.size);
          iter.forEach(function (v, k) { return map.set(k, v); });
        });
  }

  if ( KeyedCollection ) Map.__proto__ = KeyedCollection;
  Map.prototype = Object.create( KeyedCollection && KeyedCollection.prototype );
  Map.prototype.constructor = Map;

  Map.of = function of () {
    var keyValues = [], len = arguments.length;
    while ( len-- ) keyValues[ len ] = arguments[ len ];

    return emptyMap().withMutations(function (map) {
      for (var i = 0; i < keyValues.length; i += 2) {
        if (i + 1 >= keyValues.length) {
          throw new Error('Missing value for key: ' + keyValues[i]);
        }
        map.set(keyValues[i], keyValues[i + 1]);
      }
    });
  };

  Map.prototype.toString = function toString () {
    return this.__toString('Map {', '}');
  };

  // @pragma Access

  Map.prototype.get = function get (k, notSetValue) {
    return this._root
      ? this._root.get(0, undefined, k, notSetValue)
      : notSetValue;
  };

  // @pragma Modification

  Map.prototype.set = function set (k, v) {
    return updateMap(this, k, v);
  };

  Map.prototype.remove = function remove (k) {
    return updateMap(this, k, NOT_SET);
  };

  Map.prototype.deleteAll = function deleteAll (keys) {
    var collection = Collection(keys);

    if (collection.size === 0) {
      return this;
    }

    return this.withMutations(function (map) {
      collection.forEach(function (key) { return map.remove(key); });
    });
  };

  Map.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._root = null;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return emptyMap();
  };

  // @pragma Composition

  Map.prototype.sort = function sort (comparator) {
    // Late binding
    return OrderedMap(sortFactory(this, comparator));
  };

  Map.prototype.sortBy = function sortBy (mapper, comparator) {
    // Late binding
    return OrderedMap(sortFactory(this, comparator, mapper));
  };

  Map.prototype.map = function map (mapper, context) {
    var this$1$1 = this;

    return this.withMutations(function (map) {
      map.forEach(function (value, key) {
        map.set(key, mapper.call(context, value, key, this$1$1));
      });
    });
  };

  // @pragma Mutability

  Map.prototype.__iterator = function __iterator (type, reverse) {
    return new MapIterator(this, type, reverse);
  };

  Map.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1$1 = this;

    var iterations = 0;
    this._root &&
      this._root.iterate(function (entry) {
        iterations++;
        return fn(entry[1], entry[0], this$1$1);
      }, reverse);
    return iterations;
  };

  Map.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyMap();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeMap(this.size, this._root, ownerID, this.__hash);
  };

  return Map;
}(KeyedCollection));

Map.isMap = isMap;

var MapPrototype = Map.prototype;
MapPrototype[IS_MAP_SYMBOL] = true;
MapPrototype[DELETE] = MapPrototype.remove;
MapPrototype.removeAll = MapPrototype.deleteAll;
MapPrototype.setIn = setIn;
MapPrototype.removeIn = MapPrototype.deleteIn = deleteIn;
MapPrototype.update = update;
MapPrototype.updateIn = updateIn;
MapPrototype.merge = MapPrototype.concat = merge$1;
MapPrototype.mergeWith = mergeWith$1;
MapPrototype.mergeDeep = mergeDeep;
MapPrototype.mergeDeepWith = mergeDeepWith;
MapPrototype.mergeIn = mergeIn;
MapPrototype.mergeDeepIn = mergeDeepIn;
MapPrototype.withMutations = withMutations;
MapPrototype.wasAltered = wasAltered;
MapPrototype.asImmutable = asImmutable;
MapPrototype['@@transducer/init'] = MapPrototype.asMutable = asMutable;
MapPrototype['@@transducer/step'] = function (result, arr) {
  return result.set(arr[0], arr[1]);
};
MapPrototype['@@transducer/result'] = function (obj) {
  return obj.asImmutable();
};

// #pragma Trie Nodes

var ArrayMapNode = function ArrayMapNode(ownerID, entries) {
  this.ownerID = ownerID;
  this.entries = entries;
};

ArrayMapNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  var entries = this.entries;
  for (var ii = 0, len = entries.length; ii < len; ii++) {
    if (is(key, entries[ii][0])) {
      return entries[ii][1];
    }
  }
  return notSetValue;
};

ArrayMapNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  var removed = value === NOT_SET;

  var entries = this.entries;
  var idx = 0;
  var len = entries.length;
  for (; idx < len; idx++) {
    if (is(key, entries[idx][0])) {
      break;
    }
  }
  var exists = idx < len;

  if (exists ? entries[idx][1] === value : removed) {
    return this;
  }

  SetRef(didAlter);
  (removed || !exists) && SetRef(didChangeSize);

  if (removed && entries.length === 1) {
    return; // undefined
  }

  if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
    return createNodes(ownerID, entries, key, value);
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newEntries = isEditable ? entries : arrCopy(entries);

  if (exists) {
    if (removed) {
      idx === len - 1
        ? newEntries.pop()
        : (newEntries[idx] = newEntries.pop());
    } else {
      newEntries[idx] = [key, value];
    }
  } else {
    newEntries.push([key, value]);
  }

  if (isEditable) {
    this.entries = newEntries;
    return this;
  }

  return new ArrayMapNode(ownerID, newEntries);
};

var BitmapIndexedNode = function BitmapIndexedNode(ownerID, bitmap, nodes) {
  this.ownerID = ownerID;
  this.bitmap = bitmap;
  this.nodes = nodes;
};

BitmapIndexedNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
  var bitmap = this.bitmap;
  return (bitmap & bit) === 0
    ? notSetValue
    : this.nodes[popCount(bitmap & (bit - 1))].get(
        shift + SHIFT,
        keyHash,
        key,
        notSetValue
      );
};

BitmapIndexedNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var bit = 1 << keyHashFrag;
  var bitmap = this.bitmap;
  var exists = (bitmap & bit) !== 0;

  if (!exists && value === NOT_SET) {
    return this;
  }

  var idx = popCount(bitmap & (bit - 1));
  var nodes = this.nodes;
  var node = exists ? nodes[idx] : undefined;
  var newNode = updateNode(
    node,
    ownerID,
    shift + SHIFT,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );

  if (newNode === node) {
    return this;
  }

  if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
    return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
  }

  if (
    exists &&
    !newNode &&
    nodes.length === 2 &&
    isLeafNode(nodes[idx ^ 1])
  ) {
    return nodes[idx ^ 1];
  }

  if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
    return newNode;
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newBitmap = exists ? (newNode ? bitmap : bitmap ^ bit) : bitmap | bit;
  var newNodes = exists
    ? newNode
      ? setAt(nodes, idx, newNode, isEditable)
      : spliceOut(nodes, idx, isEditable)
    : spliceIn(nodes, idx, newNode, isEditable);

  if (isEditable) {
    this.bitmap = newBitmap;
    this.nodes = newNodes;
    return this;
  }

  return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
};

var HashArrayMapNode = function HashArrayMapNode(ownerID, count, nodes) {
  this.ownerID = ownerID;
  this.count = count;
  this.nodes = nodes;
};

HashArrayMapNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var node = this.nodes[idx];
  return node
    ? node.get(shift + SHIFT, keyHash, key, notSetValue)
    : notSetValue;
};

HashArrayMapNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var removed = value === NOT_SET;
  var nodes = this.nodes;
  var node = nodes[idx];

  if (removed && !node) {
    return this;
  }

  var newNode = updateNode(
    node,
    ownerID,
    shift + SHIFT,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
  if (newNode === node) {
    return this;
  }

  var newCount = this.count;
  if (!node) {
    newCount++;
  } else if (!newNode) {
    newCount--;
    if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
      return packNodes(ownerID, nodes, newCount, idx);
    }
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newNodes = setAt(nodes, idx, newNode, isEditable);

  if (isEditable) {
    this.count = newCount;
    this.nodes = newNodes;
    return this;
  }

  return new HashArrayMapNode(ownerID, newCount, newNodes);
};

var HashCollisionNode = function HashCollisionNode(ownerID, keyHash, entries) {
  this.ownerID = ownerID;
  this.keyHash = keyHash;
  this.entries = entries;
};

HashCollisionNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  var entries = this.entries;
  for (var ii = 0, len = entries.length; ii < len; ii++) {
    if (is(key, entries[ii][0])) {
      return entries[ii][1];
    }
  }
  return notSetValue;
};

HashCollisionNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }

  var removed = value === NOT_SET;

  if (keyHash !== this.keyHash) {
    if (removed) {
      return this;
    }
    SetRef(didAlter);
    SetRef(didChangeSize);
    return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
  }

  var entries = this.entries;
  var idx = 0;
  var len = entries.length;
  for (; idx < len; idx++) {
    if (is(key, entries[idx][0])) {
      break;
    }
  }
  var exists = idx < len;

  if (exists ? entries[idx][1] === value : removed) {
    return this;
  }

  SetRef(didAlter);
  (removed || !exists) && SetRef(didChangeSize);

  if (removed && len === 2) {
    return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newEntries = isEditable ? entries : arrCopy(entries);

  if (exists) {
    if (removed) {
      idx === len - 1
        ? newEntries.pop()
        : (newEntries[idx] = newEntries.pop());
    } else {
      newEntries[idx] = [key, value];
    }
  } else {
    newEntries.push([key, value]);
  }

  if (isEditable) {
    this.entries = newEntries;
    return this;
  }

  return new HashCollisionNode(ownerID, this.keyHash, newEntries);
};

var ValueNode = function ValueNode(ownerID, keyHash, entry) {
  this.ownerID = ownerID;
  this.keyHash = keyHash;
  this.entry = entry;
};

ValueNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
};

ValueNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  var removed = value === NOT_SET;
  var keyMatch = is(key, this.entry[0]);
  if (keyMatch ? value === this.entry[1] : removed) {
    return this;
  }

  SetRef(didAlter);

  if (removed) {
    SetRef(didChangeSize);
    return; // undefined
  }

  if (keyMatch) {
    if (ownerID && ownerID === this.ownerID) {
      this.entry[1] = value;
      return this;
    }
    return new ValueNode(ownerID, this.keyHash, [key, value]);
  }

  SetRef(didChangeSize);
  return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
};

// #pragma Iterators

ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate =
  function (fn, reverse) {
    var entries = this.entries;
    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  };

BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate =
  function (fn, reverse) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse ? maxIndex - ii : ii];
      if (node && node.iterate(fn, reverse) === false) {
        return false;
      }
    }
  };

// eslint-disable-next-line no-unused-vars
ValueNode.prototype.iterate = function (fn, reverse) {
  return fn(this.entry);
};

var MapIterator = /*@__PURE__*/(function (Iterator) {
  function MapIterator(map, type, reverse) {
    this._type = type;
    this._reverse = reverse;
    this._stack = map._root && mapIteratorFrame(map._root);
  }

  if ( Iterator ) MapIterator.__proto__ = Iterator;
  MapIterator.prototype = Object.create( Iterator && Iterator.prototype );
  MapIterator.prototype.constructor = MapIterator;

  MapIterator.prototype.next = function next () {
    var type = this._type;
    var stack = this._stack;
    while (stack) {
      var node = stack.node;
      var index = stack.index++;
      var maxIndex = (void 0);
      if (node.entry) {
        if (index === 0) {
          return mapIteratorValue(type, node.entry);
        }
      } else if (node.entries) {
        maxIndex = node.entries.length - 1;
        if (index <= maxIndex) {
          return mapIteratorValue(
            type,
            node.entries[this._reverse ? maxIndex - index : index]
          );
        }
      } else {
        maxIndex = node.nodes.length - 1;
        if (index <= maxIndex) {
          var subNode = node.nodes[this._reverse ? maxIndex - index : index];
          if (subNode) {
            if (subNode.entry) {
              return mapIteratorValue(type, subNode.entry);
            }
            stack = this._stack = mapIteratorFrame(subNode, stack);
          }
          continue;
        }
      }
      stack = this._stack = this._stack.__prev;
    }
    return iteratorDone();
  };

  return MapIterator;
}(Iterator));

function mapIteratorValue(type, entry) {
  return iteratorValue(type, entry[0], entry[1]);
}

function mapIteratorFrame(node, prev) {
  return {
    node: node,
    index: 0,
    __prev: prev,
  };
}

function makeMap(size, root, ownerID, hash) {
  var map = Object.create(MapPrototype);
  map.size = size;
  map._root = root;
  map.__ownerID = ownerID;
  map.__hash = hash;
  map.__altered = false;
  return map;
}

var EMPTY_MAP;
function emptyMap() {
  return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
}

function updateMap(map, k, v) {
  var newRoot;
  var newSize;
  if (!map._root) {
    if (v === NOT_SET) {
      return map;
    }
    newSize = 1;
    newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
  } else {
    var didChangeSize = MakeRef();
    var didAlter = MakeRef();
    newRoot = updateNode(
      map._root,
      map.__ownerID,
      0,
      undefined,
      k,
      v,
      didChangeSize,
      didAlter
    );
    if (!didAlter.value) {
      return map;
    }
    newSize = map.size + (didChangeSize.value ? (v === NOT_SET ? -1 : 1) : 0);
  }
  if (map.__ownerID) {
    map.size = newSize;
    map._root = newRoot;
    map.__hash = undefined;
    map.__altered = true;
    return map;
  }
  return newRoot ? makeMap(newSize, newRoot) : emptyMap();
}

function updateNode(
  node,
  ownerID,
  shift,
  keyHash,
  key,
  value,
  didChangeSize,
  didAlter
) {
  if (!node) {
    if (value === NOT_SET) {
      return node;
    }
    SetRef(didAlter);
    SetRef(didChangeSize);
    return new ValueNode(ownerID, keyHash, [key, value]);
  }
  return node.update(
    ownerID,
    shift,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
}

function isLeafNode(node) {
  return (
    node.constructor === ValueNode || node.constructor === HashCollisionNode
  );
}

function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
  if (node.keyHash === keyHash) {
    return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
  }

  var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
  var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

  var newNode;
  var nodes =
    idx1 === idx2
      ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)]
      : ((newNode = new ValueNode(ownerID, keyHash, entry)),
        idx1 < idx2 ? [node, newNode] : [newNode, node]);

  return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
}

function createNodes(ownerID, entries, key, value) {
  if (!ownerID) {
    ownerID = new OwnerID();
  }
  var node = new ValueNode(ownerID, hash(key), [key, value]);
  for (var ii = 0; ii < entries.length; ii++) {
    var entry = entries[ii];
    node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
  }
  return node;
}

function packNodes(ownerID, nodes, count, excluding) {
  var bitmap = 0;
  var packedII = 0;
  var packedNodes = new Array(count);
  for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
    var node = nodes[ii];
    if (node !== undefined && ii !== excluding) {
      bitmap |= bit;
      packedNodes[packedII++] = node;
    }
  }
  return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
}

function expandNodes(ownerID, nodes, bitmap, including, node) {
  var count = 0;
  var expandedNodes = new Array(SIZE);
  for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
    expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
  }
  expandedNodes[including] = node;
  return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
}

function popCount(x) {
  x -= (x >> 1) & 0x55555555;
  x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
  x = (x + (x >> 4)) & 0x0f0f0f0f;
  x += x >> 8;
  x += x >> 16;
  return x & 0x7f;
}

function setAt(array, idx, val, canEdit) {
  var newArray = canEdit ? array : arrCopy(array);
  newArray[idx] = val;
  return newArray;
}

function spliceIn(array, idx, val, canEdit) {
  var newLen = array.length + 1;
  if (canEdit && idx + 1 === newLen) {
    array[idx] = val;
    return array;
  }
  var newArray = new Array(newLen);
  var after = 0;
  for (var ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      newArray[ii] = val;
      after = -1;
    } else {
      newArray[ii] = array[ii + after];
    }
  }
  return newArray;
}

function spliceOut(array, idx, canEdit) {
  var newLen = array.length - 1;
  if (canEdit && idx === newLen) {
    array.pop();
    return array;
  }
  var newArray = new Array(newLen);
  var after = 0;
  for (var ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      after = 1;
    }
    newArray[ii] = array[ii + after];
  }
  return newArray;
}

var MAX_ARRAY_MAP_SIZE = SIZE / 4;
var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

var IS_LIST_SYMBOL = '@@__IMMUTABLE_LIST__@@';

function isList(maybeList) {
  return Boolean(maybeList && maybeList[IS_LIST_SYMBOL]);
}

var List = /*@__PURE__*/(function (IndexedCollection) {
  function List(value) {
    var empty = emptyList();
    if (value === null || value === undefined) {
      return empty;
    }
    if (isList(value)) {
      return value;
    }
    var iter = IndexedCollection(value);
    var size = iter.size;
    if (size === 0) {
      return empty;
    }
    assertNotInfinite(size);
    if (size > 0 && size < SIZE) {
      return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
    }
    return empty.withMutations(function (list) {
      list.setSize(size);
      iter.forEach(function (v, i) { return list.set(i, v); });
    });
  }

  if ( IndexedCollection ) List.__proto__ = IndexedCollection;
  List.prototype = Object.create( IndexedCollection && IndexedCollection.prototype );
  List.prototype.constructor = List;

  List.of = function of (/*...values*/) {
    return this(arguments);
  };

  List.prototype.toString = function toString () {
    return this.__toString('List [', ']');
  };

  // @pragma Access

  List.prototype.get = function get (index, notSetValue) {
    index = wrapIndex(this, index);
    if (index >= 0 && index < this.size) {
      index += this._origin;
      var node = listNodeFor(this, index);
      return node && node.array[index & MASK];
    }
    return notSetValue;
  };

  // @pragma Modification

  List.prototype.set = function set (index, value) {
    return updateList(this, index, value);
  };

  List.prototype.remove = function remove (index) {
    return !this.has(index)
      ? this
      : index === 0
      ? this.shift()
      : index === this.size - 1
      ? this.pop()
      : this.splice(index, 1);
  };

  List.prototype.insert = function insert (index, value) {
    return this.splice(index, 0, value);
  };

  List.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = this._origin = this._capacity = 0;
      this._level = SHIFT;
      this._root = this._tail = this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return emptyList();
  };

  List.prototype.push = function push (/*...values*/) {
    var values = arguments;
    var oldSize = this.size;
    return this.withMutations(function (list) {
      setListBounds(list, 0, oldSize + values.length);
      for (var ii = 0; ii < values.length; ii++) {
        list.set(oldSize + ii, values[ii]);
      }
    });
  };

  List.prototype.pop = function pop () {
    return setListBounds(this, 0, -1);
  };

  List.prototype.unshift = function unshift (/*...values*/) {
    var values = arguments;
    return this.withMutations(function (list) {
      setListBounds(list, -values.length);
      for (var ii = 0; ii < values.length; ii++) {
        list.set(ii, values[ii]);
      }
    });
  };

  List.prototype.shift = function shift () {
    return setListBounds(this, 1);
  };

  // @pragma Composition

  List.prototype.concat = function concat (/*...collections*/) {
    var arguments$1 = arguments;

    var seqs = [];
    for (var i = 0; i < arguments.length; i++) {
      var argument = arguments$1[i];
      var seq = IndexedCollection(
        typeof argument !== 'string' && hasIterator(argument)
          ? argument
          : [argument]
      );
      if (seq.size !== 0) {
        seqs.push(seq);
      }
    }
    if (seqs.length === 0) {
      return this;
    }
    if (this.size === 0 && !this.__ownerID && seqs.length === 1) {
      return this.constructor(seqs[0]);
    }
    return this.withMutations(function (list) {
      seqs.forEach(function (seq) { return seq.forEach(function (value) { return list.push(value); }); });
    });
  };

  List.prototype.setSize = function setSize (size) {
    return setListBounds(this, 0, size);
  };

  List.prototype.map = function map (mapper, context) {
    var this$1$1 = this;

    return this.withMutations(function (list) {
      for (var i = 0; i < this$1$1.size; i++) {
        list.set(i, mapper.call(context, list.get(i), i, this$1$1));
      }
    });
  };

  // @pragma Iteration

  List.prototype.slice = function slice (begin, end) {
    var size = this.size;
    if (wholeSlice(begin, end, size)) {
      return this;
    }
    return setListBounds(
      this,
      resolveBegin(begin, size),
      resolveEnd(end, size)
    );
  };

  List.prototype.__iterator = function __iterator (type, reverse) {
    var index = reverse ? this.size : 0;
    var values = iterateList(this, reverse);
    return new Iterator(function () {
      var value = values();
      return value === DONE
        ? iteratorDone()
        : iteratorValue(type, reverse ? --index : index++, value);
    });
  };

  List.prototype.__iterate = function __iterate (fn, reverse) {
    var index = reverse ? this.size : 0;
    var values = iterateList(this, reverse);
    var value;
    while ((value = values()) !== DONE) {
      if (fn(value, reverse ? --index : index++, this) === false) {
        break;
      }
    }
    return index;
  };

  List.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyList();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeList(
      this._origin,
      this._capacity,
      this._level,
      this._root,
      this._tail,
      ownerID,
      this.__hash
    );
  };

  return List;
}(IndexedCollection));

List.isList = isList;

var ListPrototype = List.prototype;
ListPrototype[IS_LIST_SYMBOL] = true;
ListPrototype[DELETE] = ListPrototype.remove;
ListPrototype.merge = ListPrototype.concat;
ListPrototype.setIn = setIn;
ListPrototype.deleteIn = ListPrototype.removeIn = deleteIn;
ListPrototype.update = update;
ListPrototype.updateIn = updateIn;
ListPrototype.mergeIn = mergeIn;
ListPrototype.mergeDeepIn = mergeDeepIn;
ListPrototype.withMutations = withMutations;
ListPrototype.wasAltered = wasAltered;
ListPrototype.asImmutable = asImmutable;
ListPrototype['@@transducer/init'] = ListPrototype.asMutable = asMutable;
ListPrototype['@@transducer/step'] = function (result, arr) {
  return result.push(arr);
};
ListPrototype['@@transducer/result'] = function (obj) {
  return obj.asImmutable();
};

var VNode = function VNode(array, ownerID) {
  this.array = array;
  this.ownerID = ownerID;
};

// TODO: seems like these methods are very similar

VNode.prototype.removeBefore = function removeBefore (ownerID, level, index) {
  if (index === level ? 1 << level : this.array.length === 0) {
    return this;
  }
  var originIndex = (index >>> level) & MASK;
  if (originIndex >= this.array.length) {
    return new VNode([], ownerID);
  }
  var removingFirst = originIndex === 0;
  var newChild;
  if (level > 0) {
    var oldChild = this.array[originIndex];
    newChild =
      oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
    if (newChild === oldChild && removingFirst) {
      return this;
    }
  }
  if (removingFirst && !newChild) {
    return this;
  }
  var editable = editableVNode(this, ownerID);
  if (!removingFirst) {
    for (var ii = 0; ii < originIndex; ii++) {
      editable.array[ii] = undefined;
    }
  }
  if (newChild) {
    editable.array[originIndex] = newChild;
  }
  return editable;
};

VNode.prototype.removeAfter = function removeAfter (ownerID, level, index) {
  if (index === (level ? 1 << level : 0) || this.array.length === 0) {
    return this;
  }
  var sizeIndex = ((index - 1) >>> level) & MASK;
  if (sizeIndex >= this.array.length) {
    return this;
  }

  var newChild;
  if (level > 0) {
    var oldChild = this.array[sizeIndex];
    newChild =
      oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
    if (newChild === oldChild && sizeIndex === this.array.length - 1) {
      return this;
    }
  }

  var editable = editableVNode(this, ownerID);
  editable.array.splice(sizeIndex + 1);
  if (newChild) {
    editable.array[sizeIndex] = newChild;
  }
  return editable;
};

var DONE = {};

function iterateList(list, reverse) {
  var left = list._origin;
  var right = list._capacity;
  var tailPos = getTailOffset(right);
  var tail = list._tail;

  return iterateNodeOrLeaf(list._root, list._level, 0);

  function iterateNodeOrLeaf(node, level, offset) {
    return level === 0
      ? iterateLeaf(node, offset)
      : iterateNode(node, level, offset);
  }

  function iterateLeaf(node, offset) {
    var array = offset === tailPos ? tail && tail.array : node && node.array;
    var from = offset > left ? 0 : left - offset;
    var to = right - offset;
    if (to > SIZE) {
      to = SIZE;
    }
    return function () {
      if (from === to) {
        return DONE;
      }
      var idx = reverse ? --to : from++;
      return array && array[idx];
    };
  }

  function iterateNode(node, level, offset) {
    var values;
    var array = node && node.array;
    var from = offset > left ? 0 : (left - offset) >> level;
    var to = ((right - offset) >> level) + 1;
    if (to > SIZE) {
      to = SIZE;
    }
    return function () {
      while (true) {
        if (values) {
          var value = values();
          if (value !== DONE) {
            return value;
          }
          values = null;
        }
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        values = iterateNodeOrLeaf(
          array && array[idx],
          level - SHIFT,
          offset + (idx << level)
        );
      }
    };
  }
}

function makeList(origin, capacity, level, root, tail, ownerID, hash) {
  var list = Object.create(ListPrototype);
  list.size = capacity - origin;
  list._origin = origin;
  list._capacity = capacity;
  list._level = level;
  list._root = root;
  list._tail = tail;
  list.__ownerID = ownerID;
  list.__hash = hash;
  list.__altered = false;
  return list;
}

var EMPTY_LIST;
function emptyList() {
  return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
}

function updateList(list, index, value) {
  index = wrapIndex(list, index);

  if (index !== index) {
    return list;
  }

  if (index >= list.size || index < 0) {
    return list.withMutations(function (list) {
      index < 0
        ? setListBounds(list, index).set(0, value)
        : setListBounds(list, 0, index + 1).set(index, value);
    });
  }

  index += list._origin;

  var newTail = list._tail;
  var newRoot = list._root;
  var didAlter = MakeRef();
  if (index >= getTailOffset(list._capacity)) {
    newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
  } else {
    newRoot = updateVNode(
      newRoot,
      list.__ownerID,
      list._level,
      index,
      value,
      didAlter
    );
  }

  if (!didAlter.value) {
    return list;
  }

  if (list.__ownerID) {
    list._root = newRoot;
    list._tail = newTail;
    list.__hash = undefined;
    list.__altered = true;
    return list;
  }
  return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
}

function updateVNode(node, ownerID, level, index, value, didAlter) {
  var idx = (index >>> level) & MASK;
  var nodeHas = node && idx < node.array.length;
  if (!nodeHas && value === undefined) {
    return node;
  }

  var newNode;

  if (level > 0) {
    var lowerNode = node && node.array[idx];
    var newLowerNode = updateVNode(
      lowerNode,
      ownerID,
      level - SHIFT,
      index,
      value,
      didAlter
    );
    if (newLowerNode === lowerNode) {
      return node;
    }
    newNode = editableVNode(node, ownerID);
    newNode.array[idx] = newLowerNode;
    return newNode;
  }

  if (nodeHas && node.array[idx] === value) {
    return node;
  }

  if (didAlter) {
    SetRef(didAlter);
  }

  newNode = editableVNode(node, ownerID);
  if (value === undefined && idx === newNode.array.length - 1) {
    newNode.array.pop();
  } else {
    newNode.array[idx] = value;
  }
  return newNode;
}

function editableVNode(node, ownerID) {
  if (ownerID && node && ownerID === node.ownerID) {
    return node;
  }
  return new VNode(node ? node.array.slice() : [], ownerID);
}

function listNodeFor(list, rawIndex) {
  if (rawIndex >= getTailOffset(list._capacity)) {
    return list._tail;
  }
  if (rawIndex < 1 << (list._level + SHIFT)) {
    var node = list._root;
    var level = list._level;
    while (node && level > 0) {
      node = node.array[(rawIndex >>> level) & MASK];
      level -= SHIFT;
    }
    return node;
  }
}

function setListBounds(list, begin, end) {
  // Sanitize begin & end using this shorthand for ToInt32(argument)
  // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
  if (begin !== undefined) {
    begin |= 0;
  }
  if (end !== undefined) {
    end |= 0;
  }
  var owner = list.__ownerID || new OwnerID();
  var oldOrigin = list._origin;
  var oldCapacity = list._capacity;
  var newOrigin = oldOrigin + begin;
  var newCapacity =
    end === undefined
      ? oldCapacity
      : end < 0
      ? oldCapacity + end
      : oldOrigin + end;
  if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
    return list;
  }

  // If it's going to end after it starts, it's empty.
  if (newOrigin >= newCapacity) {
    return list.clear();
  }

  var newLevel = list._level;
  var newRoot = list._root;

  // New origin might need creating a higher root.
  var offsetShift = 0;
  while (newOrigin + offsetShift < 0) {
    newRoot = new VNode(
      newRoot && newRoot.array.length ? [undefined, newRoot] : [],
      owner
    );
    newLevel += SHIFT;
    offsetShift += 1 << newLevel;
  }
  if (offsetShift) {
    newOrigin += offsetShift;
    oldOrigin += offsetShift;
    newCapacity += offsetShift;
    oldCapacity += offsetShift;
  }

  var oldTailOffset = getTailOffset(oldCapacity);
  var newTailOffset = getTailOffset(newCapacity);

  // New size might need creating a higher root.
  while (newTailOffset >= 1 << (newLevel + SHIFT)) {
    newRoot = new VNode(
      newRoot && newRoot.array.length ? [newRoot] : [],
      owner
    );
    newLevel += SHIFT;
  }

  // Locate or create the new tail.
  var oldTail = list._tail;
  var newTail =
    newTailOffset < oldTailOffset
      ? listNodeFor(list, newCapacity - 1)
      : newTailOffset > oldTailOffset
      ? new VNode([], owner)
      : oldTail;

  // Merge Tail into tree.
  if (
    oldTail &&
    newTailOffset > oldTailOffset &&
    newOrigin < oldCapacity &&
    oldTail.array.length
  ) {
    newRoot = editableVNode(newRoot, owner);
    var node = newRoot;
    for (var level = newLevel; level > SHIFT; level -= SHIFT) {
      var idx = (oldTailOffset >>> level) & MASK;
      node = node.array[idx] = editableVNode(node.array[idx], owner);
    }
    node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
  }

  // If the size has been reduced, there's a chance the tail needs to be trimmed.
  if (newCapacity < oldCapacity) {
    newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
  }

  // If the new origin is within the tail, then we do not need a root.
  if (newOrigin >= newTailOffset) {
    newOrigin -= newTailOffset;
    newCapacity -= newTailOffset;
    newLevel = SHIFT;
    newRoot = null;
    newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
  } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
    offsetShift = 0;

    // Identify the new top root node of the subtree of the old root.
    while (newRoot) {
      var beginIndex = (newOrigin >>> newLevel) & MASK;
      if ((beginIndex !== newTailOffset >>> newLevel) & MASK) {
        break;
      }
      if (beginIndex) {
        offsetShift += (1 << newLevel) * beginIndex;
      }
      newLevel -= SHIFT;
      newRoot = newRoot.array[beginIndex];
    }

    // Trim the new sides of the new root.
    if (newRoot && newOrigin > oldOrigin) {
      newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
    }
    if (newRoot && newTailOffset < oldTailOffset) {
      newRoot = newRoot.removeAfter(
        owner,
        newLevel,
        newTailOffset - offsetShift
      );
    }
    if (offsetShift) {
      newOrigin -= offsetShift;
      newCapacity -= offsetShift;
    }
  }

  if (list.__ownerID) {
    list.size = newCapacity - newOrigin;
    list._origin = newOrigin;
    list._capacity = newCapacity;
    list._level = newLevel;
    list._root = newRoot;
    list._tail = newTail;
    list.__hash = undefined;
    list.__altered = true;
    return list;
  }
  return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
}

function getTailOffset(size) {
  return size < SIZE ? 0 : ((size - 1) >>> SHIFT) << SHIFT;
}

var OrderedMap = /*@__PURE__*/(function (Map) {
  function OrderedMap(value) {
    return value === null || value === undefined
      ? emptyOrderedMap()
      : isOrderedMap(value)
      ? value
      : emptyOrderedMap().withMutations(function (map) {
          var iter = KeyedCollection(value);
          assertNotInfinite(iter.size);
          iter.forEach(function (v, k) { return map.set(k, v); });
        });
  }

  if ( Map ) OrderedMap.__proto__ = Map;
  OrderedMap.prototype = Object.create( Map && Map.prototype );
  OrderedMap.prototype.constructor = OrderedMap;

  OrderedMap.of = function of (/*...values*/) {
    return this(arguments);
  };

  OrderedMap.prototype.toString = function toString () {
    return this.__toString('OrderedMap {', '}');
  };

  // @pragma Access

  OrderedMap.prototype.get = function get (k, notSetValue) {
    var index = this._map.get(k);
    return index !== undefined ? this._list.get(index)[1] : notSetValue;
  };

  // @pragma Modification

  OrderedMap.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._map.clear();
      this._list.clear();
      this.__altered = true;
      return this;
    }
    return emptyOrderedMap();
  };

  OrderedMap.prototype.set = function set (k, v) {
    return updateOrderedMap(this, k, v);
  };

  OrderedMap.prototype.remove = function remove (k) {
    return updateOrderedMap(this, k, NOT_SET);
  };

  OrderedMap.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1$1 = this;

    return this._list.__iterate(
      function (entry) { return entry && fn(entry[1], entry[0], this$1$1); },
      reverse
    );
  };

  OrderedMap.prototype.__iterator = function __iterator (type, reverse) {
    return this._list.fromEntrySeq().__iterator(type, reverse);
  };

  OrderedMap.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newMap = this._map.__ensureOwner(ownerID);
    var newList = this._list.__ensureOwner(ownerID);
    if (!ownerID) {
      if (this.size === 0) {
        return emptyOrderedMap();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      this._map = newMap;
      this._list = newList;
      return this;
    }
    return makeOrderedMap(newMap, newList, ownerID, this.__hash);
  };

  return OrderedMap;
}(Map));

OrderedMap.isOrderedMap = isOrderedMap;

OrderedMap.prototype[IS_ORDERED_SYMBOL] = true;
OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;

function makeOrderedMap(map, list, ownerID, hash) {
  var omap = Object.create(OrderedMap.prototype);
  omap.size = map ? map.size : 0;
  omap._map = map;
  omap._list = list;
  omap.__ownerID = ownerID;
  omap.__hash = hash;
  omap.__altered = false;
  return omap;
}

var EMPTY_ORDERED_MAP;
function emptyOrderedMap() {
  return (
    EMPTY_ORDERED_MAP ||
    (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()))
  );
}

function updateOrderedMap(omap, k, v) {
  var map = omap._map;
  var list = omap._list;
  var i = map.get(k);
  var has = i !== undefined;
  var newMap;
  var newList;
  if (v === NOT_SET) {
    // removed
    if (!has) {
      return omap;
    }
    if (list.size >= SIZE && list.size >= map.size * 2) {
      newList = list.filter(function (entry, idx) { return entry !== undefined && i !== idx; });
      newMap = newList
        .toKeyedSeq()
        .map(function (entry) { return entry[0]; })
        .flip()
        .toMap();
      if (omap.__ownerID) {
        newMap.__ownerID = newList.__ownerID = omap.__ownerID;
      }
    } else {
      newMap = map.remove(k);
      newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
    }
  } else if (has) {
    if (v === list.get(i)[1]) {
      return omap;
    }
    newMap = map;
    newList = list.set(i, [k, v]);
  } else {
    newMap = map.set(k, list.size);
    newList = list.set(list.size, [k, v]);
  }
  if (omap.__ownerID) {
    omap.size = newMap.size;
    omap._map = newMap;
    omap._list = newList;
    omap.__hash = undefined;
    omap.__altered = true;
    return omap;
  }
  return makeOrderedMap(newMap, newList);
}

var IS_STACK_SYMBOL = '@@__IMMUTABLE_STACK__@@';

function isStack(maybeStack) {
  return Boolean(maybeStack && maybeStack[IS_STACK_SYMBOL]);
}

var Stack = /*@__PURE__*/(function (IndexedCollection) {
  function Stack(value) {
    return value === null || value === undefined
      ? emptyStack()
      : isStack(value)
      ? value
      : emptyStack().pushAll(value);
  }

  if ( IndexedCollection ) Stack.__proto__ = IndexedCollection;
  Stack.prototype = Object.create( IndexedCollection && IndexedCollection.prototype );
  Stack.prototype.constructor = Stack;

  Stack.of = function of (/*...values*/) {
    return this(arguments);
  };

  Stack.prototype.toString = function toString () {
    return this.__toString('Stack [', ']');
  };

  // @pragma Access

  Stack.prototype.get = function get (index, notSetValue) {
    var head = this._head;
    index = wrapIndex(this, index);
    while (head && index--) {
      head = head.next;
    }
    return head ? head.value : notSetValue;
  };

  Stack.prototype.peek = function peek () {
    return this._head && this._head.value;
  };

  // @pragma Modification

  Stack.prototype.push = function push (/*...values*/) {
    var arguments$1 = arguments;

    if (arguments.length === 0) {
      return this;
    }
    var newSize = this.size + arguments.length;
    var head = this._head;
    for (var ii = arguments.length - 1; ii >= 0; ii--) {
      head = {
        value: arguments$1[ii],
        next: head,
      };
    }
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };

  Stack.prototype.pushAll = function pushAll (iter) {
    iter = IndexedCollection(iter);
    if (iter.size === 0) {
      return this;
    }
    if (this.size === 0 && isStack(iter)) {
      return iter;
    }
    assertNotInfinite(iter.size);
    var newSize = this.size;
    var head = this._head;
    iter.__iterate(function (value) {
      newSize++;
      head = {
        value: value,
        next: head,
      };
    }, /* reverse */ true);
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };

  Stack.prototype.pop = function pop () {
    return this.slice(1);
  };

  Stack.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._head = undefined;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return emptyStack();
  };

  Stack.prototype.slice = function slice (begin, end) {
    if (wholeSlice(begin, end, this.size)) {
      return this;
    }
    var resolvedBegin = resolveBegin(begin, this.size);
    var resolvedEnd = resolveEnd(end, this.size);
    if (resolvedEnd !== this.size) {
      // super.slice(begin, end);
      return IndexedCollection.prototype.slice.call(this, begin, end);
    }
    var newSize = this.size - resolvedBegin;
    var head = this._head;
    while (resolvedBegin--) {
      head = head.next;
    }
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };

  // @pragma Mutability

  Stack.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyStack();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeStack(this.size, this._head, ownerID, this.__hash);
  };

  // @pragma Iteration

  Stack.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1$1 = this;

    if (reverse) {
      return new ArraySeq(this.toArray()).__iterate(
        function (v, k) { return fn(v, k, this$1$1); },
        reverse
      );
    }
    var iterations = 0;
    var node = this._head;
    while (node) {
      if (fn(node.value, iterations++, this) === false) {
        break;
      }
      node = node.next;
    }
    return iterations;
  };

  Stack.prototype.__iterator = function __iterator (type, reverse) {
    if (reverse) {
      return new ArraySeq(this.toArray()).__iterator(type, reverse);
    }
    var iterations = 0;
    var node = this._head;
    return new Iterator(function () {
      if (node) {
        var value = node.value;
        node = node.next;
        return iteratorValue(type, iterations++, value);
      }
      return iteratorDone();
    });
  };

  return Stack;
}(IndexedCollection));

Stack.isStack = isStack;

var StackPrototype = Stack.prototype;
StackPrototype[IS_STACK_SYMBOL] = true;
StackPrototype.shift = StackPrototype.pop;
StackPrototype.unshift = StackPrototype.push;
StackPrototype.unshiftAll = StackPrototype.pushAll;
StackPrototype.withMutations = withMutations;
StackPrototype.wasAltered = wasAltered;
StackPrototype.asImmutable = asImmutable;
StackPrototype['@@transducer/init'] = StackPrototype.asMutable = asMutable;
StackPrototype['@@transducer/step'] = function (result, arr) {
  return result.unshift(arr);
};
StackPrototype['@@transducer/result'] = function (obj) {
  return obj.asImmutable();
};

function makeStack(size, head, ownerID, hash) {
  var map = Object.create(StackPrototype);
  map.size = size;
  map._head = head;
  map.__ownerID = ownerID;
  map.__hash = hash;
  map.__altered = false;
  return map;
}

var EMPTY_STACK;
function emptyStack() {
  return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
}

var IS_SET_SYMBOL = '@@__IMMUTABLE_SET__@@';

function isSet(maybeSet) {
  return Boolean(maybeSet && maybeSet[IS_SET_SYMBOL]);
}

function isOrderedSet(maybeOrderedSet) {
  return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
}

function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (
    !isCollection(b) ||
    (a.size !== undefined && b.size !== undefined && a.size !== b.size) ||
    (a.__hash !== undefined &&
      b.__hash !== undefined &&
      a.__hash !== b.__hash) ||
    isKeyed(a) !== isKeyed(b) ||
    isIndexed(a) !== isIndexed(b) ||
    isOrdered(a) !== isOrdered(b)
  ) {
    return false;
  }

  if (a.size === 0 && b.size === 0) {
    return true;
  }

  var notAssociative = !isAssociative(a);

  if (isOrdered(a)) {
    var entries = a.entries();
    return (
      b.every(function (v, k) {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done
    );
  }

  var flipped = false;

  if (a.size === undefined) {
    if (b.size === undefined) {
      if (typeof a.cacheResult === 'function') {
        a.cacheResult();
      }
    } else {
      flipped = true;
      var _ = a;
      a = b;
      b = _;
    }
  }

  var allEqual = true;
  var bSize = b.__iterate(function (v, k) {
    if (
      notAssociative
        ? !a.has(v)
        : flipped
        ? !is(v, a.get(k, NOT_SET))
        : !is(a.get(k, NOT_SET), v)
    ) {
      allEqual = false;
      return false;
    }
  });

  return allEqual && a.size === bSize;
}

function mixin(ctor, methods) {
  var keyCopier = function (key) {
    ctor.prototype[key] = methods[key];
  };
  Object.keys(methods).forEach(keyCopier);
  Object.getOwnPropertySymbols &&
    Object.getOwnPropertySymbols(methods).forEach(keyCopier);
  return ctor;
}

function toJS(value) {
  if (!value || typeof value !== 'object') {
    return value;
  }
  if (!isCollection(value)) {
    if (!isDataStructure(value)) {
      return value;
    }
    value = Seq(value);
  }
  if (isKeyed(value)) {
    var result$1 = {};
    value.__iterate(function (v, k) {
      result$1[k] = toJS(v);
    });
    return result$1;
  }
  var result = [];
  value.__iterate(function (v) {
    result.push(toJS(v));
  });
  return result;
}

var Set = /*@__PURE__*/(function (SetCollection) {
  function Set(value) {
    return value === null || value === undefined
      ? emptySet()
      : isSet(value) && !isOrdered(value)
      ? value
      : emptySet().withMutations(function (set) {
          var iter = SetCollection(value);
          assertNotInfinite(iter.size);
          iter.forEach(function (v) { return set.add(v); });
        });
  }

  if ( SetCollection ) Set.__proto__ = SetCollection;
  Set.prototype = Object.create( SetCollection && SetCollection.prototype );
  Set.prototype.constructor = Set;

  Set.of = function of (/*...values*/) {
    return this(arguments);
  };

  Set.fromKeys = function fromKeys (value) {
    return this(KeyedCollection(value).keySeq());
  };

  Set.intersect = function intersect (sets) {
    sets = Collection(sets).toArray();
    return sets.length
      ? SetPrototype.intersect.apply(Set(sets.pop()), sets)
      : emptySet();
  };

  Set.union = function union (sets) {
    sets = Collection(sets).toArray();
    return sets.length
      ? SetPrototype.union.apply(Set(sets.pop()), sets)
      : emptySet();
  };

  Set.prototype.toString = function toString () {
    return this.__toString('Set {', '}');
  };

  // @pragma Access

  Set.prototype.has = function has (value) {
    return this._map.has(value);
  };

  // @pragma Modification

  Set.prototype.add = function add (value) {
    return updateSet(this, this._map.set(value, value));
  };

  Set.prototype.remove = function remove (value) {
    return updateSet(this, this._map.remove(value));
  };

  Set.prototype.clear = function clear () {
    return updateSet(this, this._map.clear());
  };

  // @pragma Composition

  Set.prototype.map = function map (mapper, context) {
    var this$1$1 = this;

    // keep track if the set is altered by the map function
    var didChanges = false;

    var newMap = updateSet(
      this,
      this._map.mapEntries(function (ref) {
        var v = ref[1];

        var mapped = mapper.call(context, v, v, this$1$1);

        if (mapped !== v) {
          didChanges = true;
        }

        return [mapped, mapped];
      }, context)
    );

    return didChanges ? newMap : this;
  };

  Set.prototype.union = function union () {
    var iters = [], len = arguments.length;
    while ( len-- ) iters[ len ] = arguments[ len ];

    iters = iters.filter(function (x) { return x.size !== 0; });
    if (iters.length === 0) {
      return this;
    }
    if (this.size === 0 && !this.__ownerID && iters.length === 1) {
      return this.constructor(iters[0]);
    }
    return this.withMutations(function (set) {
      for (var ii = 0; ii < iters.length; ii++) {
        SetCollection(iters[ii]).forEach(function (value) { return set.add(value); });
      }
    });
  };

  Set.prototype.intersect = function intersect () {
    var iters = [], len = arguments.length;
    while ( len-- ) iters[ len ] = arguments[ len ];

    if (iters.length === 0) {
      return this;
    }
    iters = iters.map(function (iter) { return SetCollection(iter); });
    var toRemove = [];
    this.forEach(function (value) {
      if (!iters.every(function (iter) { return iter.includes(value); })) {
        toRemove.push(value);
      }
    });
    return this.withMutations(function (set) {
      toRemove.forEach(function (value) {
        set.remove(value);
      });
    });
  };

  Set.prototype.subtract = function subtract () {
    var iters = [], len = arguments.length;
    while ( len-- ) iters[ len ] = arguments[ len ];

    if (iters.length === 0) {
      return this;
    }
    iters = iters.map(function (iter) { return SetCollection(iter); });
    var toRemove = [];
    this.forEach(function (value) {
      if (iters.some(function (iter) { return iter.includes(value); })) {
        toRemove.push(value);
      }
    });
    return this.withMutations(function (set) {
      toRemove.forEach(function (value) {
        set.remove(value);
      });
    });
  };

  Set.prototype.sort = function sort (comparator) {
    // Late binding
    return OrderedSet(sortFactory(this, comparator));
  };

  Set.prototype.sortBy = function sortBy (mapper, comparator) {
    // Late binding
    return OrderedSet(sortFactory(this, comparator, mapper));
  };

  Set.prototype.wasAltered = function wasAltered () {
    return this._map.wasAltered();
  };

  Set.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1$1 = this;

    return this._map.__iterate(function (k) { return fn(k, k, this$1$1); }, reverse);
  };

  Set.prototype.__iterator = function __iterator (type, reverse) {
    return this._map.__iterator(type, reverse);
  };

  Set.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newMap = this._map.__ensureOwner(ownerID);
    if (!ownerID) {
      if (this.size === 0) {
        return this.__empty();
      }
      this.__ownerID = ownerID;
      this._map = newMap;
      return this;
    }
    return this.__make(newMap, ownerID);
  };

  return Set;
}(SetCollection));

Set.isSet = isSet;

var SetPrototype = Set.prototype;
SetPrototype[IS_SET_SYMBOL] = true;
SetPrototype[DELETE] = SetPrototype.remove;
SetPrototype.merge = SetPrototype.concat = SetPrototype.union;
SetPrototype.withMutations = withMutations;
SetPrototype.asImmutable = asImmutable;
SetPrototype['@@transducer/init'] = SetPrototype.asMutable = asMutable;
SetPrototype['@@transducer/step'] = function (result, arr) {
  return result.add(arr);
};
SetPrototype['@@transducer/result'] = function (obj) {
  return obj.asImmutable();
};

SetPrototype.__empty = emptySet;
SetPrototype.__make = makeSet;

function updateSet(set, newMap) {
  if (set.__ownerID) {
    set.size = newMap.size;
    set._map = newMap;
    return set;
  }
  return newMap === set._map
    ? set
    : newMap.size === 0
    ? set.__empty()
    : set.__make(newMap);
}

function makeSet(map, ownerID) {
  var set = Object.create(SetPrototype);
  set.size = map ? map.size : 0;
  set._map = map;
  set.__ownerID = ownerID;
  return set;
}

var EMPTY_SET;
function emptySet() {
  return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
}

/**
 * Returns a lazy seq of nums from start (inclusive) to end
 * (exclusive), by step, where start defaults to 0, step to 1, and end to
 * infinity. When start is equal to end, returns empty list.
 */
var Range = /*@__PURE__*/(function (IndexedSeq) {
  function Range(start, end, step) {
    if (!(this instanceof Range)) {
      return new Range(start, end, step);
    }
    invariant(step !== 0, 'Cannot step a Range by 0');
    start = start || 0;
    if (end === undefined) {
      end = Infinity;
    }
    step = step === undefined ? 1 : Math.abs(step);
    if (end < start) {
      step = -step;
    }
    this._start = start;
    this._end = end;
    this._step = step;
    this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
    if (this.size === 0) {
      if (EMPTY_RANGE) {
        return EMPTY_RANGE;
      }
      EMPTY_RANGE = this;
    }
  }

  if ( IndexedSeq ) Range.__proto__ = IndexedSeq;
  Range.prototype = Object.create( IndexedSeq && IndexedSeq.prototype );
  Range.prototype.constructor = Range;

  Range.prototype.toString = function toString () {
    if (this.size === 0) {
      return 'Range []';
    }
    return (
      'Range [ ' +
      this._start +
      '...' +
      this._end +
      (this._step !== 1 ? ' by ' + this._step : '') +
      ' ]'
    );
  };

  Range.prototype.get = function get (index, notSetValue) {
    return this.has(index)
      ? this._start + wrapIndex(this, index) * this._step
      : notSetValue;
  };

  Range.prototype.includes = function includes (searchValue) {
    var possibleIndex = (searchValue - this._start) / this._step;
    return (
      possibleIndex >= 0 &&
      possibleIndex < this.size &&
      possibleIndex === Math.floor(possibleIndex)
    );
  };

  Range.prototype.slice = function slice (begin, end) {
    if (wholeSlice(begin, end, this.size)) {
      return this;
    }
    begin = resolveBegin(begin, this.size);
    end = resolveEnd(end, this.size);
    if (end <= begin) {
      return new Range(0, 0);
    }
    return new Range(
      this.get(begin, this._end),
      this.get(end, this._end),
      this._step
    );
  };

  Range.prototype.indexOf = function indexOf (searchValue) {
    var offsetValue = searchValue - this._start;
    if (offsetValue % this._step === 0) {
      var index = offsetValue / this._step;
      if (index >= 0 && index < this.size) {
        return index;
      }
    }
    return -1;
  };

  Range.prototype.lastIndexOf = function lastIndexOf (searchValue) {
    return this.indexOf(searchValue);
  };

  Range.prototype.__iterate = function __iterate (fn, reverse) {
    var size = this.size;
    var step = this._step;
    var value = reverse ? this._start + (size - 1) * step : this._start;
    var i = 0;
    while (i !== size) {
      if (fn(value, reverse ? size - ++i : i++, this) === false) {
        break;
      }
      value += reverse ? -step : step;
    }
    return i;
  };

  Range.prototype.__iterator = function __iterator (type, reverse) {
    var size = this.size;
    var step = this._step;
    var value = reverse ? this._start + (size - 1) * step : this._start;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }
      var v = value;
      value += reverse ? -step : step;
      return iteratorValue(type, reverse ? size - ++i : i++, v);
    });
  };

  Range.prototype.equals = function equals (other) {
    return other instanceof Range
      ? this._start === other._start &&
          this._end === other._end &&
          this._step === other._step
      : deepEqual(this, other);
  };

  return Range;
}(IndexedSeq));

var EMPTY_RANGE;

function getIn$1(collection, searchKeyPath, notSetValue) {
  var keyPath = coerceKeyPath(searchKeyPath);
  var i = 0;
  while (i !== keyPath.length) {
    collection = get(collection, keyPath[i++], NOT_SET);
    if (collection === NOT_SET) {
      return notSetValue;
    }
  }
  return collection;
}

function getIn(searchKeyPath, notSetValue) {
  return getIn$1(this, searchKeyPath, notSetValue);
}

function hasIn$1(collection, keyPath) {
  return getIn$1(collection, keyPath, NOT_SET) !== NOT_SET;
}

function hasIn(searchKeyPath) {
  return hasIn$1(this, searchKeyPath);
}

function toObject() {
  assertNotInfinite(this.size);
  var object = {};
  this.__iterate(function (v, k) {
    object[k] = v;
  });
  return object;
}

// Note: all of these methods are deprecated.
Collection.isIterable = isCollection;
Collection.isKeyed = isKeyed;
Collection.isIndexed = isIndexed;
Collection.isAssociative = isAssociative;
Collection.isOrdered = isOrdered;

Collection.Iterator = Iterator;

mixin(Collection, {
  // ### Conversion to other types

  toArray: function toArray() {
    assertNotInfinite(this.size);
    var array = new Array(this.size || 0);
    var useTuples = isKeyed(this);
    var i = 0;
    this.__iterate(function (v, k) {
      // Keyed collections produce an array of tuples.
      array[i++] = useTuples ? [k, v] : v;
    });
    return array;
  },

  toIndexedSeq: function toIndexedSeq() {
    return new ToIndexedSequence(this);
  },

  toJS: function toJS$1() {
    return toJS(this);
  },

  toKeyedSeq: function toKeyedSeq() {
    return new ToKeyedSequence(this, true);
  },

  toMap: function toMap() {
    // Use Late Binding here to solve the circular dependency.
    return Map(this.toKeyedSeq());
  },

  toObject: toObject,

  toOrderedMap: function toOrderedMap() {
    // Use Late Binding here to solve the circular dependency.
    return OrderedMap(this.toKeyedSeq());
  },

  toOrderedSet: function toOrderedSet() {
    // Use Late Binding here to solve the circular dependency.
    return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
  },

  toSet: function toSet() {
    // Use Late Binding here to solve the circular dependency.
    return Set(isKeyed(this) ? this.valueSeq() : this);
  },

  toSetSeq: function toSetSeq() {
    return new ToSetSequence(this);
  },

  toSeq: function toSeq() {
    return isIndexed(this)
      ? this.toIndexedSeq()
      : isKeyed(this)
      ? this.toKeyedSeq()
      : this.toSetSeq();
  },

  toStack: function toStack() {
    // Use Late Binding here to solve the circular dependency.
    return Stack(isKeyed(this) ? this.valueSeq() : this);
  },

  toList: function toList() {
    // Use Late Binding here to solve the circular dependency.
    return List(isKeyed(this) ? this.valueSeq() : this);
  },

  // ### Common JavaScript methods and properties

  toString: function toString() {
    return '[Collection]';
  },

  __toString: function __toString(head, tail) {
    if (this.size === 0) {
      return head + tail;
    }
    return (
      head +
      ' ' +
      this.toSeq().map(this.__toStringMapper).join(', ') +
      ' ' +
      tail
    );
  },

  // ### ES6 Collection methods (ES6 Array and Map)

  concat: function concat() {
    var values = [], len = arguments.length;
    while ( len-- ) values[ len ] = arguments[ len ];

    return reify(this, concatFactory(this, values));
  },

  includes: function includes(searchValue) {
    return this.some(function (value) { return is(value, searchValue); });
  },

  entries: function entries() {
    return this.__iterator(ITERATE_ENTRIES);
  },

  every: function every(predicate, context) {
    assertNotInfinite(this.size);
    var returnValue = true;
    this.__iterate(function (v, k, c) {
      if (!predicate.call(context, v, k, c)) {
        returnValue = false;
        return false;
      }
    });
    return returnValue;
  },

  filter: function filter(predicate, context) {
    return reify(this, filterFactory(this, predicate, context, true));
  },

  find: function find(predicate, context, notSetValue) {
    var entry = this.findEntry(predicate, context);
    return entry ? entry[1] : notSetValue;
  },

  forEach: function forEach(sideEffect, context) {
    assertNotInfinite(this.size);
    return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
  },

  join: function join(separator) {
    assertNotInfinite(this.size);
    separator = separator !== undefined ? '' + separator : ',';
    var joined = '';
    var isFirst = true;
    this.__iterate(function (v) {
      isFirst ? (isFirst = false) : (joined += separator);
      joined += v !== null && v !== undefined ? v.toString() : '';
    });
    return joined;
  },

  keys: function keys() {
    return this.__iterator(ITERATE_KEYS);
  },

  map: function map(mapper, context) {
    return reify(this, mapFactory(this, mapper, context));
  },

  reduce: function reduce$1(reducer, initialReduction, context) {
    return reduce(
      this,
      reducer,
      initialReduction,
      context,
      arguments.length < 2,
      false
    );
  },

  reduceRight: function reduceRight(reducer, initialReduction, context) {
    return reduce(
      this,
      reducer,
      initialReduction,
      context,
      arguments.length < 2,
      true
    );
  },

  reverse: function reverse() {
    return reify(this, reverseFactory(this, true));
  },

  slice: function slice(begin, end) {
    return reify(this, sliceFactory(this, begin, end, true));
  },

  some: function some(predicate, context) {
    return !this.every(not(predicate), context);
  },

  sort: function sort(comparator) {
    return reify(this, sortFactory(this, comparator));
  },

  values: function values() {
    return this.__iterator(ITERATE_VALUES);
  },

  // ### More sequential methods

  butLast: function butLast() {
    return this.slice(0, -1);
  },

  isEmpty: function isEmpty() {
    return this.size !== undefined ? this.size === 0 : !this.some(function () { return true; });
  },

  count: function count(predicate, context) {
    return ensureSize(
      predicate ? this.toSeq().filter(predicate, context) : this
    );
  },

  countBy: function countBy(grouper, context) {
    return countByFactory(this, grouper, context);
  },

  equals: function equals(other) {
    return deepEqual(this, other);
  },

  entrySeq: function entrySeq() {
    var collection = this;
    if (collection._cache) {
      // We cache as an entries array, so we can just return the cache!
      return new ArraySeq(collection._cache);
    }
    var entriesSequence = collection.toSeq().map(entryMapper).toIndexedSeq();
    entriesSequence.fromEntrySeq = function () { return collection.toSeq(); };
    return entriesSequence;
  },

  filterNot: function filterNot(predicate, context) {
    return this.filter(not(predicate), context);
  },

  findEntry: function findEntry(predicate, context, notSetValue) {
    var found = notSetValue;
    this.__iterate(function (v, k, c) {
      if (predicate.call(context, v, k, c)) {
        found = [k, v];
        return false;
      }
    });
    return found;
  },

  findKey: function findKey(predicate, context) {
    var entry = this.findEntry(predicate, context);
    return entry && entry[0];
  },

  findLast: function findLast(predicate, context, notSetValue) {
    return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
  },

  findLastEntry: function findLastEntry(predicate, context, notSetValue) {
    return this.toKeyedSeq()
      .reverse()
      .findEntry(predicate, context, notSetValue);
  },

  findLastKey: function findLastKey(predicate, context) {
    return this.toKeyedSeq().reverse().findKey(predicate, context);
  },

  first: function first(notSetValue) {
    return this.find(returnTrue, null, notSetValue);
  },

  flatMap: function flatMap(mapper, context) {
    return reify(this, flatMapFactory(this, mapper, context));
  },

  flatten: function flatten(depth) {
    return reify(this, flattenFactory(this, depth, true));
  },

  fromEntrySeq: function fromEntrySeq() {
    return new FromEntriesSequence(this);
  },

  get: function get(searchKey, notSetValue) {
    return this.find(function (_, key) { return is(key, searchKey); }, undefined, notSetValue);
  },

  getIn: getIn,

  groupBy: function groupBy(grouper, context) {
    return groupByFactory(this, grouper, context);
  },

  has: function has(searchKey) {
    return this.get(searchKey, NOT_SET) !== NOT_SET;
  },

  hasIn: hasIn,

  isSubset: function isSubset(iter) {
    iter = typeof iter.includes === 'function' ? iter : Collection(iter);
    return this.every(function (value) { return iter.includes(value); });
  },

  isSuperset: function isSuperset(iter) {
    iter = typeof iter.isSubset === 'function' ? iter : Collection(iter);
    return iter.isSubset(this);
  },

  keyOf: function keyOf(searchValue) {
    return this.findKey(function (value) { return is(value, searchValue); });
  },

  keySeq: function keySeq() {
    return this.toSeq().map(keyMapper).toIndexedSeq();
  },

  last: function last(notSetValue) {
    return this.toSeq().reverse().first(notSetValue);
  },

  lastKeyOf: function lastKeyOf(searchValue) {
    return this.toKeyedSeq().reverse().keyOf(searchValue);
  },

  max: function max(comparator) {
    return maxFactory(this, comparator);
  },

  maxBy: function maxBy(mapper, comparator) {
    return maxFactory(this, comparator, mapper);
  },

  min: function min(comparator) {
    return maxFactory(
      this,
      comparator ? neg(comparator) : defaultNegComparator
    );
  },

  minBy: function minBy(mapper, comparator) {
    return maxFactory(
      this,
      comparator ? neg(comparator) : defaultNegComparator,
      mapper
    );
  },

  rest: function rest() {
    return this.slice(1);
  },

  skip: function skip(amount) {
    return amount === 0 ? this : this.slice(Math.max(0, amount));
  },

  skipLast: function skipLast(amount) {
    return amount === 0 ? this : this.slice(0, -Math.max(0, amount));
  },

  skipWhile: function skipWhile(predicate, context) {
    return reify(this, skipWhileFactory(this, predicate, context, true));
  },

  skipUntil: function skipUntil(predicate, context) {
    return this.skipWhile(not(predicate), context);
  },

  sortBy: function sortBy(mapper, comparator) {
    return reify(this, sortFactory(this, comparator, mapper));
  },

  take: function take(amount) {
    return this.slice(0, Math.max(0, amount));
  },

  takeLast: function takeLast(amount) {
    return this.slice(-Math.max(0, amount));
  },

  takeWhile: function takeWhile(predicate, context) {
    return reify(this, takeWhileFactory(this, predicate, context));
  },

  takeUntil: function takeUntil(predicate, context) {
    return this.takeWhile(not(predicate), context);
  },

  update: function update(fn) {
    return fn(this);
  },

  valueSeq: function valueSeq() {
    return this.toIndexedSeq();
  },

  // ### Hashable Object

  hashCode: function hashCode() {
    return this.__hash || (this.__hash = hashCollection(this));
  },

  // ### Internal

  // abstract __iterate(fn, reverse)

  // abstract __iterator(type, reverse)
});

var CollectionPrototype = Collection.prototype;
CollectionPrototype[IS_COLLECTION_SYMBOL] = true;
CollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.values;
CollectionPrototype.toJSON = CollectionPrototype.toArray;
CollectionPrototype.__toStringMapper = quoteString;
CollectionPrototype.inspect = CollectionPrototype.toSource = function () {
  return this.toString();
};
CollectionPrototype.chain = CollectionPrototype.flatMap;
CollectionPrototype.contains = CollectionPrototype.includes;

mixin(KeyedCollection, {
  // ### More sequential methods

  flip: function flip() {
    return reify(this, flipFactory(this));
  },

  mapEntries: function mapEntries(mapper, context) {
    var this$1$1 = this;

    var iterations = 0;
    return reify(
      this,
      this.toSeq()
        .map(function (v, k) { return mapper.call(context, [k, v], iterations++, this$1$1); })
        .fromEntrySeq()
    );
  },

  mapKeys: function mapKeys(mapper, context) {
    var this$1$1 = this;

    return reify(
      this,
      this.toSeq()
        .flip()
        .map(function (k, v) { return mapper.call(context, k, v, this$1$1); })
        .flip()
    );
  },
});

var KeyedCollectionPrototype = KeyedCollection.prototype;
KeyedCollectionPrototype[IS_KEYED_SYMBOL] = true;
KeyedCollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.entries;
KeyedCollectionPrototype.toJSON = toObject;
KeyedCollectionPrototype.__toStringMapper = function (v, k) { return quoteString(k) + ': ' + quoteString(v); };

mixin(IndexedCollection, {
  // ### Conversion to other types

  toKeyedSeq: function toKeyedSeq() {
    return new ToKeyedSequence(this, false);
  },

  // ### ES6 Collection methods (ES6 Array and Map)

  filter: function filter(predicate, context) {
    return reify(this, filterFactory(this, predicate, context, false));
  },

  findIndex: function findIndex(predicate, context) {
    var entry = this.findEntry(predicate, context);
    return entry ? entry[0] : -1;
  },

  indexOf: function indexOf(searchValue) {
    var key = this.keyOf(searchValue);
    return key === undefined ? -1 : key;
  },

  lastIndexOf: function lastIndexOf(searchValue) {
    var key = this.lastKeyOf(searchValue);
    return key === undefined ? -1 : key;
  },

  reverse: function reverse() {
    return reify(this, reverseFactory(this, false));
  },

  slice: function slice(begin, end) {
    return reify(this, sliceFactory(this, begin, end, false));
  },

  splice: function splice(index, removeNum /*, ...values*/) {
    var numArgs = arguments.length;
    removeNum = Math.max(removeNum || 0, 0);
    if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
      return this;
    }
    // If index is negative, it should resolve relative to the size of the
    // collection. However size may be expensive to compute if not cached, so
    // only call count() if the number is in fact negative.
    index = resolveBegin(index, index < 0 ? this.count() : this.size);
    var spliced = this.slice(0, index);
    return reify(
      this,
      numArgs === 1
        ? spliced
        : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
    );
  },

  // ### More collection methods

  findLastIndex: function findLastIndex(predicate, context) {
    var entry = this.findLastEntry(predicate, context);
    return entry ? entry[0] : -1;
  },

  first: function first(notSetValue) {
    return this.get(0, notSetValue);
  },

  flatten: function flatten(depth) {
    return reify(this, flattenFactory(this, depth, false));
  },

  get: function get(index, notSetValue) {
    index = wrapIndex(this, index);
    return index < 0 ||
      this.size === Infinity ||
      (this.size !== undefined && index > this.size)
      ? notSetValue
      : this.find(function (_, key) { return key === index; }, undefined, notSetValue);
  },

  has: function has(index) {
    index = wrapIndex(this, index);
    return (
      index >= 0 &&
      (this.size !== undefined
        ? this.size === Infinity || index < this.size
        : this.indexOf(index) !== -1)
    );
  },

  interpose: function interpose(separator) {
    return reify(this, interposeFactory(this, separator));
  },

  interleave: function interleave(/*...collections*/) {
    var collections = [this].concat(arrCopy(arguments));
    var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, collections);
    var interleaved = zipped.flatten(true);
    if (zipped.size) {
      interleaved.size = zipped.size * collections.length;
    }
    return reify(this, interleaved);
  },

  keySeq: function keySeq() {
    return Range(0, this.size);
  },

  last: function last(notSetValue) {
    return this.get(-1, notSetValue);
  },

  skipWhile: function skipWhile(predicate, context) {
    return reify(this, skipWhileFactory(this, predicate, context, false));
  },

  zip: function zip(/*, ...collections */) {
    var collections = [this].concat(arrCopy(arguments));
    return reify(this, zipWithFactory(this, defaultZipper, collections));
  },

  zipAll: function zipAll(/*, ...collections */) {
    var collections = [this].concat(arrCopy(arguments));
    return reify(this, zipWithFactory(this, defaultZipper, collections, true));
  },

  zipWith: function zipWith(zipper /*, ...collections */) {
    var collections = arrCopy(arguments);
    collections[0] = this;
    return reify(this, zipWithFactory(this, zipper, collections));
  },
});

var IndexedCollectionPrototype = IndexedCollection.prototype;
IndexedCollectionPrototype[IS_INDEXED_SYMBOL] = true;
IndexedCollectionPrototype[IS_ORDERED_SYMBOL] = true;

mixin(SetCollection, {
  // ### ES6 Collection methods (ES6 Array and Map)

  get: function get(value, notSetValue) {
    return this.has(value) ? value : notSetValue;
  },

  includes: function includes(value) {
    return this.has(value);
  },

  // ### More sequential methods

  keySeq: function keySeq() {
    return this.valueSeq();
  },
});

var SetCollectionPrototype = SetCollection.prototype;
SetCollectionPrototype.has = CollectionPrototype.includes;
SetCollectionPrototype.contains = SetCollectionPrototype.includes;
SetCollectionPrototype.keys = SetCollectionPrototype.values;

// Mixin subclasses

mixin(KeyedSeq, KeyedCollectionPrototype);
mixin(IndexedSeq, IndexedCollectionPrototype);
mixin(SetSeq, SetCollectionPrototype);

// #pragma Helper functions

function reduce(collection, reducer, reduction, context, useFirst, reverse) {
  assertNotInfinite(collection.size);
  collection.__iterate(function (v, k, c) {
    if (useFirst) {
      useFirst = false;
      reduction = v;
    } else {
      reduction = reducer.call(context, reduction, v, k, c);
    }
  }, reverse);
  return reduction;
}

function keyMapper(v, k) {
  return k;
}

function entryMapper(v, k) {
  return [k, v];
}

function not(predicate) {
  return function () {
    return !predicate.apply(this, arguments);
  };
}

function neg(predicate) {
  return function () {
    return -predicate.apply(this, arguments);
  };
}

function defaultZipper() {
  return arrCopy(arguments);
}

function defaultNegComparator(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
}

function hashCollection(collection) {
  if (collection.size === Infinity) {
    return 0;
  }
  var ordered = isOrdered(collection);
  var keyed = isKeyed(collection);
  var h = ordered ? 1 : 0;
  var size = collection.__iterate(
    keyed
      ? ordered
        ? function (v, k) {
            h = (31 * h + hashMerge(hash(v), hash(k))) | 0;
          }
        : function (v, k) {
            h = (h + hashMerge(hash(v), hash(k))) | 0;
          }
      : ordered
      ? function (v) {
          h = (31 * h + hash(v)) | 0;
        }
      : function (v) {
          h = (h + hash(v)) | 0;
        }
  );
  return murmurHashOfSize(size, h);
}

function murmurHashOfSize(size, h) {
  h = imul(h, 0xcc9e2d51);
  h = imul((h << 15) | (h >>> -15), 0x1b873593);
  h = imul((h << 13) | (h >>> -13), 5);
  h = ((h + 0xe6546b64) | 0) ^ size;
  h = imul(h ^ (h >>> 16), 0x85ebca6b);
  h = imul(h ^ (h >>> 13), 0xc2b2ae35);
  h = smi(h ^ (h >>> 16));
  return h;
}

function hashMerge(a, b) {
  return (a ^ (b + 0x9e3779b9 + (a << 6) + (a >> 2))) | 0; // int
}

var OrderedSet = /*@__PURE__*/(function (Set) {
  function OrderedSet(value) {
    return value === null || value === undefined
      ? emptyOrderedSet()
      : isOrderedSet(value)
      ? value
      : emptyOrderedSet().withMutations(function (set) {
          var iter = SetCollection(value);
          assertNotInfinite(iter.size);
          iter.forEach(function (v) { return set.add(v); });
        });
  }

  if ( Set ) OrderedSet.__proto__ = Set;
  OrderedSet.prototype = Object.create( Set && Set.prototype );
  OrderedSet.prototype.constructor = OrderedSet;

  OrderedSet.of = function of (/*...values*/) {
    return this(arguments);
  };

  OrderedSet.fromKeys = function fromKeys (value) {
    return this(KeyedCollection(value).keySeq());
  };

  OrderedSet.prototype.toString = function toString () {
    return this.__toString('OrderedSet {', '}');
  };

  return OrderedSet;
}(Set));

OrderedSet.isOrderedSet = isOrderedSet;

var OrderedSetPrototype = OrderedSet.prototype;
OrderedSetPrototype[IS_ORDERED_SYMBOL] = true;
OrderedSetPrototype.zip = IndexedCollectionPrototype.zip;
OrderedSetPrototype.zipWith = IndexedCollectionPrototype.zipWith;
OrderedSetPrototype.zipAll = IndexedCollectionPrototype.zipAll;

OrderedSetPrototype.__empty = emptyOrderedSet;
OrderedSetPrototype.__make = makeOrderedSet;

function makeOrderedSet(map, ownerID) {
  var set = Object.create(OrderedSetPrototype);
  set.size = map ? map.size : 0;
  set._map = map;
  set.__ownerID = ownerID;
  return set;
}

var EMPTY_ORDERED_SET;
function emptyOrderedSet() {
  return (
    EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()))
  );
}

function throwOnInvalidDefaultValues(defaultValues) {
  if (isRecord(defaultValues)) {
    throw new Error(
      'Can not call `Record` with an immutable Record as default values. Use a plain javascript object instead.'
    );
  }

  if (isImmutable(defaultValues)) {
    throw new Error(
      'Can not call `Record` with an immutable Collection as default values. Use a plain javascript object instead.'
    );
  }

  if (defaultValues === null || typeof defaultValues !== 'object') {
    throw new Error(
      'Can not call `Record` with a non-object as default values. Use a plain javascript object instead.'
    );
  }
}

var Record = function Record(defaultValues, name) {
  var hasInitialized;

  throwOnInvalidDefaultValues(defaultValues);

  var RecordType = function Record(values) {
    var this$1$1 = this;

    if (values instanceof RecordType) {
      return values;
    }
    if (!(this instanceof RecordType)) {
      return new RecordType(values);
    }
    if (!hasInitialized) {
      hasInitialized = true;
      var keys = Object.keys(defaultValues);
      var indices = (RecordTypePrototype._indices = {});
      // Deprecated: left to attempt not to break any external code which
      // relies on a ._name property existing on record instances.
      // Use Record.getDescriptiveName() instead
      RecordTypePrototype._name = name;
      RecordTypePrototype._keys = keys;
      RecordTypePrototype._defaultValues = defaultValues;
      for (var i = 0; i < keys.length; i++) {
        var propName = keys[i];
        indices[propName] = i;
        if (RecordTypePrototype[propName]) {
          /* eslint-disable no-console */
          typeof console === 'object' &&
            console.warn &&
            console.warn(
              'Cannot define ' +
                recordName(this) +
                ' with property "' +
                propName +
                '" since that property name is part of the Record API.'
            );
          /* eslint-enable no-console */
        } else {
          setProp(RecordTypePrototype, propName);
        }
      }
    }
    this.__ownerID = undefined;
    this._values = List().withMutations(function (l) {
      l.setSize(this$1$1._keys.length);
      KeyedCollection(values).forEach(function (v, k) {
        l.set(this$1$1._indices[k], v === this$1$1._defaultValues[k] ? undefined : v);
      });
    });
    return this;
  };

  var RecordTypePrototype = (RecordType.prototype =
    Object.create(RecordPrototype));
  RecordTypePrototype.constructor = RecordType;

  if (name) {
    RecordType.displayName = name;
  }

  return RecordType;
};

Record.prototype.toString = function toString () {
  var str = recordName(this) + ' { ';
  var keys = this._keys;
  var k;
  for (var i = 0, l = keys.length; i !== l; i++) {
    k = keys[i];
    str += (i ? ', ' : '') + k + ': ' + quoteString(this.get(k));
  }
  return str + ' }';
};

Record.prototype.equals = function equals (other) {
  return (
    this === other || (other && recordSeq(this).equals(recordSeq(other)))
  );
};

Record.prototype.hashCode = function hashCode () {
  return recordSeq(this).hashCode();
};

// @pragma Access

Record.prototype.has = function has (k) {
  return this._indices.hasOwnProperty(k);
};

Record.prototype.get = function get (k, notSetValue) {
  if (!this.has(k)) {
    return notSetValue;
  }
  var index = this._indices[k];
  var value = this._values.get(index);
  return value === undefined ? this._defaultValues[k] : value;
};

// @pragma Modification

Record.prototype.set = function set (k, v) {
  if (this.has(k)) {
    var newValues = this._values.set(
      this._indices[k],
      v === this._defaultValues[k] ? undefined : v
    );
    if (newValues !== this._values && !this.__ownerID) {
      return makeRecord(this, newValues);
    }
  }
  return this;
};

Record.prototype.remove = function remove (k) {
  return this.set(k);
};

Record.prototype.clear = function clear () {
  var newValues = this._values.clear().setSize(this._keys.length);

  return this.__ownerID ? this : makeRecord(this, newValues);
};

Record.prototype.wasAltered = function wasAltered () {
  return this._values.wasAltered();
};

Record.prototype.toSeq = function toSeq () {
  return recordSeq(this);
};

Record.prototype.toJS = function toJS$1 () {
  return toJS(this);
};

Record.prototype.entries = function entries () {
  return this.__iterator(ITERATE_ENTRIES);
};

Record.prototype.__iterator = function __iterator (type, reverse) {
  return recordSeq(this).__iterator(type, reverse);
};

Record.prototype.__iterate = function __iterate (fn, reverse) {
  return recordSeq(this).__iterate(fn, reverse);
};

Record.prototype.__ensureOwner = function __ensureOwner (ownerID) {
  if (ownerID === this.__ownerID) {
    return this;
  }
  var newValues = this._values.__ensureOwner(ownerID);
  if (!ownerID) {
    this.__ownerID = ownerID;
    this._values = newValues;
    return this;
  }
  return makeRecord(this, newValues, ownerID);
};

Record.isRecord = isRecord;
Record.getDescriptiveName = recordName;
var RecordPrototype = Record.prototype;
RecordPrototype[IS_RECORD_SYMBOL] = true;
RecordPrototype[DELETE] = RecordPrototype.remove;
RecordPrototype.deleteIn = RecordPrototype.removeIn = deleteIn;
RecordPrototype.getIn = getIn;
RecordPrototype.hasIn = CollectionPrototype.hasIn;
RecordPrototype.merge = merge$1;
RecordPrototype.mergeWith = mergeWith$1;
RecordPrototype.mergeIn = mergeIn;
RecordPrototype.mergeDeep = mergeDeep;
RecordPrototype.mergeDeepWith = mergeDeepWith;
RecordPrototype.mergeDeepIn = mergeDeepIn;
RecordPrototype.setIn = setIn;
RecordPrototype.update = update;
RecordPrototype.updateIn = updateIn;
RecordPrototype.withMutations = withMutations;
RecordPrototype.asMutable = asMutable;
RecordPrototype.asImmutable = asImmutable;
RecordPrototype[ITERATOR_SYMBOL] = RecordPrototype.entries;
RecordPrototype.toJSON = RecordPrototype.toObject =
  CollectionPrototype.toObject;
RecordPrototype.inspect = RecordPrototype.toSource = function () {
  return this.toString();
};

function makeRecord(likeRecord, values, ownerID) {
  var record = Object.create(Object.getPrototypeOf(likeRecord));
  record._values = values;
  record.__ownerID = ownerID;
  return record;
}

function recordName(record) {
  return record.constructor.displayName || record.constructor.name || 'Record';
}

function recordSeq(record) {
  return keyedSeqFromValue(record._keys.map(function (k) { return [k, record.get(k)]; }));
}

function setProp(prototype, name) {
  try {
    Object.defineProperty(prototype, name, {
      get: function () {
        return this.get(name);
      },
      set: function (value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      },
    });
  } catch (error) {
    // Object.defineProperty failed. Probably IE8.
  }
}

/**
 * Returns a lazy Seq of `value` repeated `times` times. When `times` is
 * undefined, returns an infinite sequence of `value`.
 */
var Repeat = /*@__PURE__*/(function (IndexedSeq) {
  function Repeat(value, times) {
    if (!(this instanceof Repeat)) {
      return new Repeat(value, times);
    }
    this._value = value;
    this.size = times === undefined ? Infinity : Math.max(0, times);
    if (this.size === 0) {
      if (EMPTY_REPEAT) {
        return EMPTY_REPEAT;
      }
      EMPTY_REPEAT = this;
    }
  }

  if ( IndexedSeq ) Repeat.__proto__ = IndexedSeq;
  Repeat.prototype = Object.create( IndexedSeq && IndexedSeq.prototype );
  Repeat.prototype.constructor = Repeat;

  Repeat.prototype.toString = function toString () {
    if (this.size === 0) {
      return 'Repeat []';
    }
    return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
  };

  Repeat.prototype.get = function get (index, notSetValue) {
    return this.has(index) ? this._value : notSetValue;
  };

  Repeat.prototype.includes = function includes (searchValue) {
    return is(this._value, searchValue);
  };

  Repeat.prototype.slice = function slice (begin, end) {
    var size = this.size;
    return wholeSlice(begin, end, size)
      ? this
      : new Repeat(
          this._value,
          resolveEnd(end, size) - resolveBegin(begin, size)
        );
  };

  Repeat.prototype.reverse = function reverse () {
    return this;
  };

  Repeat.prototype.indexOf = function indexOf (searchValue) {
    if (is(this._value, searchValue)) {
      return 0;
    }
    return -1;
  };

  Repeat.prototype.lastIndexOf = function lastIndexOf (searchValue) {
    if (is(this._value, searchValue)) {
      return this.size;
    }
    return -1;
  };

  Repeat.prototype.__iterate = function __iterate (fn, reverse) {
    var size = this.size;
    var i = 0;
    while (i !== size) {
      if (fn(this._value, reverse ? size - ++i : i++, this) === false) {
        break;
      }
    }
    return i;
  };

  Repeat.prototype.__iterator = function __iterator (type, reverse) {
    var this$1$1 = this;

    var size = this.size;
    var i = 0;
    return new Iterator(function () { return i === size
        ? iteratorDone()
        : iteratorValue(type, reverse ? size - ++i : i++, this$1$1._value); }
    );
  };

  Repeat.prototype.equals = function equals (other) {
    return other instanceof Repeat
      ? is(this._value, other._value)
      : deepEqual(other);
  };

  return Repeat;
}(IndexedSeq));

var EMPTY_REPEAT;

function fromJS(value, converter) {
  return fromJSWith(
    [],
    converter || defaultConverter,
    value,
    '',
    converter && converter.length > 2 ? [] : undefined,
    { '': value }
  );
}

function fromJSWith(stack, converter, value, key, keyPath, parentValue) {
  if (
    typeof value !== 'string' &&
    !isImmutable(value) &&
    (isArrayLike(value) || hasIterator(value) || isPlainObject(value))
  ) {
    if (~stack.indexOf(value)) {
      throw new TypeError('Cannot convert circular structure to Immutable');
    }
    stack.push(value);
    keyPath && key !== '' && keyPath.push(key);
    var converted = converter.call(
      parentValue,
      key,
      Seq(value).map(function (v, k) { return fromJSWith(stack, converter, v, k, keyPath, value); }
      ),
      keyPath && keyPath.slice()
    );
    stack.pop();
    keyPath && keyPath.pop();
    return converted;
  }
  return value;
}

function defaultConverter(k, v) {
  // Effectively the opposite of "Collection.toSeq()"
  return isIndexed(v) ? v.toList() : isKeyed(v) ? v.toMap() : v.toSet();
}

var version = "4.0.0";

var Immutable = {
  version: version,

  Collection: Collection,
  // Note: Iterable is deprecated
  Iterable: Collection,

  Seq: Seq,
  Map: Map,
  OrderedMap: OrderedMap,
  List: List,
  Stack: Stack,
  Set: Set,
  OrderedSet: OrderedSet,

  Record: Record,
  Range: Range,
  Repeat: Repeat,

  is: is,
  fromJS: fromJS,
  hash: hash,

  isImmutable: isImmutable,
  isCollection: isCollection,
  isKeyed: isKeyed,
  isIndexed: isIndexed,
  isAssociative: isAssociative,
  isOrdered: isOrdered,
  isValueObject: isValueObject,
  isPlainObject: isPlainObject,
  isSeq: isSeq,
  isList: isList,
  isMap: isMap,
  isOrderedMap: isOrderedMap,
  isStack: isStack,
  isSet: isSet,
  isOrderedSet: isOrderedSet,
  isRecord: isRecord,

  get: get,
  getIn: getIn$1,
  has: has,
  hasIn: hasIn$1,
  merge: merge,
  mergeDeep: mergeDeep$1,
  mergeWith: mergeWith,
  mergeDeepWith: mergeDeepWith$1,
  remove: remove,
  removeIn: removeIn,
  set: set,
  setIn: setIn$1,
  update: update$1,
  updateIn: updateIn$1,
};

// Note: Iterable is deprecated
var Iterable = Collection;

/* harmony default export */ __webpack_exports__["default"] = (Immutable);



/***/ }),

/***/ "./node_modules/memize/index.js":
/*!**************************************!*\
  !*** ./node_modules/memize/index.js ***!
  \**************************************/
/***/ (function(module) {

/**
 * Memize options object.
 *
 * @typedef MemizeOptions
 *
 * @property {number} [maxSize] Maximum size of the cache.
 */

/**
 * Internal cache entry.
 *
 * @typedef MemizeCacheNode
 *
 * @property {?MemizeCacheNode|undefined} [prev] Previous node.
 * @property {?MemizeCacheNode|undefined} [next] Next node.
 * @property {Array<*>}                   args   Function arguments for cache
 *                                               entry.
 * @property {*}                          val    Function result.
 */

/**
 * Properties of the enhanced function for controlling cache.
 *
 * @typedef MemizeMemoizedFunction
 *
 * @property {()=>void} clear Clear the cache.
 */

/**
 * Accepts a function to be memoized, and returns a new memoized function, with
 * optional options.
 *
 * @template {Function} F
 *
 * @param {F}             fn        Function to memoize.
 * @param {MemizeOptions} [options] Options object.
 *
 * @return {F & MemizeMemoizedFunction} Memoized function.
 */
function memize( fn, options ) {
	var size = 0;

	/** @type {?MemizeCacheNode|undefined} */
	var head;

	/** @type {?MemizeCacheNode|undefined} */
	var tail;

	options = options || {};

	function memoized( /* ...args */ ) {
		var node = head,
			len = arguments.length,
			args, i;

		searchCache: while ( node ) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if ( node.args.length !== arguments.length ) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for ( i = 0; i < len; i++ ) {
				if ( node.args[ i ] !== arguments[ i ] ) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== head ) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if ( node === tail ) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				/** @type {MemizeCacheNode} */ ( node.prev ).next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				/** @type {MemizeCacheNode} */ ( head ).prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply( null, args ),
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( head ) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if ( size === /** @type {MemizeOptions} */ ( options ).maxSize ) {
			tail = /** @type {MemizeCacheNode} */ ( tail ).prev;
			/** @type {MemizeCacheNode} */ ( tail ).next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function() {
		head = null;
		tail = null;
		size = 0;
	};

	if ( false ) {}

	// Ignore reason: There's not a clear solution to create an intersection of
	// the function with additional properties, where the goal is to retain the
	// function signature of the incoming argument and add control properties
	// on the return value.

	// @ts-ignore
	return memoized;
}

module.exports = memize;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/pluralize/pluralize.js":
/*!*********************************************!*\
  !*** ./node_modules/pluralize/pluralize.js ***!
  \*********************************************/
/***/ (function(module) {

/* global define */

(function (root, pluralize) {
  /* istanbul ignore else */
  if (true) {
    // Node.
    module.exports = pluralize();
  } else {}
})(this, function () {
  // Rule storage - pluralize and singularize need to be run sequentially,
  // while other rules can be optimized using an object for instant lookups.
  var pluralRules = [];
  var singularRules = [];
  var uncountables = {};
  var irregularPlurals = {};
  var irregularSingles = {};

  /**
   * Sanitize a pluralization rule to a usable regular expression.
   *
   * @param  {(RegExp|string)} rule
   * @return {RegExp}
   */
  function sanitizeRule (rule) {
    if (typeof rule === 'string') {
      return new RegExp('^' + rule + '$', 'i');
    }

    return rule;
  }

  /**
   * Pass in a word token to produce a function that can replicate the case on
   * another word.
   *
   * @param  {string}   word
   * @param  {string}   token
   * @return {Function}
   */
  function restoreCase (word, token) {
    // Tokens are an exact match.
    if (word === token) return token;

    // Lower cased words. E.g. "hello".
    if (word === word.toLowerCase()) return token.toLowerCase();

    // Upper cased words. E.g. "WHISKY".
    if (word === word.toUpperCase()) return token.toUpperCase();

    // Title cased words. E.g. "Title".
    if (word[0] === word[0].toUpperCase()) {
      return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
    }

    // Lower cased words. E.g. "test".
    return token.toLowerCase();
  }

  /**
   * Interpolate a regexp string.
   *
   * @param  {string} str
   * @param  {Array}  args
   * @return {string}
   */
  function interpolate (str, args) {
    return str.replace(/\$(\d{1,2})/g, function (match, index) {
      return args[index] || '';
    });
  }

  /**
   * Replace a word using a rule.
   *
   * @param  {string} word
   * @param  {Array}  rule
   * @return {string}
   */
  function replace (word, rule) {
    return word.replace(rule[0], function (match, index) {
      var result = interpolate(rule[1], arguments);

      if (match === '') {
        return restoreCase(word[index - 1], result);
      }

      return restoreCase(match, result);
    });
  }

  /**
   * Sanitize a word by passing in the word and sanitization rules.
   *
   * @param  {string}   token
   * @param  {string}   word
   * @param  {Array}    rules
   * @return {string}
   */
  function sanitizeWord (token, word, rules) {
    // Empty string or doesn't need fixing.
    if (!token.length || uncountables.hasOwnProperty(token)) {
      return word;
    }

    var len = rules.length;

    // Iterate over the sanitization rules and use the first one to match.
    while (len--) {
      var rule = rules[len];

      if (rule[0].test(word)) return replace(word, rule);
    }

    return word;
  }

  /**
   * Replace a word with the updated word.
   *
   * @param  {Object}   replaceMap
   * @param  {Object}   keepMap
   * @param  {Array}    rules
   * @return {Function}
   */
  function replaceWord (replaceMap, keepMap, rules) {
    return function (word) {
      // Get the correct token and case restoration functions.
      var token = word.toLowerCase();

      // Check against the keep object map.
      if (keepMap.hasOwnProperty(token)) {
        return restoreCase(word, token);
      }

      // Check against the replacement map for a direct word replacement.
      if (replaceMap.hasOwnProperty(token)) {
        return restoreCase(word, replaceMap[token]);
      }

      // Run all the rules against the word.
      return sanitizeWord(token, word, rules);
    };
  }

  /**
   * Check if a word is part of the map.
   */
  function checkWord (replaceMap, keepMap, rules, bool) {
    return function (word) {
      var token = word.toLowerCase();

      if (keepMap.hasOwnProperty(token)) return true;
      if (replaceMap.hasOwnProperty(token)) return false;

      return sanitizeWord(token, token, rules) === token;
    };
  }

  /**
   * Pluralize or singularize a word based on the passed in count.
   *
   * @param  {string}  word      The word to pluralize
   * @param  {number}  count     How many of the word exist
   * @param  {boolean} inclusive Whether to prefix with the number (e.g. 3 ducks)
   * @return {string}
   */
  function pluralize (word, count, inclusive) {
    var pluralized = count === 1
      ? pluralize.singular(word) : pluralize.plural(word);

    return (inclusive ? count + ' ' : '') + pluralized;
  }

  /**
   * Pluralize a word.
   *
   * @type {Function}
   */
  pluralize.plural = replaceWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Check if a word is plural.
   *
   * @type {Function}
   */
  pluralize.isPlural = checkWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Singularize a word.
   *
   * @type {Function}
   */
  pluralize.singular = replaceWord(
    irregularPlurals, irregularSingles, singularRules
  );

  /**
   * Check if a word is singular.
   *
   * @type {Function}
   */
  pluralize.isSingular = checkWord(
    irregularPlurals, irregularSingles, singularRules
  );

  /**
   * Add a pluralization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addPluralRule = function (rule, replacement) {
    pluralRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add a singularization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addSingularRule = function (rule, replacement) {
    singularRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add an uncountable word rule.
   *
   * @param {(string|RegExp)} word
   */
  pluralize.addUncountableRule = function (word) {
    if (typeof word === 'string') {
      uncountables[word.toLowerCase()] = true;
      return;
    }

    // Set singular and plural references for the word.
    pluralize.addPluralRule(word, '$0');
    pluralize.addSingularRule(word, '$0');
  };

  /**
   * Add an irregular word definition.
   *
   * @param {string} single
   * @param {string} plural
   */
  pluralize.addIrregularRule = function (single, plural) {
    plural = plural.toLowerCase();
    single = single.toLowerCase();

    irregularSingles[single] = plural;
    irregularPlurals[plural] = single;
  };

  /**
   * Irregular rules.
   */
  [
    // Pronouns.
    ['I', 'we'],
    ['me', 'us'],
    ['he', 'they'],
    ['she', 'they'],
    ['them', 'them'],
    ['myself', 'ourselves'],
    ['yourself', 'yourselves'],
    ['itself', 'themselves'],
    ['herself', 'themselves'],
    ['himself', 'themselves'],
    ['themself', 'themselves'],
    ['is', 'are'],
    ['was', 'were'],
    ['has', 'have'],
    ['this', 'these'],
    ['that', 'those'],
    // Words ending in with a consonant and `o`.
    ['echo', 'echoes'],
    ['dingo', 'dingoes'],
    ['volcano', 'volcanoes'],
    ['tornado', 'tornadoes'],
    ['torpedo', 'torpedoes'],
    // Ends with `us`.
    ['genus', 'genera'],
    ['viscus', 'viscera'],
    // Ends with `ma`.
    ['stigma', 'stigmata'],
    ['stoma', 'stomata'],
    ['dogma', 'dogmata'],
    ['lemma', 'lemmata'],
    ['schema', 'schemata'],
    ['anathema', 'anathemata'],
    // Other irregular rules.
    ['ox', 'oxen'],
    ['axe', 'axes'],
    ['die', 'dice'],
    ['yes', 'yeses'],
    ['foot', 'feet'],
    ['eave', 'eaves'],
    ['goose', 'geese'],
    ['tooth', 'teeth'],
    ['quiz', 'quizzes'],
    ['human', 'humans'],
    ['proof', 'proofs'],
    ['carve', 'carves'],
    ['valve', 'valves'],
    ['looey', 'looies'],
    ['thief', 'thieves'],
    ['groove', 'grooves'],
    ['pickaxe', 'pickaxes'],
    ['passerby', 'passersby']
  ].forEach(function (rule) {
    return pluralize.addIrregularRule(rule[0], rule[1]);
  });

  /**
   * Pluralization rules.
   */
  [
    [/s?$/i, 's'],
    [/[^\u0000-\u007F]$/i, '$0'],
    [/([^aeiou]ese)$/i, '$1'],
    [/(ax|test)is$/i, '$1es'],
    [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, '$1es'],
    [/(e[mn]u)s?$/i, '$1s'],
    [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, '$1'],
    [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],
    [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
    [/(seraph|cherub)(?:im)?$/i, '$1im'],
    [/(her|at|gr)o$/i, '$1oes'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'],
    [/sis$/i, 'ses'],
    [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
    [/([^aeiouy]|qu)y$/i, '$1ies'],
    [/([^ch][ieo][ln])ey$/i, '$1ies'],
    [/(x|ch|ss|sh|zz)$/i, '$1es'],
    [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
    [/\b((?:tit)?m|l)(?:ice|ouse)$/i, '$1ice'],
    [/(pe)(?:rson|ople)$/i, '$1ople'],
    [/(child)(?:ren)?$/i, '$1ren'],
    [/eaux$/i, '$0'],
    [/m[ae]n$/i, 'men'],
    ['thou', 'you']
  ].forEach(function (rule) {
    return pluralize.addPluralRule(rule[0], rule[1]);
  });

  /**
   * Singularization rules.
   */
  [
    [/s$/i, ''],
    [/(ss)$/i, '$1'],
    [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
    [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
    [/ies$/i, 'y'],
    [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, '$1ie'],
    [/\b(mon|smil)ies$/i, '$1ey'],
    [/\b((?:tit)?m|l)ice$/i, '$1ouse'],
    [/(seraph|cherub)im$/i, '$1'],
    [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, '$1'],
    [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, '$1sis'],
    [/(movie|twelve|abuse|e[mn]u)s$/i, '$1'],
    [/(test)(?:is|es)$/i, '$1is'],
    [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'],
    [/(alumn|alg|vertebr)ae$/i, '$1a'],
    [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
    [/(matr|append)ices$/i, '$1ix'],
    [/(pe)(rson|ople)$/i, '$1rson'],
    [/(child)ren$/i, '$1'],
    [/(eau)x?$/i, '$1'],
    [/men$/i, 'man']
  ].forEach(function (rule) {
    return pluralize.addSingularRule(rule[0], rule[1]);
  });

  /**
   * Uncountable rules.
   */
  [
    // Singular words with no plurals.
    'adulthood',
    'advice',
    'agenda',
    'aid',
    'aircraft',
    'alcohol',
    'ammo',
    'analytics',
    'anime',
    'athletics',
    'audio',
    'bison',
    'blood',
    'bream',
    'buffalo',
    'butter',
    'carp',
    'cash',
    'chassis',
    'chess',
    'clothing',
    'cod',
    'commerce',
    'cooperation',
    'corps',
    'debris',
    'diabetes',
    'digestion',
    'elk',
    'energy',
    'equipment',
    'excretion',
    'expertise',
    'firmware',
    'flounder',
    'fun',
    'gallows',
    'garbage',
    'graffiti',
    'hardware',
    'headquarters',
    'health',
    'herpes',
    'highjinks',
    'homework',
    'housework',
    'information',
    'jeans',
    'justice',
    'kudos',
    'labour',
    'literature',
    'machinery',
    'mackerel',
    'mail',
    'media',
    'mews',
    'moose',
    'music',
    'mud',
    'manga',
    'news',
    'only',
    'personnel',
    'pike',
    'plankton',
    'pliers',
    'police',
    'pollution',
    'premises',
    'rain',
    'research',
    'rice',
    'salmon',
    'scissors',
    'series',
    'sewage',
    'shambles',
    'shrimp',
    'software',
    'species',
    'staff',
    'swine',
    'tennis',
    'traffic',
    'transportation',
    'trout',
    'tuna',
    'wealth',
    'welfare',
    'whiting',
    'wildebeest',
    'wildlife',
    'you',
    /pok[eé]mon$/i,
    // Regexes.
    /[^aeiou]ese$/i, // "chinese", "japanese"
    /deer$/i, // "deer", "reindeer"
    /fish$/i, // "fish", "blowfish", "angelfish"
    /measles$/i,
    /o[iu]s$/i, // "carnivorous"
    /pox$/i, // "chickpox", "smallpox"
    /sheep$/i
  ].forEach(pluralize.addUncountableRule);

  return pluralize;
});


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@eventespresso/helpers":
/*!***********************************!*\
  !*** external ["eejs","helpers"] ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = window["eejs"]["helpers"];

/***/ }),

/***/ "@eventespresso/i18n":
/*!********************************!*\
  !*** external ["eejs","i18n"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["eejs"]["i18n"];

/***/ }),

/***/ "@eventespresso/model":
/*!*********************************!*\
  !*** external ["eejs","model"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["eejs"]["model"];

/***/ }),

/***/ "@eventespresso/validators":
/*!**************************************!*\
  !*** external ["eejs","validators"] ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = window["eejs"]["validators"];

/***/ }),

/***/ "@eventespresso/value-objects":
/*!****************************************!*\
  !*** external ["eejs","valueObjects"] ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = window["eejs"]["valueObjects"];

/***/ }),

/***/ "cuid":
/*!*****************************************!*\
  !*** external ["eejs","vendor","cuid"] ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = window["eejs"]["vendor"]["cuid"];

/***/ }),

/***/ "moment-timezone":
/*!*******************************************!*\
  !*** external ["eejs","vendor","moment"] ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = window["eejs"]["vendor"]["moment"];

/***/ }),

/***/ "@eventespresso/eejs":
/*!*************************!*\
  !*** external ["eejs"] ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["eejs"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/is-shallow-equal":
/*!****************************************!*\
  !*** external ["wp","isShallowEqual"] ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["isShallowEqual"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["url"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/rememo/es/rememo.js":
/*!******************************************!*\
  !*** ./node_modules/rememo/es/rememo.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });


/** @typedef {(...args: any[]) => *[]} GetDependants */

/** @typedef {() => void} Clear */

/**
 * @typedef {{
 *   getDependants: GetDependants,
 *   clear: Clear
 * }} EnhancedSelector
 */

/**
 * Internal cache entry.
 *
 * @typedef CacheNode
 *
 * @property {?CacheNode|undefined} [prev] Previous node.
 * @property {?CacheNode|undefined} [next] Next node.
 * @property {*[]} args Function arguments for cache entry.
 * @property {*} val Function result.
 */

/**
 * @typedef Cache
 *
 * @property {Clear} clear Function to clear cache.
 * @property {boolean} [isUniqueByDependants] Whether dependants are valid in
 * considering cache uniqueness. A cache is unique if dependents are all arrays
 * or objects.
 * @property {CacheNode?} [head] Cache head.
 * @property {*[]} [lastDependants] Dependants from previous invocation.
 */

/**
 * Arbitrary value used as key for referencing cache object in WeakMap tree.
 *
 * @type {{}}
 */
var LEAF_KEY = {};

/**
 * Returns the first argument as the sole entry in an array.
 *
 * @template T
 *
 * @param {T} value Value to return.
 *
 * @return {[T]} Value returned as entry in array.
 */
function arrayOf(value) {
	return [value];
}

/**
 * Returns true if the value passed is object-like, or false otherwise. A value
 * is object-like if it can support property assignment, e.g. object or array.
 *
 * @param {*} value Value to test.
 *
 * @return {boolean} Whether value is object-like.
 */
function isObjectLike(value) {
	return !!value && 'object' === typeof value;
}

/**
 * Creates and returns a new cache object.
 *
 * @return {Cache} Cache object.
 */
function createCache() {
	/** @type {Cache} */
	var cache = {
		clear: function () {
			cache.head = null;
		},
	};

	return cache;
}

/**
 * Returns true if entries within the two arrays are strictly equal by
 * reference from a starting index.
 *
 * @param {*[]} a First array.
 * @param {*[]} b Second array.
 * @param {number} fromIndex Index from which to start comparison.
 *
 * @return {boolean} Whether arrays are shallowly equal.
 */
function isShallowEqual(a, b, fromIndex) {
	var i;

	if (a.length !== b.length) {
		return false;
	}

	for (i = fromIndex; i < a.length; i++) {
		if (a[i] !== b[i]) {
			return false;
		}
	}

	return true;
}

/**
 * Returns a memoized selector function. The getDependants function argument is
 * called before the memoized selector and is expected to return an immutable
 * reference or array of references on which the selector depends for computing
 * its own return value. The memoize cache is preserved only as long as those
 * dependant references remain the same. If getDependants returns a different
 * reference(s), the cache is cleared and the selector value regenerated.
 *
 * @template {(...args: *[]) => *} S
 *
 * @param {S} selector Selector function.
 * @param {GetDependants=} getDependants Dependant getter returning an array of
 * references used in cache bust consideration.
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector, getDependants) {
	/** @type {WeakMap<*,*>} */
	var rootCache;

	/** @type {GetDependants} */
	var normalizedGetDependants = getDependants ? getDependants : arrayOf;

	/**
	 * Returns the cache for a given dependants array. When possible, a WeakMap
	 * will be used to create a unique cache for each set of dependants. This
	 * is feasible due to the nature of WeakMap in allowing garbage collection
	 * to occur on entries where the key object is no longer referenced. Since
	 * WeakMap requires the key to be an object, this is only possible when the
	 * dependant is object-like. The root cache is created as a hierarchy where
	 * each top-level key is the first entry in a dependants set, the value a
	 * WeakMap where each key is the next dependant, and so on. This continues
	 * so long as the dependants are object-like. If no dependants are object-
	 * like, then the cache is shared across all invocations.
	 *
	 * @see isObjectLike
	 *
	 * @param {*[]} dependants Selector dependants.
	 *
	 * @return {Cache} Cache object.
	 */
	function getCache(dependants) {
		var caches = rootCache,
			isUniqueByDependants = true,
			i,
			dependant,
			map,
			cache;

		for (i = 0; i < dependants.length; i++) {
			dependant = dependants[i];

			// Can only compose WeakMap from object-like key.
			if (!isObjectLike(dependant)) {
				isUniqueByDependants = false;
				break;
			}

			// Does current segment of cache already have a WeakMap?
			if (caches.has(dependant)) {
				// Traverse into nested WeakMap.
				caches = caches.get(dependant);
			} else {
				// Create, set, and traverse into a new one.
				map = new WeakMap();
				caches.set(dependant, map);
				caches = map;
			}
		}

		// We use an arbitrary (but consistent) object as key for the last item
		// in the WeakMap to serve as our running cache.
		if (!caches.has(LEAF_KEY)) {
			cache = createCache();
			cache.isUniqueByDependants = isUniqueByDependants;
			caches.set(LEAF_KEY, cache);
		}

		return caches.get(LEAF_KEY);
	}

	/**
	 * Resets root memoization cache.
	 */
	function clear() {
		rootCache = new WeakMap();
	}

	/* eslint-disable jsdoc/check-param-names */
	/**
	 * The augmented selector call, considering first whether dependants have
	 * changed before passing it to underlying memoize function.
	 *
	 * @param {*}    source    Source object for derivation.
	 * @param {...*} extraArgs Additional arguments to pass to selector.
	 *
	 * @return {*} Selector result.
	 */
	/* eslint-enable jsdoc/check-param-names */
	function callSelector(/* source, ...extraArgs */) {
		var len = arguments.length,
			cache,
			node,
			i,
			args,
			dependants;

		// Create copy of arguments (avoid leaking deoptimization).
		args = new Array(len);
		for (i = 0; i < len; i++) {
			args[i] = arguments[i];
		}

		dependants = normalizedGetDependants.apply(null, args);
		cache = getCache(dependants);

		// If not guaranteed uniqueness by dependants (primitive type), shallow
		// compare against last dependants and, if references have changed,
		// destroy cache to recalculate result.
		if (!cache.isUniqueByDependants) {
			if (
				cache.lastDependants &&
				!isShallowEqual(dependants, cache.lastDependants, 0)
			) {
				cache.clear();
			}

			cache.lastDependants = dependants;
		}

		node = cache.head;
		while (node) {
			// Check whether node arguments match arguments
			if (!isShallowEqual(node.args, args, 1)) {
				node = node.next;
				continue;
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if (node !== cache.head) {
				// Adjust siblings to point to each other.
				/** @type {CacheNode} */ (node.prev).next = node.next;
				if (node.next) {
					node.next.prev = node.prev;
				}

				node.next = cache.head;
				node.prev = null;
				/** @type {CacheNode} */ (cache.head).prev = node;
				cache.head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		node = /** @type {CacheNode} */ ({
			// Generate the result from original function
			val: selector.apply(null, args),
		});

		// Avoid including the source object in the cache.
		args[0] = null;
		node.args = args;

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if (cache.head) {
			cache.head.prev = node;
			node.next = cache.head;
		}

		cache.head = node;

		return node.val;
	}

	callSelector.getDependants = normalizedGetDependants;
	callSelector.clear = clear;
	clear();

	return /** @type {S & EnhancedSelector} */ (callSelector);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************************!*\
  !*** ./assets/src/data/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventespresso_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventespresso/schema */ "./assets/src/data/eventespresso/schema/index.js");
/* harmony import */ var _eventespresso_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventespresso/core */ "./assets/src/data/eventespresso/core/index.js");
/* harmony import */ var _eventespresso_lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventespresso/lists */ "./assets/src/data/eventespresso/lists/index.js");
/**
 * Register stores
 */



}();
/******/ })()
;