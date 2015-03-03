export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'ember-dom-stats',
  initialize: function() {
    var container = document.createElement( 'div' );
    container.id = 'dom-stats';
    container.style.cssText = 'width:80px;height:48px;opacity:0.9;cursor:pointer;overflow:hidden;z-index:10000;will-change:transform;';

    container.style.position = 'fixed';
    container.style.right = '170px';
    container.style.bottom = '0px';
    container.style['z-index'] = '9999';

    var dsDiv = document.createElement( 'div' );
    dsDiv.id = 'dsDiv';
    dsDiv.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#020;';
    container.appendChild( dsDiv );

    var dsText = document.createElement( 'div' );
    dsText.id = 'dsText';
    dsText.style.cssText = 'color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px';
    dsText.innerHTML = 'DOM COUNT';
    dsDiv.appendChild( dsText );

    var dsCount = document.createElement( 'div' );
    dsCount.id = 'dsCount';
    dsCount.style.cssText = 'position:relative;width:74px;height:20px;color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:15px;font-weight:bold;text-align:left;';
    dsCount.innerHTML = '0';
    dsDiv.appendChild( dsCount );

    var dsDelta = document.createElement( 'div' );
    dsDelta.id = 'dsDelta';
    dsDelta.style.cssText = 'position:relative;width:74px;height:10px;color:#fff;font-family:Helvetica,Arial,sans-serif;font-size:10px;font-weight:bold;text-align:top;';
    dsDelta.innerHTML = '';
    dsDiv.appendChild( dsDelta );

    document.body.appendChild(container);

    var previousCount = 0;
    var deltaVal = '';

    if (typeof requestAnimationFrame === 'function') {
      requestAnimationFrame(function rAFloop(){
        var count = parseFloat($("*").length);

        if (count - previousCount != 0) {
          var delta = count - previousCount;
          if (delta > 0) {
            deltaVal = '+' + delta;
          } else {
            deltaVal = delta;
          }
        }

        dsCount.textContent = count.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + ",");
        dsDelta.textContent = deltaVal;
        previousCount = count;

        requestAnimationFrame(rAFloop);
      });
    }
  }
};
