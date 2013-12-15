/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
var disqus_shortname = 'univunix'; // required: replace example with your forum shortname

/* * * DON'T EDIT BELOW THIS LINE * * */
(function() {
  var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
  dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();

(function () {
  var s = document.createElement('script'); s.async = true;
  s.type = 'text/javascript';
  s.src = '//' + disqus_shortname + '.disqus.com/count.js';
  (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
}());
$(document).ready(function() {
  $('img.lazy').show().lazyload({
    effect: "slideDown",
    failureLimit: 6
  });
  $("#wrapper").fadeIn(500);
  $('a.fadepage').click(function(event){
	  event.preventDefault();
	  linkLocation = this.href;
	  $("#wrapper").fadeOut(500, redirectPage);
  });

  function redirectPage() {
		window.location = linkLocation;
	}
});