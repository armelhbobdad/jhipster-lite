import { Service } from '@/common/domain/Service';

export type RestServiceId = string;

const SERVICES: Record<string, Service> = {
  'aop-logging': Service.AOP_LOGGING,
  angular: Service.ANGULAR,
  'angular-jwt': Service.ANGULAR_WITH_JWT,
  'angular-oauth2': Service.ANGULAR_OAUTH2,
  consul: Service.CONSUL,
  'dev-tools': Service.DEV_TOOLS,
  dockerfile: Service.DOCKERFILE,
  download: Service.DOWNLOAD,
  'ehcache-with-java-config': Service.EHCACHE_WITH_JAVA_CONFIG,
  'eureka-client': Service.EUREKA_CLIENT,
  'ehcache-with-xml-config': Service.EHCACHE_WITH_XML_CONFIG,
  flyway: Service.FLYWAY,
  'flyway-user-and-authority-changelogs': Service.FLYWAY_WITH_USERS_AND_AUTHORITY_CHANGELOGS,
  'frontend-maven-plugin': Service.FRONTEND_MAVEN_PLUGIN,
  'github-actions': Service.GITHUB_ACTIONS,
  init: Service.INITIALIZATION,
  jib: Service.JIB,
  'jacoco-check-min-coverage': Service.JACOCO_CHECK_MINIMAL_COVERAGE,
  'java-base': Service.JAVA_BASE,
  liquibase: Service.LIQUIBASE,
  'liquibase-user-and-authority-changelogs': Service.LIQUIBASE_WITH_USERS_AND_AUTHORITY_CHANGELOGS,
  logstash: Service.LOGSTASH,
  'maven-java': Service.MAVEN_JAVA,
  'codespaces-setup': Service.CODESPACES_SETUP,
  'gitpod-setup': Service.GITPOD_SETUP,
  mariadb: Service.MARIADB,
  mysql: Service.MYSQL,
  mongodb: Service.MONGODB,
  mongock: Service.MONGOCK,
  mssql: Service.MSSQL,
  postgresql: Service.POSTGRESQL,
  'sonar-java-backend': Service.SONAR_JAVA_BACKEND,
  'sonar-java-backend-and-frontend': Service.SONAR_JAVA_BACKEND_AND_FRONTEND,
  springboot: Service.SPRINGBOOT,
  'springboot-tomcat': Service.SPRINGBOOT_MVC_WITH_TOMCAT,
  'springboot-undertow': Service.SPRINGBOOT_MVC_WITH_UNDERTOW,
  'springboot-webflux-netty': Service.SPRINGBOOT_WEBFLUX_NETTY,
  'springboot-actuator': Service.SPRINGBOOT_ACTUATOR,
  'springdoc-openapi': Service.SPRING_DOC,
  'springboot-jwt': Service.SPRINGBOOT_JWT,
  'springboot-jwt-basic-auth': Service.SPRINGBOOT_JWT_WITH_BASIC_AUTHENTICATION,
  'springdoc-openapi-with-security-jwt': Service.SPRINGDOC_OPENAPI_WITH_SECURIITY_JWT,
  'springboot-oauth2': Service.SPRINGBOOT_OAUTH2,
  'springboot-oauth2-account': Service.SPRINGBOOT_OAUTH2_ACCOUNT,
  'dummy-feature': Service.SPRINGBOOT_DUMMY_FEATURE,
  'springboot-cucumber': Service.SPRINGBOOT_CUCUMBER,
  'springboot-pulsar': Service.SPRINGBOOT_PULSAR,
  'springboot-kafka': Service.SPRINGBOOT_KAFKA,
  'springboot-kafka-dummy-producer-consumer': Service.SPRINGBOOT_KAFKA_DUMMY_PRODUCER_CONSUMER,
  'springboot-kafka-akhq': Service.SPRINGBOOT_KAFKA_AKHQ,
  'springboot-async': Service.SPRINGBOOT_ASYNC,
  'spring-cloud': Service.SPRING_CLOUD,
  react: Service.REACT,
  'react-styled': Service.REACT_STYLED,
  vue: Service.VUE,
  unknown: Service.UNKNOWN,
};

export const toService = (restServiceId: RestServiceId): Service =>
  Object.keys(SERVICES).includes(restServiceId) ? SERVICES[restServiceId] : Service.UNKNOWN;
