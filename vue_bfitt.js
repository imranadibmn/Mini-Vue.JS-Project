const app = new Vue({
    el: '#app',
    data: {
      weight: 0,
      height: 0,
    },
    computed: {
      bmi() {
        return round(calculateBMI(this.weight, this.height), 1);
      },
      weightGroup() {
          return getWeightGroup(this.bmi);
      }
  },
  });

    // easy round function
   function round(value, precision) {
   return Number(Math.round(value+'e'+precision)+'e-'+precision);
}  

  function calculateBMI(kg, cm) {
    var m = cm / 100;
    if (kg > 0 && m > 0) {
        return kg / Math.pow(m, 2);
    } else {
        return 0;
    }
}
    function getWeightGroup(bmi) {
      if (this.bmi == 0) {
          return "";
      } else if (bmi >= 1 && bmi < 18.5) {
          return "Underweight";
      } else if (bmi >= 18.5 && bmi <= 24.9 ) {
          return "Healthy Weight";
      } else if (bmi >= 25 && bmi <=29.9 ) {
          return "Overweight";
      } else if (bmi >= 30 && bmi < 35) {
          return "Moderately Obese";
      } else if (bmi >= 35 && bmi < 40) {
          return "Severely Obese";
      } else if (bmi > 40) {
          return "Very Severely Obese";
      }
  }

    