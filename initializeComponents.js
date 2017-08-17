/**
 * Created by DELL on 1/6/2016.
 */
$(document).ready(
    function ()
    {
        /*
        $(
            '<a class="blog-nav-item" id="homeMenuID" href="http://gaia.gge.unb.ca/wmaps/students/menelaos/floodriskshowcase/Index.html">Home</a>' +
            '<a class="blog-nav-item" id="aboutMenuID" href="http://gaia.gge.unb.ca/wmaps/students/menelaos/floodriskshowcase/Documentation.html">About</a>' +
            '<a class="blog-nav-item" id="contactMenuID" href="http://gaia.gge.unb.ca/wmaps/students/menelaos/floodriskshowcase/Contact.html">Contact</a>')
            .appendTo('#blogNavigationID');
         */
        //sidebar
        $(
            '<div class="col-sm-3 col-sm-offset-1 blog-sidebar" align="center">' +
            '<div class="sidebar-module sidebar-module-inset">' +
            '<h4><b>' +
            'Flood Risk Evaluation RESTful API<br></b> ' +
            '<a href="http://www.unb.ca/"><img src="pictures/unb_gge.gif"></h4></a>' +
            'University of New Brunswick<br>' +
            'Geodesy & Geomatics Engineering' +
            '</div> ' +
            '</div>').appendTo('#sideBarID');

        //footer
        $(
            '<p>Developed by Dr. Emmanuel Stefanakis, Heather McGrath & Menelaos Kotsollaris - <a href="http://www.unb.ca/">UNB - GGE</a> ' +
            '- All rights reserved © 2015-2016<br>BETA Version: 2.3.1</p>').appendTo('#footerID');
    });