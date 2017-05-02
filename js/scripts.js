$(document).ready(function(){
  $("form#stress_survey").submit(function(event){ debugger;
    event.preventDefault();

    var warningSigns = [];
    var measures = [];

    $("input:checkbox[name=warning-signs]:checked").each(function(){
      warningSigns = $(this).val();
    });

    alert(warningSigns);

    $("input:checkbox[name=measures]:checked").each(function(){
      measures = $(this).val();
    });

    $('#stress_survey').hide();

    if (measures <= warningSigns) {
      $("#resources").show();
    } else {
      $("#doing-good").show();
    };
  });
});
