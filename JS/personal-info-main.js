function addScript(url) {
    document.write("<script language=javascript src=./config/config.js></script>");
}
addScript();
//不使用配置文件请注释点上面代码

//星光依旧灿烂，激情仍然燃烧。因为有梦想，所以我存在。你在你的领域里不惜青春，我在我的道路上不知疲倦。
$(function () {
    if (config) {
        $(".me").html(config.about);
        $(".research-intro").html(config.research_intro);

        if (Array.isArray(config.about_skills)) {
            let skillsContainer = $(".about-skill-groups");
            skillsContainer.empty();

            for (let i = 0; i < config.about_skills.length; i++) {
                let group = config.about_skills[i];

                if (!group || !group.title || !Array.isArray(group.skills)) {
                    continue;
                }

                let groupElement = $("<div>", { class: "about-skill-group" });
                let skillList = $("<ul>", { class: "about-skill-list" });

                groupElement.append($("<h4>").text(group.title));

                for (let j = 0; j < group.skills.length; j++) {
                    skillList.append($("<li>").text(group.skills[j]));
                }

                groupElement.append(skillList);
                skillsContainer.append(groupElement);
            }
        }

        if (Array.isArray(config.research_topics)) {
            let researchContainer = $(".research-topics");
            researchContainer.empty();

            for (let i = 0; i < config.research_topics.length; i++) {
                let topic = config.research_topics[i];

                if (!topic || !topic.title || !topic.description || !topic.figure || !topic.caption) {
                    continue;
                }

                let areaNumber = String(i + 1).padStart(2, "0");
                let topicClasses = "research-topic";

                if (i % 2 === 1) {
                    topicClasses += " research-topic-reverse";
                }

                let topicElement = $("<article>", {
                    class: topicClasses,
                    "data-aos": "fade-up",
                    "data-aos-offset": "80"
                });
                let topicCopy = $("<div>", { class: "research-topic-copy" });
                let figure = $("<figure>", { class: "research-figure" });

                topicCopy.append(
                    $("<p>", { class: "research-topic-number" }).text("Research Area " + areaNumber),
                    $("<h3>").text(topic.title),
                    $("<p>").text(topic.description)
                );

                figure.append(
                    $("<img>", {
                        class: "research-figure-image",
                        src: topic.figure,
                        alt: topic.title + " research figure",
                        loading: "lazy"
                    }),
                    $("<figcaption>").text(topic.caption)
                );

                topicElement.append(topicCopy, figure);
                researchContainer.append(topicElement);
            }
        }

        if (Array.isArray(config.publications)) {
            let publicationsContainer = $(".publications-list");
            publicationsContainer.empty();

            for (let i = 0; i < config.publications.length; i++) {
                let publication = config.publications[i];

                if (!publication || !publication.status || !publication.year || !publication.title ||
                    !publication.authors || !publication.venue || !publication.summary ||
                    !Array.isArray(publication.tags) || !publication.figure || !publication.caption) {
                    continue;
                }

                let statusClass = publication.status.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                let publicationCard = $("<article>", {
                    class: "publication-card publication-card-" + statusClass,
                    "data-aos": "fade-up",
                    "data-aos-offset": "70"
                });
                let publicationFigure = $("<figure>", { class: "publication-figure" });
                let publicationContent = $("<div>", { class: "publication-content" });
                let publicationMeta = $("<div>", { class: "publication-meta" });
                let publicationSummary = $("<div>", { class: "publication-summary" });
                let publicationTags = $("<ul>", {
                    class: "publication-tags",
                    "aria-label": "Topics"
                });
                let publicationActions = $("<div>", {
                    class: "publication-actions",
                    "aria-label": "Links for " + publication.title
                });

                publicationFigure.append(
                    $("<img>", {
                        class: "publication-image",
                        src: publication.figure,
                        alt: "Figure for " + publication.title,
                        loading: "lazy"
                    }),
                    $("<figcaption>").text(publication.caption)
                );

                publicationMeta.append(
                    $("<span>", {
                        class: "publication-status publication-status-" + statusClass
                    }).text(publication.status),
                    $("<time>", {
                        class: "publication-year",
                        datetime: String(publication.year)
                    }).text(publication.year)
                );

                publicationSummary.append(
                    $("<p>", { class: "publication-summary-text" }).text(publication.summary)
                );

                for (let j = 0; j < publication.tags.length; j++) {
                    publicationTags.append($("<li>").text(publication.tags[j]));
                }

                publicationContent.append(
                    publicationMeta,
                    $("<h3>").text(publication.title),
                    $("<p>", { class: "publication-authors" }).text(publication.authors),
                    $("<p>", { class: "publication-venue" }).text(publication.venue),
                    publicationSummary
                );

                if (publication.tags.length > 0) {
                    publicationContent.append(publicationTags);
                }

                if (publication.paper_url) {
                    publicationActions.append(
                        $("<a>", {
                            class: "publication-link",
                            href: publication.paper_url,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }).append(
                            $("<i>", { class: "bi bi-file-earmark-text", "aria-hidden": "true" }),
                            document.createTextNode(" Paper")
                        )
                    );
                }

                if (publication.arxiv_url) {
                    publicationActions.append(
                        $("<a>", {
                            class: "publication-link",
                            href: publication.arxiv_url,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }).append(
                            $("<i>", { class: "bi bi-journal-text", "aria-hidden": "true" }),
                            document.createTextNode(" arXiv")
                        )
                    );
                }

                if (publication.doi) {
                    publicationActions.append(
                        $("<a>", {
                            class: "publication-link publication-doi",
                            href: "https://doi.org/" + publication.doi,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            title: publication.doi,
                            "aria-label": "Open DOI " + publication.doi
                        }).append(
                            $("<i>", { class: "bi bi-link-45deg", "aria-hidden": "true" }),
                            document.createTextNode(" DOI")
                        )
                    );
                }

                if (publicationActions.children().length > 0) {
                    publicationContent.append(publicationActions);
                }

                publicationCard.append(publicationFigure, publicationContent);
                publicationsContainer.append(publicationCard);
            }
        }

        $(".profile-page .page-header").css("background-image", "url(" + config.url[0] + ")");
        $(".myphoto").attr("src", config.url[1]);
        $(".portfolio-section").css({
            "background": "url(" + config.url[2] + ") no-repeat center top",
            "margin-top": "30px",
            "padding-top": "50px",
            "text-align": "center !important",
            "background-attachment": "relative !important",
            "background-position": "center center !important",
            "min-height": "800px",
            "width": "100%",
            "background-size": "100%",
            "background-size": "cover",
            "position": "relative !important"
        });
        $(".others-section").css("background", "url(" + config.url[3] + ")");


        let row_i = 0;
        if (config.portfolio) {
            for (let i = 0; i < config.portfolio.length; i++) {
                if (i % 3 == 0) {
                    $(".portfolio-section-main-container").append("<div class=\"row\"></div>");
                    row_i++;
                }
                let e = $(".portfolio-section-main-container .row").eq(row_i - 1);
                let img = config.portfolio[i][0];
                let url = config.portfolio[i][1];
                let projectName = config.portfolio[i][2];
                let brief = config.portfolio[i][3];
                e.append("<div class=\"col-md-4\">\n" +
                    "    <div class=\"porfolio-image img-raised\" data-aos=\"fade-up\"\n" +
                    "         data-aos-anchor-placement=\"top-bottom\">\n" +
                    "        <a href=\"" + url + "\" title=\"点击查看详细信息\">\n" +
                    "            <figure class=\"portfolio-section-main\">\n" +
                    "                <img src=\"" + img + "\" alt=\"Image\" />\n" +
                    "                <figcaption>\n" +
                    "                    <div class=\"h4\">" + projectName + "</div>\n" +
                    "                    <p>" + brief + "</p>\n" +
                    "                </figcaption>\n" +
                    "            </figure>\n" +
                    "        </a>\n" +
                    "    </div>\n" +
                    "</div>");
            }
        }


        if (config.work) {
            for (let i = 0; i < config.work.length; i++) {

                let time = config.work[i][0];
                let what = config.work[i][1];
                let desc = config.work[i][2];


                $(".experience-section .container").append(
                    "<div class=\"card\">\n" +
                    "    <div class=\"row\">\n" +
                    "        <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\"\n" +
                    "             data-aos-duration=\"500\">\n" +
                    "            <div class=\"card-body\">\n" +
                    "                <p class=\"time\">\n" +
                    "                    " + time + "\n" +
                    "                </p>\n" +
                    "                <strong class=\"work\">" + what + "</strong>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n" +
                    "            <div class=\"card-body\">\n" +
                    desc +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</div>"
                );
            }
        }

        if (config.others) {
            for (let i = 0; i < config.others.length; i++) {
                var e;
                if (i % 2 == 0) {
                    e = $(".timeline-left .timeul");
                } else {
                    e = $(".timeline-right .timeul");
                }
                let time = config.others[i][0];
                let what = config.others[i][1];
                let desc = config.others[i][2];
                e.append(
                    "<li>\n" +
                    "    <div class=\"time-title\">" + time + "</div>\n" +
                    "    <span></span>\n" +
                    "    <div class=\"time-content\">\n" +
                    "        <h5>" + what + "</h5>\n" +
                    "        <p>" + desc + "</p>\n" +
                    "    </div>\n" +
                    "\n" +
                    "</li>"
                )
            }
        }
    }

    progress();

    function updateNavbarBackground() {
        $(".page-header .bg-primary").toggleClass("navbar-scrolled", $(window).scrollTop() > 0);
    }

    updateNavbarBackground();

    $(window).scroll(function () {
        updateNavbarBackground();


        if ($(".skill-section .card").hasClass("aos-animate")) {
            $(".progress-bar-inner").addClass("p-a");
            progress();
        } else {
            $(".progress-bar-inner").removeClass("p-a");
        }

    });

    function progress() {
        var progress = $(".progress-bar-inner");
        progress.each(function (i) {
            var data = $(this).attr('data-value');
            $(this).prev().find("span").html(data + "%");
        });
    }

    //----END---


});
