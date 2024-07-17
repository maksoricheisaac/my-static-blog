// api/articles/[id].js
import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

import article1 from '../../../../../public/articles/article1.json'
import article2 from '../../../../../public/articles/article2.json'
import article3 from '../../../../../public/articles/article3.json'
import article4 from '../../../../../public/articles/article4.json'
import article5 from '../../../../../public/articles/article5.json'
import article6 from '../../../../../public/articles/article6.json'
import article7 from '../../../../../public/articles/article7.json'
import article8 from '../../../../../public/articles/article8.json'
import article9 from '../../../../../public/articles/article9.json'
import article10 from '../../../../../public/articles/article10.json'
import article11 from '../../../../../public/articles/article11.json'
import article12 from '../../../../../public/articles/article12.json'
import article13 from '../../../../../public/articles/article13.json'
import article14 from '../../../../../public/articles/article14.json'
import article15 from '../../../../../public/articles/article15.json'
import article16 from '../../../../../public/articles/article16.json'
import article17 from '../../../../../public/articles/article17.json'
import article18 from '../../../../../public/articles/article18.json'
import article19 from '../../../../../public/articles/article19.json'
import article20 from '../../../../../public/articles/article20.json'
import { log } from 'console';

const articles = [article1, article2, article3, article4, article5, article6, article7, article8, article9, article10, article11, article12, article13, article14, article15, article10, article16, article17, article18, article19, article20,]

const commentsDir = path.join(process.cwd(), 'public', 'comments');

export async function GET(request, { params }) {
  const { id } = params;
  const article = articles.find(article => article.id.toString() === id);
  if (!article) {
    return NextResponse.json({ error: 'Article not found' }, { status: 404 });
  }

  try {
    const commentsFilePath = path.join(commentsDir, `${id}.json`);
    const commentsData = await fs.readFile(commentsFilePath, 'utf8');
    const newComments = JSON.parse(commentsData);
    const allComments = [...article.comments, ...newComments];
    return NextResponse.json({ ...article, comments: allComments.reverse() });
  } catch (error) {
    return NextResponse.json({ ...article, comments: article.comments.reverse() });
  }
}


export async function POST(request, { params }) {
  const { id } = params;
  const data = await request.json();
  const commentsFilePath = path.join(commentsDir, `${id}.json`);

  try {
    const commentsData = await fs.readFile(commentsFilePath, 'utf8');
    const comments = JSON.parse(commentsData);
    const newComment = { id: comments.length + 1, ...data };
    comments.push(newComment);
    await fs.writeFile(commentsFilePath, JSON.stringify(comments, null, 2));
    return NextResponse.json(newComment);
  } catch (error) {
    const newComment = { id: 1, ...data };
    await fs.writeFile(commentsFilePath, JSON.stringify([newComment], null, 2));
    return NextResponse.json(newComment);
  }
}
