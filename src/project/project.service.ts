import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';


@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Project)
        private projectRepository: Repository<Project>,
        ) {}

      create(project: Partial<Project>) {
        return this.projectRepository.save(project);
      }

@Get(':id')
findOne(@Param('id') id: number) {
  return this.projectRepository.findOne({ where: { id: id } });
}

findAll() {
  return this.projectRepository.find();
}
      
update(id: number, project: Partial<Project>) {
  return this.projectRepository.update(id, project);
}

remove(id: number) {
  return this.projectRepository.delete(id);
}

}
