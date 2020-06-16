const btn = document.getElementById('btn');
btn.addEventListener('click', function(){
  const bwt = document.getElementById('bwt').value;
  const result = document.getElementById('result').value;

  const gender = document.getElementById('gender');
  const a = gender.value;

  const discipline = document.getElementById('discipline');
  const b = discipline.value;

  //wilks Formula
  let wilks_coef = [];
  if (a == 'men') {
    wilks_coef = [-0.00000001291, 0.00000701863, -0.00113732, -0.002388645, 16.2606339, -216.0475144];
  } else if (a == 'women') {
    wilks_coef = [-0.00000009054, 0.00004731582, -0.00930733913, 0.82112226871, -27.23842536447, 594.31747775582];
  }

  const wilks = result * (500 / ((wilks_coef[0] * (bwt ** 5)) + (wilks_coef[1] * (bwt ** 4)) + (wilks_coef[2] * (bwt ** 3)) + (wilks_coef[3] * (bwt ** 2)) + (wilks_coef[4] * bwt) + wilks_coef[5]));
  document.getElementById('wilks').innerHTML = Math.round(wilks * 100) / 100;

  //wilks2 formula
  let wilks2_coef = [];
  if (a == 'men') {
    wilks2_coef = [-0.0000000120804336482315, 0.00000707665973070743, -0.00139583381094385, 0.073694103462609, 8.47206137941125, 47.4617885411949];
  } else if (a == 'women') {
    wilks2_coef = [-0.000000023334613884954, 0.00000938773881462799, -0.0010504000506583, -0.0330725063103405, 13.7121941940668, -125.425539779509];
  }

  const wilks2 = result * (600 / ((wilks2_coef[0] * bwt ** 5) + (wilks2_coef[1] * bwt ** 4) + (wilks2_coef[2] * bwt ** 3) + (wilks2_coef[3] * bwt ** 2) + (wilks2_coef[4] * bwt) + wilks2_coef[5]));
  document.getElementById('wilks2').innerHTML = Math.round(wilks2 * 100) / 100;

  //dots Formula
  let dots_coef = [];
  if (a == 'men') {
    dots_coef = [-0.000001093, 0.0007391293, -0.1918759221, 24.0900756, -307.75076];
  } else if (a == 'women') {
    dots_coef = [-0.0000010706, 0.0005158568, -0.1126655495, 13.6175032, -57.96288];
  }

  const dots = result * (500 / ((dots_coef[0] * bwt ** 4) + (dots_coef[1] * bwt ** 3) + (dots_coef[2] * bwt ** 2) + (dots_coef[3] * bwt) + (dots_coef[4])));
  document.getElementById('dots').innerHTML = Math.round(dots * 100) / 100;

  //ipf Formula
  let ipf_coef = [];
  if (a == 'men') {
    if (b == 'c-pl') {
      ipf_coef = [310.6700, 857.7850, 53.2160, 147.0835];
    } else if (b == 'c-bp') {
      ipf_coef = [86.4745, 259.1550, 17.5785, 53.1220];
    } else if (b == 'e-pl') {
      ipf_coef = [387.2650, 1121.2800, 80.6324, 222.4896];
    } else if (b == 'e-bp') {
      ipf_coef = [133.9400, 441.4650, 35.3938, 113.0057];
    }
  } else if (a == 'women') {
    if (b == 'c-pl') {
      ipf_coef = [125.1435, 228.0300, 34.5246, 86.8301];
    } else if (b == 'c-bp') {
      ipf_coef = [25.0485, 43.8480, 6.7172, 13.9520];
    } else if (b == 'e-pl') {
      ipf_coef = [176.5800, 373.3150, 48.4534, 110.0103];
    } else if (b == 'e-bp') {
      ipf_coef = [49.1060, 124.2090, 23.1990, 67.4926];
    }
  }

  const ipf = 500 + 100 * ((result - (ipf_coef[0] * Math.log(bwt) - ipf_coef[1])) / (ipf_coef[2] * Math.log(bwt) - ipf_coef[3]));
  document.getElementById('ipf').innerHTML = Math.round(ipf * 100) / 100;

  //googlift Formula
  let gl_coef = [];
  if (a == 'men') {
    if (b == 'c-pl') {
      gl_coef = [1199.72839, 1025.18162, 0.00921];
    } else if (b == 'c-bp') {
      gl_coef = [320.98041, 281.40258, 0.01008];
    } else if (b == 'e-pl') {
      gl_coef = [1236.25115, 1449.21864, 0.01644];
    } else if (b == 'e-bp') {
      gl_coef = [381.22073, 733.79378, 0.02398];
    }
  } else if (a == 'women') {
    if (b == 'c-pl') {
      gl_coef = [610.32796, 1045.59282, 0.03048];
    } else if (b == 'c-bp') {
      gl_coef = [142.40398, 442.52671, 0.04724];
    } else if (b == 'e-pl') {
      gl_coef = [758.63878, 949.31382, 0.02435];
    } else if (b == 'e-bp') {
      gl_coef = [221.82209, 357.00377, 0.02937];
    }
  }

  const gl = result * (100 / (gl_coef[0] - gl_coef[1] * Math.E ** (-gl_coef[2] * bwt)));
  document.getElementById('gl').innerHTML = Math.round(gl * 100) / 100;
})
