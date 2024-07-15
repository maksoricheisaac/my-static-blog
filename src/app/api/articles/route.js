import { NextRequest, NextResponse } from "next/server";
import article1 from '../../../../public/articles/article1.json'
import article2 from '../../../../public/articles/article2.json'
import article3 from '../../../../public/articles/article3.json'
import article4 from '../../../../public/articles/article4.json'
import article5 from '../../../../public/articles/article5.json'
import article6 from '../../../../public/articles/article6.json'
import article7 from '../../../../public/articles/article7.json'
import article8 from '../../../../public/articles/article8.json'
import article9 from '../../../../public/articles/article9.json'
import article10 from '../../../../public/articles/article10.json'
import article11 from '../../../../public/articles/article11.json'
import article12 from '../../../../public/articles/article12.json'
import article13 from '../../../../public/articles/article13.json'
import article14 from '../../../../public/articles/article14.json'
import article15 from '../../../../public/articles/article15.json'
import article16 from '../../../../public/articles/article16.json'
import article17 from '../../../../public/articles/article17.json'
import article18 from '../../../../public/articles/article18.json'
import article19 from '../../../../public/articles/article19.json'
import article20 from '../../../../public/articles/article20.json'

const articles = [article1, article2, article3, article4, article5, article6, article7, article8, article9, article10, article11, article12, article13, article14, article15, article10, article16, article17, article18, article19, article20,]

export function GET(request) {
    const requestParams = request.nextUrl.searchParams;
    const query = requestParams.get('search');
    const page = parseInt(requestParams.get('page') || '1');
    const limit = parseInt(requestParams.get('limit') || '3');

    let filteredArticles = query ? articles.filter(article => article.title.includes(query)) : articles;

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

    return NextResponse.json({ articles: paginatedArticles, total: filteredArticles.length, page, limit });
}
