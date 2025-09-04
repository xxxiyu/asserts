function renderVideo(id, src) {
    var video = "<video class=\"video\" style=\"border-radius: 1rem;\" "
        + "id=\"video_" + id + "\" width=\"100%\" controls autoplay loop>" +
        "<source src=\"" + src + "\" type=\"video/mp4\">" +
        "</video>";
    $("#" + id).html(video);
}