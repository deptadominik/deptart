<script>
import feather from "feather-icons";
import ProjectHeader from "../components/projects/ProjectHeader.vue";
import ProjectGallery from "../components/projects/ProjectGallery.vue";
import ProjectInfo from "../components/projects/ProjectInfo.vue";
import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects.vue";
import projects from "../data/projects";

export default {
  name: "Projects",
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
    ProjectRelatedProjects,
  },
  data: () => {
    return {
		currentProject: null,
	}
  },
  beforeRouteEnter(to, from, next) {
    const projectId = to.params.projectId;
    const project = projects.find((project) => project.id === parseInt(projectId, 10));
    if (project) {
		next((vm) => {
        vm.currentProject = project;
      });
    } else {
      next('/not-found');
    }
  },
  mounted() {
    feather.replace();
	
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader v-if="currentProject" :singleProjectHeader="currentProject.singleProjectHeader" />

    <!-- Project gallery -->
    <ProjectGallery v-if="currentProject" :projectImages="currentProject.projectImages" />

    <!-- Project information -->
    <ProjectInfo v-if="currentProject" :projectInfo="currentProject.projectInfo" />

    <!-- Project related projects -->
    <ProjectRelatedProjects v-if="currentProject" :relatedProject="currentProject.relatedProject" />
  </div>
</template>

<style scoped></style>
