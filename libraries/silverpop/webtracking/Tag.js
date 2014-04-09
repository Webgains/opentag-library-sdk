//:include tagsdk-current.js
var version = "";
var classPath = "silverpop.webtracking" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Web Tracking",
		async: true,
		description: "Engage Web Tracking is a tool that tracks visits to your Web sites. You can link this data to individual contacts \nand then target communications to contacts based on their Web behaviors.",
		html: "<meta name=\"com.silverpop.page_name\" content=\"${page_name}\"/>\n<meta name=\"com.silverpop.brandeddomains\" content=\"${branded_domains}\" />\n\n",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Silverpop.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Secure Domain URL",
			description: "The domain for secure pages on your site provided by your Org Admin",
			token: "secure_domain",
			uv: ""
		}, {
			name: "Non-Secure Domain URL",
			description: "The domain for non-secure pages on your site provided by your Org Admin",
			token: "non_secure_domain",
			uv: ""
		}, {
			name: "Branded Domains",
			description: "The comma separated listed of qualified/unqualified branded domains i.e. www.a.com,b.com,www.c.com",
			token: "branded_domains",
			uv: ""
		}, {
			name: "Page Name",
			description: "The name for the page the tag is currently firing on",
			token: "page_name",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		var x = document.createElement("script");
		x.src = (document.location.protocol === "https:") ? "" + this.valueForToken(
			"secure_domain") + "" : "" + this.valueForToken("non_secure_domain") + "";
		x.type = "text/javascript";
		document.getElementsByTagName("head")[0].appendChild(x);
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