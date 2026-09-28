"""Gera logo-rrm.webp a partir de logo-rrm.png (requer: pip install pillow).

Uso, na pasta do site:  python3 ferramentas/gerar-webp.py
"""
from PIL import Image

img = Image.open("logo-rrm.png").convert("RGBA")
img.save("logo-rrm.webp", "WEBP", quality=88, method=6)
print("logo-rrm.webp gerado:", img.size)
