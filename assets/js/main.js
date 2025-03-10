"use strict";

//Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})


/* Vanilla RSS - https://github.com/sdepold/vanilla-rss */

const rss = new RSS(
	document.querySelector("#rss-feeds"),
	//Change this to your own rss feeds
	"https://feeds.feedburner.com/TechCrunch/startups",
	{
		// how many entries do you want?
		// default: 4
		// valid values: any integer
		limit: 3,


		// will request the API via https
		// default: false
		// valid values: false, true
		ssl: true,

		// outer template for the html transformation
		// default: "<ul>{entries}</ul>"
		// valid values: any string
		layoutTemplate: "<div class='items'>{entries}</div>",

		// inner template for each entry
		// default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
		// valid values: any string
		entryTemplate: '<div class="item"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fas fa-external-link-alt"></i>Read more</a></div></div>',

	}
);
rss.render();


/* Github Calendar - https://github.com/IonicaBizau/github-calendar */
new GitHubCalendar("#github-graph", "muhammadzubairmoosani", { responsive: true });


/* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
GitHubActivity.feed({ username: "muhammadzubairmoosani", selector: "#ghfeed" });


/* NIGHT MODE CONTENT HEIGHT CONTROL FUNCTIONALITY */
const element = document.getElementById("dark_mode_item")
const dark_mode_container = document.getElementById("dark_mode")


function addClass() {
	const mode = localStorage.getItem("darkSwitch")
	if (mode === 'dark') {
		element.classList.add('item_height');
		dark_mode_container.classList.remove('dark_mode_unActive');
	} else {
		element.classList.remove('item_height');
		dark_mode_container.classList.add('dark_mode_unActive');
	}
}
addClass()

element.addEventListener("change", function () {
	addClass()
});
