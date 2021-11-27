import { Router, Request, Response, NextFunction } from 'express'
import HttpException from '@utils/exceptions/http.exception'
import IContorller from '@utils/interfaces/controller.interface'

import validationMiddleware from '@/middleware/validation.middleware'
import validate from '@/resources/post/post.validation'
import postService from '@/resources/post/post.service'
