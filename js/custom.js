$(document).ready(function() {
	 $("#slider1").responsiveSlides({
        maxwidth: 800,
        speed: 1500
      });
	$('.home-slide').show();
	$('.v-side').show();
	$('.home').show();
	$('.management').hide();
	$('.ssa').hide();
	$('.rules-regulation').hide();
	$('.history').hide();
	$('.contact_us').hide();
    $('.list-student').hide();
	 $('.list-group a').click(function (e) {
                e.preventDefault();
                $('a').removeClass('active');
                $(this).addClass('active');
            });
});
function pageNavigation(v){
	if(v == 1){
		$('.home-slide').slideDown();
		$('.v-side').slideDown();
		$('.home').slideDown();
		$('.management').hide();
		$('.ssa').hide();
		$('.rules-regulation').hide();
		$('.history').hide();
		$('.contact_us').hide();
        $('.list-student').hide();
	}else if(v == 2){ //History
		$('.home-slide').hide();
		$('.v-side').hide();
		$('.home').hide();
		$('.management').hide();
		$('.ssa').hide();
		$('.rules-regulation').hide();
		$('.history').slideDown();
		$('.contact_us').hide();
        $('.list-student').hide();
	}else if(v == 3){//hostel management
		$('.home-slide').hide();
		$('.v-side').hide();
		$('.home').hide();
		$('.management').slideDown();
		$('.ssa').hide();
		$('.rules-regulation').hide();
		$('.history').hide();
		$('.contact_us').hide();
        $('.list-student').hide();
	}else if(v == 4){ //ssa
		$('.home-slide').hide();
		$('.v-side').hide();
		$('.home').hide();
		$('.management').hide();
		$('.ssa').slideDown();
		$('.rules-regulation').hide();
		$('.history').hide();
		$('.contact_us').hide();
        $('.list-student').hide();
	}else if(v == 5){//rules
		$('.home-slide').hide();
		$('.v-side').hide();
		$('.home').hide();
		$('.management').hide();
		$('.ssa').hide();
		$('.rules-regulation').slideDown();
		$('.history').hide();
		$('.contact_us').hide();
        $('.list-student').hide();
	}else if(v == 6){//list of students
		$('.home-slide').hide();
		$('.v-side').hide();
		$('.home').hide();
		$('.management').hide();
		$('.ssa').hide();
		$('.rules-regulation').hide();
		$('.history').hide();
		$('.contact_us').hide();
        $('.list-student').slideDown();
	}
	else if(v == 7){ //contact us
		$('.home-slide').hide();
		$('.v-side').hide();
		$('.home').hide();
		$('.management').hide();
		$('.ssa').hide();
		$('.rules-regulation').hide();
		$('.history').hide();
		$('.contact_us').slideDown();
        $('.list-student').hide();
	}
}
