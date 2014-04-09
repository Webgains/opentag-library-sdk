//:include tagsdk-current.js
var version = "";
var classPath = "googleanalytics.googleanalyticscustomdomains" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Google Analytics - Custom Domains",
		async: true,
		description: "Allows the collecting of visits to multiple domains in a single profile—as if they were a single site rather than two separate ones.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "GA Profile ID",
			description: "Profile ID of your Google Analytics account",
			token: "PROFILE_ID",
			uv: ""
		}, {
			name: "Domain URL",
			description: "In the format www.yourdomain.com or subdomain.yourdomain.com",
			token: "DOMAIN",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/


		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', '' + this.valueForToken("PROFILE_ID") + '']);
		_gaq.push(['_setDomainName', '' + this.valueForToken("DOMAIN") + '']);
		_gaq.push(['_trackPageview']);

		(function() {
			var ga = document.createElement('script');
			ga.type = 'text/javascript';
			ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' :
				'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(ga, s);
		})();

		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});