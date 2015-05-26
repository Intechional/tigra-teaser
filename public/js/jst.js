console.log("loading jst")
window.JST = {};

window.JST['landing'] = _.template(
	'<div class="jumbotron container-fluid vertical-centered">\
  		<div id="landing-header">\
  			<h2>How\'s your economic citizenship?</h2>\
  			<p>When we support businesses with good employment practices, local sourcing, and local ownership, we exercise good economic citizenship. These practices re-circulate money in our local economy. </p>\
  			<p id="play-invitation"> Play all three categories to get your Economic Citizenship Score!</p>\
  		</div>\
  		<div id="cat-entry-container" class="btn-group-vertical">\
  		</div>\
  		<div id="total-score-container"></div>\
	</div>'
	);

window.JST['subscore_modal'] = _.template(
	'<div id="subscore-modal" class="modal fade">\
		<div class="modal-dialog">\
			<div class="modal-header">\
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
			<div class="modal-body">\
				<p><small> <%=recirculation%> cents for every dollar you spent is re-circulating in the local economy.</small></small> </p>\
				<p><small>You score <%=score%> / 2 when it comes to Economic Citizenship and <%=gerund%>.</small></p>\
				<div class="modal-footer">\
                <button id="close-subscore-modal" type="button" class="btn btn-default" data-dismiss="modal"><%=button_text%></button>\
			<div>\
		</div>\
	</div>'
);

window.JST['in_progress_score'] = _.template(
	'<div  id="in_progress_score_container">\
		Current Score: <span id="in_progress_score" class="points badge"><%=score%></span>\
	</div>')

window.JST['cat_entry'] = _.template(
		' <button id="<%=btn_id%>" class="btn btn-default btn-block">  <small>  <span id="<%=done_yet_id%>" class=""></span>  </small> <%=intro%> <small> <span id="<%=score_container_id%>" class="points pull-right"><%=score%> </span></small>   </button>'
	);

window.JST['score'] = _.template(
		'<p>You\'re a <%=level_name%>! Your Economic Citizenship Score is: <%=score%> out of 7.  </p>\
		<button id="learn-more-btn" class="btn btn-default">Learn more . . . </button>\
		<div id="score-modal" class="modal fade">\
		<div class="modal-dialog">\
			<div class="modal-header">\
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
				<h1>You\'re a <%=level_name%>!</h1>\
			</div>\
			<div class="modal-body">\
				<p> Your Economic Citizenship Score is: <%=score%> out of 7.</p>\
				<p><small><%=desc%></small></p>\
				<div class="modal-footer">\
                <button id="close-score-modal" type="button" class="btn btn-default" data-dismiss="modal">Go Home</button>\
			<div>\
		</div>\
	</div>'
	);

window.JST['learn_more'] = _.template(
	'<div class="jumbotron container-fluid">\
  		<h3 class="level"><%=name%></h3>\
  		<p><%=desc%></p>\
  		<button id="exit-learn-more" class="btn btn-default">Exit</button>\
	</div>'
	)

window.JST['no_score'] = _.template(
		''
	);

window.JST['category_template'] = _.template(
	'<div class="jumbotron">\
  		<p><%=question%></p>\
  		<div class="btn-group-vertical" id="<%=cat%>-options-container">\
  		</div>\
  		<div id="subscore-modal-container"></div>\
	</div>'
	);

window.JST['option'] = _.template(
		'<button id="<%=btn_id%>" class="btn btn-default"><%=desc%></button>'
	);

