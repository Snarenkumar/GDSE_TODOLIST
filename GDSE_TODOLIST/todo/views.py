from django.shortcuts import render
from django.shortcuts import HttpResponse
# Create your views here.


def home(request):
    return render (request,'index.html') 


def product(request):
    
    listitems=request.GET["to-do"]
    print(listitems)
    return render (request,'base.html',{'items': listitems}) 