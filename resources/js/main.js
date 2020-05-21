$( document ).ready(() => {

  // Element Color Key

  // Toggles entire table styles (big button above key)
  $('.clear-table-styles-btn').on('click', event => {
    $('.alkali-metal').toggleClass('grayed-out');
    $('.alkaline-earth').toggleClass('grayed-out');
    $('.transition-metal').toggleClass('grayed-out');
    $('.other-metal').toggleClass('grayed-out');
    $('.semi-metal').toggleClass('grayed-out');
    $('.non-metal').toggleClass('grayed-out');
    $('.halogen').toggleClass('grayed-out');
    $('.noble-gas').toggleClass('grayed-out');
    // $('.lanthanide').toggleClass('lanthanide-on');
    // $('.actinide').toggleClass('actinide-on');
  });

  // Toggles individual element group colors
  $('.b-one').on('click', event => {
    $('.alkali-metal').toggleClass('grayed-out');
  });
  $('.b-two').on('click', event => {
    $('.alkaline-earth').toggleClass('grayed-out');
  });
  $('.b-three').on('click', event => {
    $('.transition-metal').toggleClass('grayed-out');
  });
  $('.b-four').on('click', event => {
    $('.other-metal').toggleClass('grayed-out');
  });
  $('.b-five').on('click', event => {
    $('.semi-metal').toggleClass('grayed-out');
  });
  $('.b-six').on('click', event => {
    $('.non-metal').toggleClass('grayed-out');
  });
  $('.b-seven').on('click', event => {
    $('.halogen').toggleClass('grayed-out');
  });
  $('.b-eight').on('click', event => {
    $('.noble-gas').toggleClass('grayed-out');
  });
  $('.b-nine').on('click', event => {
    $('.lanthanide').toggleClass('lanthanide-on');
  });
  $('.b-ten').on('click', event => {
    $('.actinide').toggleClass('actinide-on');
  });

  // ELEMENT INFO

  // Toggles Atomic Number
  $('#atomic-number').on('click', event => {
    $('.atomic-num').toggle();
    $('#atomic-number').toggleClass('option-select');
  });

  // Toggles Chemical Symbol
  $('#chemical-symbol').on('click', event => {
    $('.element-container > h1').toggle();
    $('#chemical-symbol').toggleClass('option-select');
  });

  // Toggles Element Name
  $('#element-name').on('click', event => {
    $('.element-container > h2').toggle();
    $('#element-name').toggleClass('option-select');
  });

  // Toggles Atomic Mass
  $('#atomic-mass').on('click', event => {
    $('.element-container > h4').toggle();
    $('#atomic-mass').toggleClass('option-select');
  });

  // Toggles Group Number
  $('#group-number').on('click', event => {
    $('.group-number').toggle();
    $('#group-number').toggleClass('option-select');
  });

  // Toggles Test Mode
  $('#test-mode').on('click', event => {
    $('.element-container').toggleClass('test-mode');
    $('.element-color-key-container').toggle();
    $('#test-mode').toggleClass('option-test-select');
  });

  // mouseover =======================================================

  // Shows hover-info class for the particular element moused over
  $('.element-container').mouseover(function(e) {
    var target = $(e.target);
    // var elementId = target.attr('id');
    if (target.is('#h')) {
      document.getElementById('h-hover').style.visibility='visible';
    }
    if (target.is('#he')) {
      document.getElementById('he-hover').style.visibility='visible';
    }
    if (target.is('#li')) {
      document.getElementById('li-hover').style.visibility='visible';
    }
    if (target.is('#be')) {
      document.getElementById('be-hover').style.visibility='visible';
    }
    if (target.is('#b')) {
      document.getElementById('b-hover').style.visibility='visible';
    }
    if (target.is('#c')) {
      document.getElementById('c-hover').style.visibility='visible';
    }
    if (target.is('#n')) {
      document.getElementById('n-hover').style.visibility='visible';
    }
    if (target.is('#o')) {
      document.getElementById('o-hover').style.visibility='visible';
    }
    if (target.is('#f')) {
      document.getElementById('f-hover').style.visibility='visible';
    }
    if (target.is('#ne')) {
      document.getElementById('ne-hover').style.visibility='visible';
    }
    if (target.is('#na')) {
      document.getElementById('na-hover').style.visibility='visible';
    }
    if (target.is('#mg')) {
      document.getElementById('mg-hover').style.visibility='visible';
    }
    if (target.is('#al')) {
      document.getElementById('al-hover').style.visibility='visible';
    }
    if (target.is('#si')) {
      document.getElementById('si-hover').style.visibility='visible';
    }
    if (target.is('#p')) {
      document.getElementById('p-hover').style.visibility='visible';
    }
    if (target.is('#s')) {
      document.getElementById('s-hover').style.visibility='visible';
    }
    if (target.is('#cl')) {
      document.getElementById('cl-hover').style.visibility='visible';
    }
    if (target.is('#ar')) {
      document.getElementById('ar-hover').style.visibility='visible';
    }
    if (target.is('#k')) {
      document.getElementById('k-hover').style.visibility='visible';
    }
    if (target.is('#ca')) {
      document.getElementById('ca-hover').style.visibility='visible';
    }
    if (target.is('#sc')) {
      document.getElementById('sc-hover').style.visibility='visible';
    }
    if (target.is('#ti')) {
      document.getElementById('ti-hover').style.visibility='visible';
    }
    if (target.is('#v')) {
      document.getElementById('v-hover').style.visibility='visible';
    }
    if (target.is('#cr')) {
      document.getElementById('cr-hover').style.visibility='visible';
    }
    if (target.is('#mn')) {
      document.getElementById('mn-hover').style.visibility='visible';
    }
    if (target.is('#fe')) {
      document.getElementById('fe-hover').style.visibility='visible';
    }
    if (target.is('#co')) {
      document.getElementById('co-hover').style.visibility='visible';
    }
    if (target.is('#ni')) {
      document.getElementById('ni-hover').style.visibility='visible';
    }
    if (target.is('#cu')) {
      document.getElementById('cu-hover').style.visibility='visible';
    }
    if (target.is('#zn')) {
      document.getElementById('zn-hover').style.visibility='visible';
    }
    if (target.is('#ga')) {
      document.getElementById('ga-hover').style.visibility='visible';
    }
    if (target.is('#ge')) {
      document.getElementById('ge-hover').style.visibility='visible';
    }
    if (target.is('#as')) {
      document.getElementById('as-hover').style.visibility='visible';
    }
    if (target.is('#se')) {
      document.getElementById('se-hover').style.visibility='visible';
    }
    if (target.is('#br')) {
      document.getElementById('br-hover').style.visibility='visible';
    }
    if (target.is('#kr')) {
      document.getElementById('kr-hover').style.visibility='visible';
    }
    if (target.is('#rb')) {
      document.getElementById('rb-hover').style.visibility='visible';
    }
    if (target.is('#sr')) {
      document.getElementById('sr-hover').style.visibility='visible';
    }
    if (target.is('#y')) {
      document.getElementById('y-hover').style.visibility='visible';
    }
    if (target.is('#zr')) {
      document.getElementById('zr-hover').style.visibility='visible';
    }
    if (target.is('#nb')) {
      document.getElementById('nb-hover').style.visibility='visible';
    }
    if (target.is('#mo')) {
      document.getElementById('mo-hover').style.visibility='visible';
    }
    if (target.is('#tc')) {
      document.getElementById('tc-hover').style.visibility='visible';
    }
    if (target.is('#ru')) {
      document.getElementById('ru-hover').style.visibility='visible';
    }
    if (target.is('#rh')) {
      document.getElementById('rh-hover').style.visibility='visible';
    }
    if (target.is('#pd')) {
      document.getElementById('pd-hover').style.visibility='visible';
    }
    if (target.is('#ag')) {
      document.getElementById('ag-hover').style.visibility='visible';
    }
    if (target.is('#cd')) {
      document.getElementById('cd-hover').style.visibility='visible';
    }
    if (target.is('#in')) {
      document.getElementById('in-hover').style.visibility='visible';
    }
    if (target.is('#sn')) {
      document.getElementById('sn-hover').style.visibility='visible';
    }
    if (target.is('#sb')) {
      document.getElementById('sb-hover').style.visibility='visible';
    }
    if (target.is('#te')) {
      document.getElementById('te-hover').style.visibility='visible';
    }
    if (target.is('#i')) {
      document.getElementById('i-hover').style.visibility='visible';
    }
    if (target.is('#xe')) {
      document.getElementById('xe-hover').style.visibility='visible';
    }
    if (target.is('#cs')) {
      document.getElementById('cs-hover').style.visibility='visible';
    }
    if (target.is('#ba')) {
      document.getElementById('ba-hover').style.visibility='visible';
    }
    if (target.is('#la')) {
      document.getElementById('la-hover').style.visibility='visible';
    }
    if (target.is('#ce')) {
      document.getElementById('ce-hover').style.visibility='visible';
    }
    if (target.is('#pr')) {
      document.getElementById('pr-hover').style.visibility='visible';
    }
    if (target.is('#nd')) {
      document.getElementById('nd-hover').style.visibility='visible';
    }
    if (target.is('#pm')) {
      document.getElementById('pm-hover').style.visibility='visible';
    }
    if (target.is('#sm')) {
      document.getElementById('sm-hover').style.visibility='visible';
    }
    if (target.is('#eu')) {
      document.getElementById('eu-hover').style.visibility='visible';
    }
    if (target.is('#gd')) {
      document.getElementById('gd-hover').style.visibility='visible';
    }
    if (target.is('#tb')) {
      document.getElementById('tb-hover').style.visibility='visible';
    }
    if (target.is('#dy')) {
      document.getElementById('dy-hover').style.visibility='visible';
    }
    if (target.is('#ho')) {
      document.getElementById('ho-hover').style.visibility='visible';
    }
    if (target.is('#er')) {
      document.getElementById('er-hover').style.visibility='visible';
    }
    if (target.is('#tm')) {
      document.getElementById('tm-hover').style.visibility='visible';
    }
    if (target.is('#yb')) {
      document.getElementById('yb-hover').style.visibility='visible';
    }
    if (target.is('#lu')) {
      document.getElementById('lu-hover').style.visibility='visible';
    }
    if (target.is('#hf')) {
      document.getElementById('hf-hover').style.visibility='visible';
    }
    if (target.is('#ta')) {
      document.getElementById('ta-hover').style.visibility='visible';
    }
    if (target.is('#w')) {
      document.getElementById('w-hover').style.visibility='visible';
    }
    if (target.is('#re')) {
      document.getElementById('re-hover').style.visibility='visible';
    }
    if (target.is('#os')) {
      document.getElementById('os-hover').style.visibility='visible';
    }
    if (target.is('#ir')) {
      document.getElementById('ir-hover').style.visibility='visible';
    }
    if (target.is('#pt')) {
      document.getElementById('pt-hover').style.visibility='visible';
    }
    if (target.is('#au')) {
      document.getElementById('au-hover').style.visibility='visible';
    }
    if (target.is('#hg')) {
      document.getElementById('hg-hover').style.visibility='visible';
    }
    if (target.is('#tl')) {
      document.getElementById('tl-hover').style.visibility='visible';
    }
    if (target.is('#pb')) {
      document.getElementById('pb-hover').style.visibility='visible';
    }
    if (target.is('#bi')) {
      document.getElementById('bi-hover').style.visibility='visible';
    }
    if (target.is('#po')) {
      document.getElementById('po-hover').style.visibility='visible';
    }
    if (target.is('#at')) {
      document.getElementById('at-hover').style.visibility='visible';
    }
    if (target.is('#rn')) {
      document.getElementById('rn-hover').style.visibility='visible';
    }
    if (target.is('#fr')) {
      document.getElementById('fr-hover').style.visibility='visible';
    }
    if (target.is('#ra')) {
      document.getElementById('ra-hover').style.visibility='visible';
    }
    if (target.is('#ac')) {
      document.getElementById('ac-hover').style.visibility='visible';
    }
    if (target.is('#th')) {
      document.getElementById('th-hover').style.visibility='visible';
    }
    if (target.is('#pa')) {
      document.getElementById('pa-hover').style.visibility='visible';
    }
    if (target.is('#u')) {
      document.getElementById('u-hover').style.visibility='visible';
    }
    if (target.is('#np')) {
      document.getElementById('np-hover').style.visibility='visible';
    }
    if (target.is('#pu')) {
      document.getElementById('pu-hover').style.visibility='visible';
    }
    if (target.is('#am')) {
      document.getElementById('am-hover').style.visibility='visible';
    }
    if (target.is('#cm')) {
      document.getElementById('cm-hover').style.visibility='visible';
    }
    if (target.is('#bk')) {
      document.getElementById('bk-hover').style.visibility='visible';
    }
    if (target.is('#cf')) {
      document.getElementById('cf-hover').style.visibility='visible';
    }
    if (target.is('#es')) {
      document.getElementById('es-hover').style.visibility='visible';
    }
    if (target.is('#fm')) {
      document.getElementById('fm-hover').style.visibility='visible';
    }
    if (target.is('#md')) {
      document.getElementById('md-hover').style.visibility='visible';
    }
    if (target.is('#no')) {
      document.getElementById('no-hover').style.visibility='visible';
    }
    if (target.is('#lr')) {
      document.getElementById('lr-hover').style.visibility='visible';
    }
    if (target.is('#rf')) {
      document.getElementById('rf-hover').style.visibility='visible';
    }
    if (target.is('#db')) {
      document.getElementById('db-hover').style.visibility='visible';
    }
    if (target.is('#sg')) {
      document.getElementById('sg-hover').style.visibility='visible';
    }
    if (target.is('#bh')) {
      document.getElementById('bh-hover').style.visibility='visible';
    }
    if (target.is('#hs')) {
      document.getElementById('hs-hover').style.visibility='visible';
    }
    if (target.is('#mt')) {
      document.getElementById('mt-hover').style.visibility='visible';
    }
    if (target.is('#ds')) {
      document.getElementById('ds-hover').style.visibility='visible';
    }
    if (target.is('#rg')) {
      document.getElementById('rg-hover').style.visibility='visible';
    }
    if (target.is('#cn')) {
      document.getElementById('cn-hover').style.visibility='visible';
    }
    if (target.is('#nh')) {
      document.getElementById('nh-hover').style.visibility='visible';
    }
    if (target.is('#fl')) {
      document.getElementById('fl-hover').style.visibility='visible';
    }
    if (target.is('#mc')) {
      document.getElementById('mc-hover').style.visibility='visible';
    }
    if (target.is('#lv')) {
      document.getElementById('lv-hover').style.visibility='visible';
    }
    if (target.is('#ts')) {
      document.getElementById('ts-hover').style.visibility='visible';
    }
    if (target.is('#og')) {
      document.getElementById('og-hover').style.visibility='visible';
    }
  });

  // Hides hover-info class for the particular element moused over
  $('.element-container').mouseleave(function() {
      if ($(this).attr("id") != "#h") {
        document.getElementById('h-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#he") {
        document.getElementById('he-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#li") {
        document.getElementById('li-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#be") {
        document.getElementById('be-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#b") {
        document.getElementById('b-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#c") {
        document.getElementById('c-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#n") {
        document.getElementById('n-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#o") {
        document.getElementById('o-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#f") {
        document.getElementById('f-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#ne") {
        document.getElementById('ne-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#na") {
        document.getElementById('na-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#mg") {
        document.getElementById('mg-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#al") {
        document.getElementById('al-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#si") {
        document.getElementById('si-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#p") {
        document.getElementById('p-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#s") {
        document.getElementById('s-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#cl") {
        document.getElementById('cl-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#ar") {
        document.getElementById('ar-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#k") {
        document.getElementById('k-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#ca") {
        document.getElementById('ca-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#sc") {
        document.getElementById('sc-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#ti") {
        document.getElementById('ti-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#v") {
        document.getElementById('v-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#cr") {
        document.getElementById('cr-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#mn") {
        document.getElementById('mn-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#fe") {
        document.getElementById('fe-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#co") {
        document.getElementById('co-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#ni") {
        document.getElementById('ni-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#cu") {
        document.getElementById('cu-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#zn") {
        document.getElementById('zn-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#ga") {
        document.getElementById('ga-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#ge") {
        document.getElementById('ge-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#as") {
        document.getElementById('as-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#se") {
        document.getElementById('se-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#br") {
        document.getElementById('br-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#kr") {
        document.getElementById('kr-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#rb") {
        document.getElementById('rb-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#sr") {
        document.getElementById('sr-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#y") {
        document.getElementById('y-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#zr") {
        document.getElementById('zr-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#nb") {
        document.getElementById('nb-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#mo") {
        document.getElementById('mo-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#tc") {
        document.getElementById('tc-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#ru") {
        document.getElementById('ru-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#rh") {
        document.getElementById('rh-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#pd") {
        document.getElementById('pd-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#ag") {
        document.getElementById('ag-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#cd") {
        document.getElementById('cd-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#in") {
        document.getElementById('in-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#sn") {
        document.getElementById('sn-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#sb") {
        document.getElementById('sb-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#te") {
        document.getElementById('te-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#i") {
        document.getElementById('i-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#xe") {
        document.getElementById('xe-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#cs") {
        document.getElementById('cs-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#ba") {
        document.getElementById('ba-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#la") {
        document.getElementById('la-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#ce") {
        document.getElementById('ce-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#pr") {
        document.getElementById('pr-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#nd") {
        document.getElementById('nd-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#pm") {
        document.getElementById('pm-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#sm") {
        document.getElementById('sm-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#eu") {
        document.getElementById('eu-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#gd") {
        document.getElementById('gd-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#tb") {
        document.getElementById('tb-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#dy") {
        document.getElementById('dy-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#ho") {
        document.getElementById('ho-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#er") {
        document.getElementById('er-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#tm") {
        document.getElementById('tm-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#yb") {
        document.getElementById('yb-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#lu") {
        document.getElementById('lu-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#hf") {
        document.getElementById('hf-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#ta") {
        document.getElementById('ta-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#w") {
        document.getElementById('w-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#re") {
        document.getElementById('re-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#os") {
        document.getElementById('os-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#ir") {
        document.getElementById('ir-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#pt") {
        document.getElementById('pt-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#au") {
        document.getElementById('au-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#hg") {
        document.getElementById('hg-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#tl") {
        document.getElementById('tl-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#pb") {
        document.getElementById('pb-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#bi") {
        document.getElementById('bi-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#po") {
        document.getElementById('po-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#at") {
        document.getElementById('at-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#rn") {
        document.getElementById('rn-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#fr") {
        document.getElementById('fr-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#ra") {
        document.getElementById('ra-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#ac") {
        document.getElementById('ac-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#th") {
        document.getElementById('th-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#pa") {
        document.getElementById('pa-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#u") {
        document.getElementById('u-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#np") {
        document.getElementById('np-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#pu") {
        document.getElementById('pu-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#am") {
        document.getElementById('am-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#cm") {
        document.getElementById('cm-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#bk") {
        document.getElementById('bk-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#cf") {
        document.getElementById('cf-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#es") {
        document.getElementById('es-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#fm") {
        document.getElementById('fm-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#md") {
        document.getElementById('md-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#no") {
        document.getElementById('no-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#lr") {
        document.getElementById('lr-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#rf") {
        document.getElementById('rf-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#db") {
        document.getElementById('db-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#sg") {
        document.getElementById('sg-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#bh") {
        document.getElementById('bh-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#hs") {
        document.getElementById('hs-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#mt") {
        document.getElementById('mt-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#ds") {
        document.getElementById('ds-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#rg") {
        document.getElementById('rg-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#cn") {
        document.getElementById('cn-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#nh") {
        document.getElementById('nh-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#fl") {
        document.getElementById('fl-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#mc") {
        document.getElementById('mc-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#lv") {
        document.getElementById('lv-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#ts") {
        document.getElementById('ts-hover').style.visibility='hidden';
      }
      if ($(this).attr("id") != "#og") {
        document.getElementById('og-hover').style.visibility='hidden';
      }
  });

  // modals ==========================================================

  // $(".modal-button").on("click", function() {
  //   var modal = $(this).data("modal");
  //   $(modal).show();
  // });

  $(".modal").on("click", function(e) {
    var className = e.target.className;
    if(className === "modal" || className === "close"){
      $(this).closest(".modal").hide();
      e.stopPropagation();
    }
  });

});
