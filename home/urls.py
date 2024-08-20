from django.urls import path
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.home ),
    path('home/',views.home, name= 'home'),
    path('home/about.html', views.about , name='about'),
    path('about.html', views.about , name='about'),
    path('home/landing.html', views.home ,name='landing'),
    path('landing.html', views.home ,name='landing'),
    path('home/login.html', views.login, name='login'),
    path('login.html', views.login, name='login'),
    path('home/sign.html',views.signup, name='signup'),
    path('sign.html',views.signup, name='signup'),
    path('home/menu.html',views.menu, name='manu'),
    path('menu.html',views.menu, name='manu'),
    path('home/foodorde.html',views.shop, name='food'),
    path('foodorde.html',views.shop, name='food'),
    path('home/admin.html',views.Admin, name='admin'),
    path('admin.html',views.Admin, name='admin'),
    path('userorder.html',views.userorder, name='userorder'),
    path('home/userorder.html',views.userorder, name='userorder'),
    # path('home/userdash.html',views.unserDash,name='userdash'),
    # path('userdash.html',views.unserDash,name='userdash'),
    path('userdash.html',views.dashboard , name='user-dashboard'),
    path('home/userdash.html',views.dashboard , name='user-dashboard'),
    path('landing.html',views.logout , name= 'logout'),
    path('contact.html',views.contactus,name='contact-us')
    
]
