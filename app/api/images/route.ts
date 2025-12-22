import { NextRequest, NextResponse } from 'next/server';
import { saveImage, getImage, getAllImages, deleteImage } from '../../../lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body.url || !body.alt) {
      return NextResponse.json(
        { error: 'Missing required fields: url and alt' },
        { status: 400 }
      );
    }
    
    const savedImage = await saveImage({
      url: body.url,
      alt: body.alt,
      source: body.source,
      sourceUrl: body.sourceUrl,
      sourceUser: body.sourceUser,
    });
    
    return NextResponse.json(savedImage);
  } catch (error) {
    console.error('Error saving image:', error);
    return NextResponse.json(
      { error: 'Failed to save image' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (id) {
      const image = await getImage(id);
      if (!image) {
        return NextResponse.json(
          { error: 'Image not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(image);
    }
    
    const images = await getAllImages();
    return NextResponse.json(images);
  } catch (error) {
    console.error('Error retrieving images:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve images' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'Missing required parameter: id' },
        { status: 400 }
      );
    }
    
    const success = await deleteImage(id);
    if (!success) {
      return NextResponse.json(
        { error: 'Image not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting image:', error);
    return NextResponse.json(
      { error: 'Failed to delete image' },
      { status: 500 }
    );
  }
}