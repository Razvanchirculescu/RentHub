//
//
//
// @Configuration
// public class WebMvcConfiguration implements WebMvcConfigurer {
//
//     private final int MAX_AGE_SECS = 3600;
//
//     private String[] allowedOrigins;
//
//     @Override
//     public void addCorsMappings(CorsRegistry registry) {
//             registry.addMapping("/**")
//         .allowedMethods("HEAD", "OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE")
//         .maxAge(MAX_AGE_SECS);
//
//         @Override
//         public void addCorsMappings(CorsRegistry registry) {
//         registry.addMapping("/**")
//     .allowedOrigins("*")
//     .allowedMethods("*")
//     .allowedHeaders("*")
//     .exposedHeaders("Authorization")
//     .allowCredentials(true)
//     .maxAge(3600);
//     }
//
//     @Bean
//     public CorsFilter corsFilter() {
//         UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//         CorsConfiguration config = new CorsConfiguration();
//         config.addAllowedOrigin("*");
//         config.addAllowedHeader("*");
//         config.addAllowedMethod("*");
//         source.registerCorsConfiguration("/**", config);
//         return new CorsFilter(source);
//     }
// }