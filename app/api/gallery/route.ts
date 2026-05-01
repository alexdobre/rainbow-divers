import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const folder = searchParams.get('folder');

  if (!folder) {
    return NextResponse.json({ error: 'Folder parameter is required' }, { status: 400 });
  }

  try {
    const folderPath = path.join(process.cwd(), 'public', 'pic', folder);

    // Check if folder exists
    if (!fs.existsSync(folderPath)) {
      return NextResponse.json({ error: 'Folder not found' }, { status: 404 });
    }

    // Read directory contents
    const files = fs.readdirSync(folderPath);

    // Filter for media files only (images and videos)
    const mediaFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.mp4', '.webm', '.ogg', '.mov'].includes(ext);
    });

    // Sort files alphabetically
    mediaFiles.sort();

    return NextResponse.json(mediaFiles);
  } catch (error) {
    console.error('Error reading gallery folder:', error);
    return NextResponse.json({ error: 'Failed to read gallery folder' }, { status: 500 });
  }
}
