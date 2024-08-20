from django.shortcuts import render ,redirect , get_object_or_404
from django.http import HttpResponse
from django.contrib import messages
from django.template import loader , context
from .models import contact , contactUs 
from django.contrib.auth import authenticate, login as auth_login , logout as auth_logout
# from django.contrib.auth.decorators import login_required
# from django.core.mail import send_mail ,EmailMultiAlternatives
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import TemplateView
from django.http import JsonResponse

# Create your views here.
class MyView(LoginRequiredMixin, TemplateView):
    template_name = 'userdash.html'
    
    
def Admin(request):
    template = loader.get_template('admin.html')
    return HttpResponse(template.render())

# def User(request):
#     template = loader.get_template('userorder.html')
#     return HttpResponse(template.render())
def home(request):
    if request.method == 'POST':
        Date = request.POST.get('Date')
        Email = request.POST.get('Email')
        TableNo = request.POST.get('TableNo')

        new_table = contactUs(Date=Date, Email=Email, TableNo=TableNo)
        new_table.save()
    template = loader.get_template('landing.html')
    return HttpResponse(template.render())

def about(request):
    template = loader.get_template('about.html')
    return HttpResponse(template.render())


def signup(request):
    if request.method == 'POST':
        username = request.POST['Username']
        email = request.POST['Email']
        rollno = request.POST['RollNo']
        password = request.POST['Password']
        
        if password is not None:
            # user = contact.objects.get(username=username)
            # user.set_password(password)
            # user.save()
            # messages.success(request, f'welcome {username}')
            return redirect('login.html')
            
        if len(password) < 8:
            messages.info(request, 'Password must be at least 8 character' )
            return redirect('sign.html')
        new_contact = contact(username=username, email=email, rollno=rollno, password=password)
        new_contact.save()

    template = loader.get_template('sign.html')
    return HttpResponse(template.render())
    # form = AuthenticationForm()
    # return render (request,'sign.html',{'form':form, 'tittle' : ' sign up '})
    


def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(username,password)
       
        user = authenticate(request, username=username, password=password)
        print(f'Authenticated User: {user}')
        
        if user is not None:
            # form = login(request,user)
            auth_login(request,user)
            messages.success(request, f'welcome {username}')
            return redirect('userdash.html')
        else:
            messages.error(request, f'account is not exist ')
    form = AuthenticationForm()
    return render (request,'login.html',{'form':form, 'tittle' : 'log in '})
    
    # if request.method == 'POST':
    #     form = AuthenticationForm(request, data=request.POST)
    #     if form.is_valid():
    #         username = form.cleaned_data.get('username')
    #         password = form.cleaned_data.get('password')
    #         print(username, password)
    #         user = authenticate(request, username=username, password=password)
            
    #         if user is not None:
    #             auth_login(request, user)
    #             messages.success(request, f'Welcome, {username}!')
    #             return redirect('home.html')  # replace 'home' with your homepage URL name
    #         else:
    #             messages.error(request, 'Invalid username or password1.')
    #     else:
    #         messages.error(request, 'Invalid username or password2.')
    # else:
    #     form = AuthenticationForm()
    
    # return render(request, 'login.html', {'form': form})
            
    # template = loader.get_template('login.html')
    # return HttpResponse(template.render())
# @login_required
def logout(request):
    auth_login(request)
    messages.success(request, 'You have been logged out successfully.')
    print('logout successfully')
    return redirect('home')

# @login_required
def dashboard(request):
    user = request.user
    context = {'user':user}
    return render(request, 'userdash.html',context)

def menu(request):
    template = loader.get_template('menu.html')
    return HttpResponse(template.render() )

def shop(request):
    template = loader.get_template('foodorde.html')
    return HttpResponse(template.render())

def userorder(request):
    template = loader.get_template('userorder.html')
    return HttpResponse(template.render())

def contactus(request):
    template = loader.get_template('contact.html')
    return HttpResponse(template.render())
