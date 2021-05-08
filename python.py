import cv2
import numpy as np
from string import Template
from PIL import Image
from fpdf import FPDF
pdf = FPDF()

n =212

imagelist= [];


for i in range(1, n):
    # print('book1/content-p'+str(i)+'_0')
    im1 = cv2.imread('book4/content-p'+str(i)+'_0.jpg')
    im2 = cv2.imread('book4/content-p'+str(i)+'_1.jpg')
    im3 = cv2.imread('book4/content-p'+str(i)+'_2.jpg')

    im_v = cv2.vconcat([im1, im2, im3])
    cv2.imwrite('pages/page'+str(i)+'.jpg', im_v)

image0 = Image.open('pages/page'+str(1)+'.jpg')
im0 = image0.convert('RGB')

for i in range(2, n):
    image1 = Image.open('pages/page'+str(i)+'.jpg')
    im1 = image1.convert('RGB')
    imagelist.append(im1);

im0.save('bookFourth.pdf',save_all=True, append_images=imagelist)