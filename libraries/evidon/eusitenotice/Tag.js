//:include tagsdk-current.js
var version = "";
var classPath = "evidon.eusitenotice" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "EU Site Notice",
		async: true,
		description: "This tag handles the Site Notice functionality for EU sites, both for implied and explicit consent notices. Must be filtered to fire on page types corresponding to individual PIDs (which are available via Evidon).",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/evidon.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Evidon Company ID",
			description: "The ID assigned to you by Evidon",
			token: "client_id",
			uv: ""
		}, {
			name: "Evidon Page ID",
			description: "The unique identifier for the page this tag will be fired on",
			token: "page_id",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		(function() {
			var hn = document.createElement('script');
			hn.type = 'text/javascript';
			hn.async = true;
			hn.setAttribute('data-ev-hover-pid', this.valueForToken("page_id"));
			hn.setAttribute('data-ev-hover-ocid', this.valueForToken("client_id"));
			hn.src = ('https:' == document.location.protocol ? 'https://' : 'http://') +
				'c.betrad.com/geo/h1.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(hn, s);
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