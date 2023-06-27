package com.example.Library.Book.app.lib;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class LibraryConfiguration {
    @Bean
    CommandLineRunner commandLineRunner(LibraryRepository libraryRepository){
        return args -> {
                    Library tsoa = new Library(
                                4321L,
                                "The Song of Achilles",
                                "Madelline Miller",
                                3,
                                11
                    );
                    Library elw = new Library(
                            6721L,
                            "Every Last Word",
                            "Tamara Ireland",
                            1,
                            21
                    );
                    Library Addie = new Library(
                            8331L,
                            "The Invisible Life of Addie LaRue",
                            "V E Schwab",
                            2,
                            7
                    );
                    libraryRepository.saveAll(List.of(tsoa,elw,Addie));
        };
    }
    @Configuration
    public class CORSConfiguration implements WebMvcConfigurer {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/**")
                    .allowedOrigins("http://localhost:3000")
                    .allowedMethods("GET", "POST", "PUT", "DELETE")
                    .allowedHeaders("*");
        }
    }
}
