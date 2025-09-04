$(function () {    
    var content =
        "<li itemscope itemtype=\'http://www.schema.org/SiteNavigationElement\'>" +
        "    <a aria-current=\'false\' href=\'home.html\' itemprop=\'url\'>" +
        "        <span itemprop=\'name\'>Home</span>" +
        "    </a>" +
        "</li>" +
        "" +
        "<li itemscope itemtype=\'http://www.schema.org/SiteNavigationElement\'>" +
        "    <a aria-current=\'true\' href=\'posts/arata-arina/index.html\' itemprop=\'url\'>" +
        "        <span itemprop=\'name\'>Arata Arina</span>" +
        "    </a>" +
        "</li>" +
        "" +
        "<li itemscope itemtype=\'http://www.schema.org/SiteNavigationElement\'>" +
        "    <a aria-current=\'true\' href=\'posts/mikami-aizawa/index.html\' itemprop=\'url\'>" +
        "        <span itemprop=\'name\'>Minami Aizawa</span>" +
        "    </a>" +
        "</li>" +
        "" +
        "<li itemscope itemtype=\'http://www.schema.org/SiteNavigationElement\'>" +
        "    <a aria-current=\'true\' href=\'posts/saika.html\' itemprop=\'url\'>" +
        "        <span itemprop=\'name\'>Saika Kawakita</span>" +
        "    </a>" +
        "</li>" +
        "" +
        "<li itemscope itemtype=\'http://www.schema.org/SiteNavigationElement\'>" +
        "    <a aria-current=\'true\' href=\'posts/jasmine-j.html\' itemprop=\'url\'>" +
        "        <span itemprop=\'name\'>Jasmine J</span>" +
        "    </a>" +
        "</li>" +
        "" +
        "";
    $("#menu").html(content);
});