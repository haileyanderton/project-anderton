$(document).ready(function() {

      $('.womenInfo').hide();


    // function to hide all divs
    function hideAll() {
      $('#radioInfo').hide();
      $('#tvInfo').hide();
      $('#filmInfo').hide();
      $('#gamingInfo').hide();
    }

    hideAll();

    // when any animal is clicked, make the suitable div appear
     $('.category').click(function() {

       // but first, hide all the divs to ensure that
       // only one will be open, ever
       hideAll();

       // here is a switch statement - this was in Codecademy
       // "Control Flow" lesson 7

       // we can get the ID of the thing that was clicked -
       switch ($(this).attr("id")) {
         case "radio":
           $('#radioInfo').fadeIn('fast');
            $('.category').hide();
           break;
         case "tv":
           $('#tvInfo').fadeIn('fast');
           $('.category').hide();
           break;
         case "film":
           $('#filmInfo').fadeIn('fast');
           $('.category').hide();
           break;
         case "gaming":
           $('#gamingInfo').fadeIn('fast');
           $('.category').hide();
           break;
       }

     }); // end of function for clicking
    document.getElementById('radioClose').onclick = function(){
      $('.category').show()
          $('#radioInfo').hide();
         };

    document.getElementById('tvClose').onclick = function(){
    $('.category').show()
     $('#tvInfo').hide();

    };

    document.getElementById('filmClose').onclick = function(){
    $('.category').show()
      $('#filmInfo').hide();

  };
    document.getElementById('gamingClose').onclick = function(){
    $('.category').show()
      $('#gamingInfo').hide();
   };

   google.charts.load('current', {'packages':['corechart']});

   google.charts.setOnLoadCallback(drawIndustryChart);
   google.charts.setOnLoadCallback(drawDirectorChart);
   google.charts.setOnLoadCallback(drawManagerChart);
   google.charts.setOnLoadCallback(drawExecStacked);
   google.charts.setOnLoadCallback(drawLeadChart);
   google.charts.setOnLoadCallback(drawDirectChart);
   google.charts.setOnLoadCallback(drawWriterChart);
   google.charts.setOnLoadCallback(drawDeveloperChart);
   google.charts.setOnLoadCallback(drawGamerChart);


     function drawIndustryChart() {

       var data = google.visualization.arrayToDataTable([
         ['Gender', 'Jobs in Radio Industry'],
         ['Males',     54.5],
         ['Females',   45.5],
       ]);

       var options = {
         title: 'Radio Industry by Gender',
         backgroundColor: 'transparent',
         colors: ['#ff3953','#ff797a'],
         fontName: 'Poppins',
       };

       var chart = new google.visualization.PieChart(document.getElementById('radioIndustry'));

       chart.draw(data, options);
     }

     function drawDirectorChart() {

       var data = google.visualization.arrayToDataTable([
         ['Gender', 'Jobs in Radio Industry'],
         ['Males',     76.9],
         ['Females',   23.1],
       ]);

       var options = {
         title: 'Radio News Directors by Gender',
         backgroundColor: 'transparent',
         colors: ['#ff3953','#ff797a'],
         fontName: 'Poppins',
       };

       var chart = new google.visualization.PieChart(document.getElementById('radioDirector'));

       chart.draw(data, options);
     }

     google.charts.load('current', {'packages':['corechart']});

           function drawManagerChart() {

             var data = google.visualization.arrayToDataTable([
               ['Gender', 'Jobs in Radio Industry'],
               ['Males',     81.9],
               ['Females',   18.1],
             ]);

             var options = {
               title: 'Radio General Managers by Gender',
               backgroundColor: 'transparent',
               colors: ['#ff3953','#ff797a'],
               fontName: 'Poppins',
             };

             var chart = new google.visualization.PieChart(document.getElementById('radioManager'));

             chart.draw(data, options);
           }
});

function drawExecStacked() {
      var data = google.visualization.arrayToDataTable([
        ['City', 'Males', 'Females'],
        ['Chair/CEO', 71, 29],
        ['Senior Management', 73, 27],
        ['Unit Heads', 55, 45],
      ]);

      var options = {
        title: 'TV Executives by Gender Ratio',
        backgroundColor: 'transparent',
        colors: ['#F20074','#FF6EA3'],
        fontName: 'Poppins',
        chartArea: {width: '37%'},
        isStacked: true,
        hAxis: {
          title: '',
          minValue: 0,
          },
        vAxis: {
          title: ''
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('tvExec'));
      chart.draw(data, options);
    }


         function drawLeadChart() {

           var data = google.visualization.arrayToDataTable([
             ['Gender', 'Amount'],
             ['Males',     2],
             ['Females',     1],
           ]);

           var options = {
             title: 'Film Leads by Gender Ratio',
            backgroundColor: 'transparent',
             colors: ['#ff3953','#ff797a'],
             fontName: 'Poppins',
             pieHole: 0.5,
             pieSliceTextStyle: {
               color: 'white',
             },

           };

           var chart = new google.visualization.PieChart(document.getElementById('filmLead'));
           chart.draw(data, options);
         }

    function drawDirectChart() {
          var data = google.visualization.arrayToDataTable([
            ['Gender', 'Amount'],
            ['Males',     8],
            ['Females',     1],
          ]);

          var options = {
            title: 'Film Director by Gender Ratio',
           backgroundColor: 'transparent',
            colors: ['#ff3953','#ff797a'],
            fontName: 'Poppins',
            pieHole: 0.5,
            pieSliceTextStyle: {
              color: 'white',
            },
          };

          var chart = new google.visualization.PieChart(document.getElementById('filmDirector'));
          chart.draw(data, options);
        }

        function drawWriterChart() {

       var data = google.visualization.arrayToDataTable([
         ['Gender', 'Amount'],
         ['Males',     4],
         ['Females',     1],
       ]);

       var options = {
         title: 'Film Writers by Gender Ratio',
        backgroundColor: 'transparent',
         colors: ['#ff3953','#ff797a'],
         fontName: 'Poppins',
         pieHole: 0.5,
         pieSliceTextStyle: {
           color: 'white',
         },

       };

       var chart = new google.visualization.PieChart(document.getElementById('filmWriter'));
       chart.draw(data, options);
     }

     function drawDeveloperChart() {

        var data = google.visualization.arrayToDataTable([
          ['Gender', 'Amount'],
          ['Males',     76],
          ['Females',     22],
        ]);

        var options = {
          title: 'Game Developer Survery Respondents by Gender',
         backgroundColor: 'transparent',
          colors: ['#F20074','#FF6EA3'],
          fontName: 'Poppins',
          pieSliceTextStyle: {
            color: 'white',
          },

        };

        var chart = new google.visualization.PieChart(document.getElementById('gamingDeveloper'));
        chart.draw(data, options);
      }

      function drawGamerChart() {

       var data = google.visualization.arrayToDataTable([
         ['Gender', 'Amount'],
         ['Males',     52],
         ['Females',     48],
       ]);

       var options = {
         title: 'Gamers by Gender',
        backgroundColor: 'transparent',
         colors: ['#F20074','#FF6EA3'],
         fontName: 'Poppins',
         pieSliceTextStyle: {
           color: 'white',
         },

       };

       var chart = new google.visualization.PieChart(document.getElementById('gamingGamer'));
       chart.draw(data, options);
     }
