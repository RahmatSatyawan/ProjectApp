import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project, StatusProject } from './project.entity';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  findAll() {
  return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
  return this.projectService.findOne(id);
  }

  @Post()
  create(@Body() project: Partial<Project>) {
    return this.projectService.create(project);
  }
  
  @Put(':id')
  update(@Param('id') id: number, @Body() project: Partial<Project>) {
    return this.projectService.update(id, project);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.projectService.remove(id);
  }
}
