function addScript(url) {
    document.write("<script language=javascript src=./config/config.js></script>");
}
addScript();
//不使用配置文件请注释点上面代码

//星光依旧灿烂，激情仍然燃烧。因为有梦想，所以我存在。你在你的领域里不惜青春，我在我的道路上不知疲倦。
$(function () {
    if (config) {
        $(".me").html(config.about);

        if (Array.isArray(config.about_skill_groups)) {
            let skillsContainer = $(".about-skill-groups");
            skillsContainer.empty();

            for (let i = 0; i < config.about_skill_groups.length; i++) {
                let group = config.about_skill_groups[i];

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
