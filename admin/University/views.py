from django.shortcuts import render


def main_view(request):
    responce = {}
    return render(
        request,
        'University/index.html',
        responce
    )
