import RayDragable from 'ray-dragable';

class DragableDecorator {
  /**
   *
   * @param {any} componentBackingInstance
   * @param {object} options
   *  {
   *    handle: '.class' // Restricts dragable start click/touch to the specified element
   *  }
   * @static
   *
   * @memberOf DragableDecorator
   */
  static dragableContainersDecorator = (componentBackingInstance, options) => {
    // check if backing instance not null
    if (componentBackingInstance) {
      RayDragable.create(componentBackingInstance, options);
    }
  };

  /**
   * @param {any} componentBackingInstance
   * @param {object} options
   *   {
   *     draggable: 'div', // Specifies which items inside the element should be dragable
   *     group: 'shared'
   *   };
   *
   * @static
   *
   * @memberOf DragableDecorator
   */
  static dragableGroupDecorator = (componentBackingInstance, options) => {
    // check if backing instance not null
    if (componentBackingInstance) {
      RayDragable.create(componentBackingInstance, options);
    }
  };
}

export default DragableDecorator;
