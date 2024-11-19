from django.shortcuts import render
from django.shortcuts import HttpResponse
# Create your views here.
from django.utils.timezone import now

def home(request):
    return render (request,'index.html', {'timestamp': now().timestamp()}) 


def product(request):
    
    listitems=request.GET["to-do"]
    print(listitems)
    return render (request,'base.html',{'items': listitems}) 