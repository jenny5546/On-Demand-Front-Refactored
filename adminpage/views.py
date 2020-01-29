from django.shortcuts import render
from .models import Request, Plan, SelectedTheme, UploadedTheme
from django.http import HttpResponse, HttpResponseNotAllowed, HttpResponseRedirect
import json
from django.db.models import F
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def request(request):
    if request.method == 'POST':
        #변수 받아오기
        floor_type = request.POST.get('floor_type')
        commercial_type = request.POST.get('commercial_type')
        floor_number = request.POST.get('floor_number')
        floor_size = request.POST.get('floor_size')
        floor_size_unit = request.POST.get('floor_size_unit')
        floor_height = request.POST.get('floor_height')
        floor_height_unit = request.POST.get('floor_height_unit')
        floor_address = request.POST.get('floor_address')
        add_request = request.POST.get('add_req')

        newRequest = Request.objects.create(
            floor_type = floor_type,
            commercial_type = commercial_type,
            floor_number = floor_number,
            floor_size = floor_size,
            floor_size_unit = floor_size_unit,
            floor_height = floor_height,
            floor_height_unit = floor_height_unit, 
            floor_address = floor_address,
            add_request = add_request
        )

        #file 처리 
        for afile in request.FILES.getlist('floor_plan'):
            files = Plan()
            files.photo = afile
            files.save()
            newRequest.floor_plan.add(files)
            newRequest.save()

        for afile in request.FILES.getlist('uploaded_theme'):
            files = UploadedTheme()
            files.photo = afile
            files.save()
            newRequest.uploaded_theme.add(files)
            newRequest.save()

        for afile in request.POST.getlist('selected_theme'):
            themes = SelectedTheme()
            themes.option = afile
            themes.save()
            newRequest.selected_theme.add(themes)
            newRequest.save()
        
        return HttpResponse(status=200)
    else:
        return HttpResponseNotAllowed(['POST'])

def odd(k):
    if(k%2 == 0):
        return 0
    else:
        return 1

def dashboard(request):
    if request.method == 'GET':
        #labels = []
        #data = []

        requests = Request.objects.all()
        #requests_odd = Request.objects.annotate(odd=F('id') % 2).filter(odd=False) 
        #requests_even = Request.objects.annotate(odd=F('id') % 2).filter(odd=True) 
        queryset = Request.objects.order_by('-progress')[:]
        progress = [0,0,0,0,0]
        for user in queryset:
            for i in range(5):
                if(user.progress == i+1):
                    progress[i] += 1

        labels = ["progress_1", "progress_2", "progress_3", "progress_4", "progress_5"]
        data = progress.copy()

        return render(request, 'adminpage/dashboard.html', {
            'requests': requests,
            #'requests_even': requests_even,
            'labels': labels,
            'data': data,
        })


def show(request):
    if request.method == 'GET':
        onrunRequests = Request.objects.exclude(progress = 5) #on run: filter (step 5 이하, step 5이면 제외)
        totalRequests = Request.objects.all()
        return render(request, 'adminpage/show.html', {'totalRequests': totalRequests, 'onrunRequests': onrunRequests})


def each(request, id):
    if request.method == 'GET':
        arequest= Request.objects.get(id = id)
        return render(request, 'adminpage/request.html', {'arequest': arequest})

