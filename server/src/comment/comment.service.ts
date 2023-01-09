import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/repository/prisma.service';
import { CreateCommentDto } from './dto/comment.dto';
import { Comment } from '.prisma/client';

@Injectable()
export class CommentService {
  constructor(private readonly prismaService: PrismaService) {}

  async createComment(createCommentDto: CreateCommentDto): Promise<Comment> {
    const { user_email, feed_id, contents } = createCommentDto;

    const result = await this.prismaService.comment.create({
      data: {
        contents: contents,
        user_email: user_email,
        feed_id: feed_id,
      },
    });

    return result;
  }
}
