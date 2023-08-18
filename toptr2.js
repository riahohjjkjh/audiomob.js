jQuery(document).ready(function(){ 
													
		//var streamer = jQuery("#playerTvOnline").attr('data-url');
		var streamer = myChanel;

		var author = Clappr.UIContainerPlugin.extend({
			bindEvents() {
			  this.listenTo(this.container, Clappr.Events.CONTAINER_PLAY, this.render)
			},
			render: function() {
			  this.$el.html('www.kaderosat.com')
			  this.$el.css('font-size', '24px')
			  this.$el.css('color', 'white')
			  this.$el.css('background-color', '') 
			  this.$el.css('position', 'absolute')
			  this.$el.css('bottom', '14px')
			  this.$el.css('left', '1%')
			  this.$el.css('padding', '3px 15px')
	
			  this.container.$el.append(this.$el)
			  return this
			}
		  });
		
		var player = new Clappr.Player({
						source: streamer, 
						parentId: "#playerTvOnline",
						autoPlay: true,
						width: '780',
						height: '520',
						hlsjsConfig: {
							xhrSetup: function(xhr, url) {
								xhr.withCredentials = false;
							}
						},
						playbackConfig: {
							crossorigin: 'use-credentials'
						},
						plugins: {container: [author]}
						});
						
});
