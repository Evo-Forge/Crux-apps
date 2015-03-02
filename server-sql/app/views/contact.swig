{% extends "layout.swig" %}
{% block title %}Contact{% endblock %}

{% block center %}
<br/><br/>
{% endblock %}

{% block content %}
<section>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2>Contact Me</h2>
                <hr class="star-primary">
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
                <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. -->
                <form name="sentMessage" id="contactForm" >
                    <div class="row control-group">
                        <div class="form-group col-xs-12 floating-label-form-group controls">
                            <label>Name</label>
                            <input type="text" name="name" class="form-control" placeholder="Name" id="name" required >
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <div class="row control-group">
                        <div class="form-group col-xs-12 floating-label-form-group controls">
                            <label>Email Address</label>
                            <input type="text" name="email" class="form-control" placeholder="Email Address" id="email" >
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <div class="row control-group">
                        <div class="form-group col-xs-12 floating-label-form-group controls">
                            <label>Message</label>
                            <textarea rows="5" name="message" class="form-control" placeholder="Message" id="message" ></textarea>
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <br>
                    <div id="success"></div>
                    <div class="row">
                        <div class="form-group col-xs-12">
                            <button type="submit" class="btn btn-success btn-lg">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
    <script type="text/javascript">
        $(function() {
            $("#contactForm").submit(function(e) {
                e.preventDefault();
                e.stopPropagation();
                $.post('/contact', $(this).serialize()).success(function(d) {
                    console.log(d);
                    if(!d || d.type !== 'success') {
                        alert((d && d.message) || 'An unexpected error occurred.');
                        return;
                    }
                    alert(d.message);
                }).error(function(e) {
                    alert('An unexpected error occurred.');
                });
                return false;
            });
        });
    </script>
{% endblock %}